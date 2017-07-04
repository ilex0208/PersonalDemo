import React, {Component, PropTypes} from 'react';
import Upload from 'amos-uploader';
import Icon from 'amos-icon';
import UploadList from './UploadList';

import classNames from 'classnames';

import validateFile, { parseSize } from './fileUtils';

const prefixCls = 'amos-upload';

const fileAccept = {
  video: 'video/mp4'
};

function noop() {
}

function BU() {
  return true;
}

// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    response: file.response,
    error: file.error,
    percent: 0,
    originFileObj: file
  };
}

/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
  let k = 0.1;
  const i = 0.01;
  const end = 0.98;
  return function(s) {
    let start = s;
    if (start >= end) {
      return start;
    }

    start += k;
    k = k - i;
    if (k < 0.001) {
      k = 0.001;
    }
    return start * 100;
  };
}

const getFileItem = (file, fileList) => {
  let matchWay = (!file.uid) ? 'name' : 'uid';
  let target = fileList.filter((item) => item[matchWay] === file[matchWay])[0];
  return target;
};

const DraggerIploader = props => {
  return <AmosUploader {...props} type="drag" style={{ height: props.height }} />;
};

DraggerIploader.propTypes = {
  height: PropTypes.any
};

const defaultChildren = () => {
  return (
    <div className="amos-upload-wrapper">
      <Icon icon="shipinshangchuan" />
      <div className="amos-upload-text">上传视频</div>
    </div>
  );
};

class AmosUploader extends Component {
  static DraggerIploader = DraggerIploader;
  static FILE_ACCEPT = fileAccept;
  static validateFile = validateFile;
  static propTypes = {
    fileList: PropTypes.array,
    defaultFileList: PropTypes.array,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
    onPreview: PropTypes.func,
    type: PropTypes.string,
    beforeUpload: PropTypes.func,
    showUploadList: PropTypes.bool,
    showType: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    token: PropTypes.string,
    apiKey: PropTypes.string,
    uploadURI: PropTypes.string,
    headers: PropTypes.object,
    fileType: PropTypes.string,
    limitSize: PropTypes.any, // 总文件限制 string | number
    singleLimitSize: PropTypes.any // 单个文件大小限制 string | number

  };

  static defaultProps = {
    type: 'select',
    multiple: false,
    uploadURI: '',
    data: {},
    fileType: fileAccept.video, // 文件类型 默认 video
    onChange: noop,
    beforeUpload: BU,
    showUploadList: true,
    showType: 'text', // or pictrue
    className: '',
    disabled: false,
    children: defaultChildren()
  }

  constructor(props) {
    super(props);
    this.state = {
      fileList: props.fileList || props.defaultFileList || [],
      dragState: 'drop'
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('fileList' in nextProps) {
      this.setState({
        fileList: nextProps.fileList || []
      });
    }
  }

  onStart = (file) => {
    let targetItem;
    let nextFileList = this.state.fileList.concat();
    if (file.length > 0) {
      targetItem = file.map(f => {
        const fileObject = fileToObject(f);
        fileObject.status = 'uploading';
        return fileObject;
      });
      nextFileList = nextFileList.concat(targetItem);
    } else {
      targetItem = fileToObject(file);
      targetItem.status = 'uploading';
      nextFileList.push(targetItem);
    }
    this.onChange({
      file: targetItem,
      fileList: nextFileList
    });
    // fix ie progress
    if (!window.FormData) {
      this.autoUpdateProgress(0, targetItem);
    }
  }

  onFileDrop = (e) => {
    this.setState({
      dragState: e.type
    });
  }

  onChange = (info) => {
    if (!('fileList' in this.props)) {
      this.setState({ fileList: info.fileList });
    }
    this.props.onChange(info);
  }

  onSuccess = (response, file) => {
    this.clearProgressTimer();
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) { /* do nothing */ }
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.status = 'done';
    targetItem.response = response;
    this.onChange({
      file: targetItem,
      fileList
    });
  }

