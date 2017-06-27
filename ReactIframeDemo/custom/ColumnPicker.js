import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {Tree} from 'antd';
import Icon from 'amos-icon';

import {getSelectedKeys, checkDefaultColumns, getConsts, defaultLocale} from './utils';

const TreeNode = Tree.TreeNode;

/**
 * 列选择
 *
 * @class ColumnPicker
 * @extends {React.Component}
 */
class ColumnPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidUpdate() {
    if (this.state.visible) {
      const dropDownDOMNode = this.getDropDownDOMNOde();
      const commonTreeDOMNode = this.commonTree.refs.tree;
      let width = 41;
      if(commonTreeDOMNode && commonTreeDOMNode.offsetWidth){
        width += commonTreeDOMNode.offsetWidth;
      }
      for (let i = 0; i < this.groupNum; i++) {
        width += this[`groupTree-${i}`].refs.tree.offsetWidth;
      }
      const maxWidth = typeof this.props.dropdownMaxWidth === 'number'
        ? this.props.dropdownMaxWidth
        : 1000;
      dropDownDOMNode.style.width = `${width <= maxWidth ? width : maxWidth}px`;
    }
  }

  getDropDownDOMNOde() {
    return this.dropDownDOMNode;
  }

  handlePickerSelect = (selectedKeys, groupName) => {
    this.props.handleColumnPickerChange(selectedKeys, groupName);
  }

  saveRef = (refName) => {
    return (c) => {
      this[refName] = c;
      return false;
    };
  }

  handleMouseEnter = () => {
    if (this.hideDropDownTimer) {
      clearTimeout(this.hideDropDownTimer);
    }
    if (!this.state.visible) {
      this.setState({
        visible: true
      });
    }
  }

  handleMouseLeave = () => {
    this.hideDropDownTimer = setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 200);
  }

  renderTree = () => {
    const { columns, defaultColumns } = this.props;
    const notRenderColumns = ['jsxchecked', 'jsxtreeIcon', 'jsxwhite'];
    notRenderColumns.push(this.props.checkboxColumnKey);
    const options = [];
    const groupTree = [];

    this.groupNum = 0;

    const defaultCheckedKeys = [];

    columns.forEach((item) => {
      // the column is not the notRender one and is not the group.
      const isGroup = {}.hasOwnProperty.call(item, 'columns') && typeof item.columns === 'object';
      if (isGroup) {
        this.hasGroup = true;
      }
      const dataIndex = item.dataIndex;
      const disabled = checkDefaultColumns(defaultColumns, dataIndex);

      if (notRenderColumns.indexOf(dataIndex) === -1 && !isGroup) {
        if (dataIndex) {
          defaultCheckedKeys.push(dataIndex);
          options.push(
            <TreeNode
              key={dataIndex}
              disabled={disabled}
              title={typeof item.title === 'function' ? item.title() : item.title}
            />
          );
        }
      } else if (isGroup) {
        groupTree.push(this.renderGroupTree(item, this.groupNum));
        this.groupNum++;
      }
    });

    const commonGroupName = getConsts().commonGroup;

    const commonTree = (
      <Tree
        checkable
        multiple
        defaultCheckedKeys={defaultCheckedKeys}
        className={!this.hasGroup ? 'no-group' : ''}
        ref={this.saveRef('commonTree')}
        onCheck={(selectedKeys) => this.handlePickerSelect(selectedKeys, commonGroupName)}
      >
        {options}
      </Tree>
    );

    if (!this.hasGroup) {
      return commonTree;
    }

    return (
      <div>
        {commonTree}
        {groupTree}
      </div>
    );
  }

  renderDropDown = () => {
    const { prefixCls } = this.props;
    const style = {
      display: this.state.visible ? 'block' : 'none'
    };
    return (
      <div
        className={`${prefixCls}-dropdown`}
        style={style}
        ref={this.saveRef('dropDownDOMNode')}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.renderTree()}
      </div>
    );
  }

  renderGroupTree = (group, index) => {
    const options = (group.columns || []).map((item) => (
      <TreeNode
        key={item.dataKey}
        title={typeof item.title === 'function' ? item.title() : item.title}
      />
    ));

    const selectedKeys = getSelectedKeys(group.columns);

    return (
      <Tree
        key={group.group}
        ref={this.saveRef(`groupTree-${index}`)}
        checkable
        multiple
        selectable={false}
        defaultExpandAll
        checkedKeys={selectedKeys}
        onCheck={this.handlePickerSelect(this, group.group)}
      >
        <TreeNode title={group.group} key={group.group}>
          {options}
        </TreeNode>
      </Tree>
    );
  }

  render() {
    const { prefixCls, locale } = this.props;
    return (
      <div className={prefixCls}>
        <div
          className={classnames({
            [`${prefixCls}-trigger`]: true,
            [`${prefixCls}-trigger-dropdown-visible`]: !!this.state.visible
          })}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Icon icon="list" />
          <span className={`${prefixCls}-title`}>{locale.customeColumn}</span>
        </div>
        {this.renderDropDown()}
      </div>
    );
  }
}

ColumnPicker.defaultProps = {
  prefixCls: 'amos-table-column-picker',
  locale: defaultLocale,
  columns: [],
  defaultColumns: []
};

ColumnPicker.propTypes = {
  prefixCls: PropTypes.string,
  locale: PropTypes.object,
  columns: PropTypes.array,
  defaultColumns: PropTypes.array,
  dropdownMaxWidth: PropTypes.number,
  checkboxColumnKey: PropTypes.string,
  handleColumnPickerChange: PropTypes.func
};

export default ColumnPicker;
