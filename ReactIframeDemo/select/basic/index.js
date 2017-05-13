import React from 'react';
import ReactDOM from 'react-dom';
import RcSelect, { Option, OptGroup } from './rc';
import classNames from 'classnames';

export default class Select extends React.Component {
  static Option = Option;
  static OptGroup = OptGroup;

  static defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false
  }

  static contextTypes = {
    antLocale: React.PropTypes.object
  }

  getPopupContainer = () => {
    const containerDom = ReactDOM.findDOMNode(this.refs['selectScrollWrapper']);
    return containerDom;
  }

  render() {
    let {
      size, className, combobox, notFoundContent, prefixCls, showSearch, optionLabelProp
    } = this.props;

    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      [`${prefixCls}-show-search`]: showSearch
    });

    const { antLocale } = this.context;
    if (antLocale && antLocale.Select) {
      notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    return (
      <div style={{ position: 'relative' }} id="selectScroll" ref="selectScrollWrapper">
        <RcSelect
          {...this.props}
          className={cls}
          optionLabelProp={optionLabelProp || 'children'}
          notFoundContent={notFoundContent}
          getPopupContainer={this.getPopupContainer}
        />
      </div>
    );
  }
}