  onProgress = (e, file) => {
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.percent = e.percent;
    this.onChange({
      event: e,
      file: targetItem,
      fileList: this.state.fileList
    });
  }

  onError = (error, response, file) => {
    this.clearProgressTimer();
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    this.handleRemove(targetItem);
  }

  onPreview = () => {
    if ('onPreview' in this.props) {
      this.props.onPreview();
    } else {
      //
    }
  }


  autoUpdateProgress(percent, file) {
    const getPercent = genPercentAdd();
    let curPercent = 0;
    this.progressTimer = setInterval(() => {
      curPercent = getPercent(curPercent);
      this.onProgress({
        percent: curPercent
      }, file);
    }, 200);
  }

  removeFile(file) {
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    let index = fileList.indexOf(targetItem);
    if (index !== -1) {
      fileList.splice(index, 1);
      return fileList;
    }
    return null;
  }

  handleRemove(file) {
    let fileList = this.removeFile(file);
    if (fileList) {
      this.onChange({
        file,
        fileList
      });
    }
  }

  handleManualRemove = (file) => {
    this.refs.upload.abort(file);

    file.status = 'removed';

    if ('onRemove' in this.props) {
      this.props.onRemove(file);
    } else {
      this.handleRemove(file);
    }
  }

  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }

  assignHeader = () => {
    let {token, apiKey, headers} = this.props;
    if(headers){
      return {
        headers: Object.assign({}, headers, {'X-Requested-With': null})
      };
    }
    return {
      headers: {
        'X-Requested-With': null, // close default XHR header
        'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/octet-stream',
        'X-Access-Token': token,
        'X-Api-Key':  apiKey
      }
    };
  }

  render() {
    let type = this.props.type || 'select';
    let fileType = this.props.fileType || fileAccept.video;
    let uploadURI = this.props.uploadURI || '';
    let limitSize = parseSize(this.props.limitSize) || 0; // 总文件限制 string | number
    let singleLimitSize = parseSize(this.props.singleLimitSize) || 0; // 单个文件大小限制 string | number
    let headers = this.assignHeader();
    let props = {
      ...this.props,
      ...headers,
      limitSize,
      singleLimitSize,
      accept: fileAccept[fileType] || fileType,
      action: uploadURI,
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      beforeUpload: this.props.beforeUpload
    };
    let uploadList;
    if (this.props.showUploadList) {
      uploadList = (
        <UploadList
          showType={this.props.showType}
          items={this.state.fileList}
          onPreview={this.onPreview}
          onRemove={this.handleManualRemove}
        />
      );
    }
    if (type === 'drag') {
      const dragCls = classNames({
        [prefixCls]: true,
        [`${prefixCls}-drag`]: true,
        [`${prefixCls}-drag-uploading`]: this.state.fileList.some(file => file.status === 'uploading'),
        [`${prefixCls}-drag-hover`]: this.state.dragState === 'dragover',
        [`${prefixCls}-disabled`]: this.props.disabled
      });
      return (
        <span className={this.props.className}>
          <div
            className={dragCls}
            onDrop={this.onFileDrop}
            onDragOver={this.onFileDrop}
            onDragLeave={this.onFileDrop}
          >
            <Upload {...props} ref="upload">
              <div className={`${prefixCls}-drag-container`}>
                {this.props.children}
              </div>
            </Upload>
          </div>
          {uploadList}
        </span>
      );
    }

    const uploadButtonCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-select`]: true,
      [`${prefixCls}-select-${this.props.showType}`]: true,
      [`${prefixCls}-disabled`]: this.props.disabled
    });

    const uploadButton = (
      <div className={uploadButtonCls} style={{ display: this.props.children ? '' : 'none' }}>
        <Upload {...props} ref="upload" />
      </div>
    );

    if (this.props.showType === 'picture-card') {
      return (
        <span className={this.props.className}>
          {uploadList}
          {uploadButton}
        </span>
      );
    }

    return (
      <span className={this.props.className}>
        {uploadButton}
        {uploadList}
      </span>
    );
  }
}

export default AmosUploader;
