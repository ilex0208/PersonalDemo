import React, {Component, PropTypes} from 'react';
import Animate from 'rc-animate';
import Icon from 'amos-icon';
const prefixCls = 'amos-upload';
import {Progress} from 'amos-antd';
import classNames from 'classnames';

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = (file, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => callback(reader.result);
  reader.readAsDataURL(file);
};

class UploadList extends Component {
  static propTypes = {
    onRemove: PropTypes.func,
    onPreview: PropTypes.func,
    showType: PropTypes.string,
    file: PropTypes.array,
    progressAttr: PropTypes.object
  };

  static defaultProps = {
    showType: 'text',  // or picture
    file: [],
    progressAttr: {
      strokeWidth: 3,
      showInfo: false
    }
  };

  componentDidUpdate() {
    const { showType, file } = this.props;
    if (showType !== 'picture' && showType !== 'picture-card') {
      return;
    }
    if (typeof document === 'undefined' ||
        typeof window === 'undefined' ||
        !window.FileReader ||
        !window.File ||
        !(file.originFileObj instanceof File) ||
        file.thumbUrl !== undefined) {
      return;
    }
    /*eslint-disable */
    file.thumbUrl = '';
    /*eslint-enable */
    previewFile(file.originFileObj, (previewDataUrl) => {
      /*eslint-disable */
      file.thumbUrl = previewDataUrl;
      /*eslint-enable */
      this.forceUpdate();
    });
  }

  handleClose = (file) => {
    this.props.onRemove(file);
  }

  handlePreview = (file, e) => {
    if (this.props.onPreview) {
      e.preventDefault();
      return this.props.onPreview(file);
    }
  }

  render() {
    const { showType, file } = this.props;
    let progress;
    let icon = <Icon icon="paper-clip" />;

    if (showType === 'picture' || showType === 'picture-card') {
      if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {
        if (showType === 'picture-card') {
          icon = <div className={`${prefixCls}-list-item-uploading-text`}>文件上传中</div>;
        } else {
          icon = <Icon className={`${prefixCls}-list-item-thumbnail`} icon="picture" />;
        }
      } else {
        icon = (
          <a
            className={`${prefixCls}-list-item-thumbnail`}
            onClick={e => this.handlePreview(file, e)}
            href={file.url}
            target="_blank"
          >
            <img src={file.thumbUrl || file.url} alt={file.name} />
          </a>
        );
      }
    }

    if (file.status === 'uploading') {
      progress = (
        <div className={`${prefixCls}-list-item-progress`}>
          <Progress type="line" {...this.props.progressAttr} percent={file.percent} />
        </div>
      );
    }

    const infoUploadingClass = classNames({
      [`${prefixCls}-list-item`]: true,
      [`${prefixCls}-list-item-${file.status}`]: true
    });

    const content = (
      <div className={infoUploadingClass} key={file.uid}>
        <div className={`${prefixCls}-list-item-info`}>
          {icon}
          {
            file.url
            ? (
              <a
                href={file.url}
                target="_blank"
                className={`${prefixCls}-list-item-name`}
                onClick={e => this.handlePreview(file, e)}
              >
                {file.name}
              </a>
            ) : (
              <span
                className={`${prefixCls}-list-item-name`}
                onClick={e => this.handlePreview(file, e)}
              >
                {file.name}
              </span>
            )
          }
          {
            showType === 'picture-card' && file.status !== 'uploading'
            ? (
              <span>
                <a
                  href={file.url}
                  target="_blank"
                  style={{ pointerEvents: file.url ? '' : 'none' }}
                  onClick={e => this.handlePreview(file, e)}
                >
                  <Icon icon="shipinbofang" />
                </a>
                <Icon icon="delete" onClick={() => this.handleClose(file)} />
              </span>
            ) : <Icon icon="cross" onClick={() => this.handleClose(file)} />
          }
        </div>
        {progress}
      </div>
    );

    const listClassNames = classNames({
      [`${prefixCls}-list`]: true,
      [`${prefixCls}-list-${showType}`]: true
    });

    return (
      <div className={listClassNames}>
        <Animate transitionName={`${prefixCls}-margin-top`}>
          {content}
        </Animate>
      </div>
    );
  }
}

export default UploadList;
