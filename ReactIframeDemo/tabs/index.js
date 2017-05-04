import React, { Component, PropTypes, cloneElement } from 'react';
// import RcTabs, { TabPane }  from 'rc-tabs';
import RcTabs, { TabPane }  from 'amos-tabs';
import classNames from 'classnames';
import Icon from 'antd/lib/icon';
import './index.css';

/**
 * tabs
 */
class Tabs extends Component {
  static TabPane = TabPane;

  static propTypes = {
    onEdit: PropTypes.func,
    onChange: PropTypes.func,
    prefixCls: PropTypes.string,
    size: PropTypes.string,// 'default' | 'small';
    tabPosition: PropTypes.any,
    animation: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.any,
    tabBarExtraContent: PropTypes.any,
    className: PropTypes.string,
    hideAdd: PropTypes.bool,
    onTabClick: PropTypes.func,
    exchangeable: PropTypes.bool, // whether exchange
    filterexchange: PropTypes.string // exchange list filter
  }

  static defaultProps = {
    prefixCls: 'ant-tabs',
    animation: 'slide-horizontal',
    type: 'line', // or 'card' 'editable-card'
    onChange() {},
    onEdit() {},
    hideAdd: false
  }

  createNewTab = (targetKey) => {
    const onEdit = this.props.onEdit;
    if (onEdit) {
      onEdit(targetKey, 'add');
    }
  }

  removeTab = (targetKey, e) => {
    e.stopPropagation();
    if (!targetKey) {
      return;
    }
    const onEdit = this.props.onEdit;
    if (onEdit) {
      onEdit(targetKey, 'remove');
    }
  }

  handleChange = (activeKey) => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(activeKey);
    }
  }

  render() {
    let {
      prefixCls,
      className='',
      size,
      tabPosition,
      type = 'line',
      children,
      tabBarExtraContent,
      hideAdd,
      animation
    } = this.props;

    let cls = classNames({
      [className]: !!className,
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
      [`${prefixCls}-card`]: type.indexOf('card') >= 0,
      [`${prefixCls}-${type}`]: true
    });
    if (tabPosition === 'left' || tabPosition === 'right' || type.indexOf('card') >= 0) {
      animation = null;
    }
    // only card type tabs can be added and closed
    // with this type, if set hideClose === true ,this tabs can not be closed
    let childrenWithCross;
    if (type === 'editable-card') {
      childrenWithCross = [];
      React.Children.forEach(children, (child, index) => {
        // console.log('tabs...', child);
        childrenWithCross.push(cloneElement(child, {
          tab: (
            <div>
              {child.props.tab}
              {
                child.props.hideClose ? null : <Icon type="cross" onClick={(e) => this.removeTab(child.key, e)} />
              }
            </div>
          ),
          key: child.key || index
        }));
      });
      // Add new tab handler
      if (!hideAdd) {
        tabBarExtraContent = (
          <span>
            <Icon type="plus" className={`${prefixCls}-new-tab`} onClick={this.createNewTab} />
            {tabBarExtraContent}
          </span>
        );
      }
    }

    tabBarExtraContent = tabBarExtraContent ? (
      <div className={`${prefixCls}-extra-content`}>
        {tabBarExtraContent}
      </div>
    ) : null;

    return (
      <RcTabs
        {...this.props}
        className={cls}
        tabBarExtraContent={tabBarExtraContent}
        onChange={this.handleChange}
        animation={animation}
      >
        {childrenWithCross || children}
      </RcTabs>
    );
  }
}

export default Tabs;
