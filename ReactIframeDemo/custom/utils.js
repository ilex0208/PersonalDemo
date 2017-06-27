import {deepCopy, utils} from 'amos-tool';

export const getSelectedKeys = (columns) => {
  let realColumns = [];
  const selectedKeys = [];
  columns.forEach((item) => {
    const isGroup = {}.hasOwnProperty.call(item, 'columns') && typeof item.columns === 'object';
    if (isGroup) {
      realColumns = realColumns.concat(item.columns);
    } else {
      realColumns.push(item);
    }
  });
  realColumns.forEach((item) => {
    if (!item.hidden) {
      selectedKeys.push(item.dataKey);
    }
  });
  return selectedKeys;
};

export const getConsts = () => ({
  commonGroup: 'amostableGroup'
});

export const defaultLocale = {
  customeColumn: '自定义列',
  more: '更多'
};

export const filterColumns = (checkedKeys, groupName, originalCol) => {
  const columns = deepCopy.clone(originalCol);
  const notRenderColumns = ['jsxchecked', 'jsxtreeIcon', 'jsxwhite'];
  const commonGroupName = getConsts().commonGroup;
  const result =[];
  for (let i = 0; i < columns.length; i++) {
    const item = columns[i];
    const isGroup = {}.hasOwnProperty.call(item, 'columns') && typeof item.columns === 'object';
    // current column is a group and groupName is right
    if (isGroup && item.group === groupName) {
      for (let j = 0; j < item.columns.length; j++) {
        const ele = item.columns[j];
        if (checkedKeys.indexOf(ele.dataIndex) !== -1) { // 选中
          ele.hidden = false;
        } else {
          ele.hidden = true;
        }
      }
      break;
    } else if (groupName === commonGroupName) {
      // current column is common group
      if (checkedKeys.indexOf(item.dataIndex) !== -1 ||
        notRenderColumns.indexOf(item.dataIndex) !== -1) {
        result.push(item);
      }
    }
  }

  return result;
};

export const checkDefaultColumns = (arr, target) => {
  return utils.isEmpty(arr) ? false : utils.isArray(arr) ? arr.filter(a => a === target).length > 0 ? true : false : false;
};
