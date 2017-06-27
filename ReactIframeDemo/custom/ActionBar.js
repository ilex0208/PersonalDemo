
import React, {Component, PropTypes} from 'react';

import classnames from 'classnames';
import ColumnPicker from './ColumnPicker';

import './index.scss';

class ActionBar extends Component {

  renderColumnPicker = () => {
    const {
      showColumnPicker,
      columns,
      handleColumnPickerChange,
      checkboxColumnKey,
      width,
      locale,
      defaultColumns
    } = this.props;
    if (!showColumnPicker) {
      return null;
    }
    return (
      <ColumnPicker
        columns={columns}
        locale={locale}
        dropdownMaxWidth={width}
        checkboxColumnKey={checkboxColumnKey}
        handleColumnPickerChange={handleColumnPickerChange}
        defaultColumns={defaultColumns}
      />
    );
  }

  render() {
    const props = this.props;

    return (
      <div
        className={classnames({
          [props.prefixCls]: !!props.prefixCls,
          'fn-clear': true
        })}
      >
        {this.renderColumnPicker()}
      </div>
    );
  }

}

ActionBar.propTypes = {
  prefixCls: React.PropTypes.string,
  showColumnPicker: React.PropTypes.bool,
  locale: PropTypes.object,
  columns: PropTypes.array,
  defaultColumns: PropTypes.array,
  width: PropTypes.number,
  checkboxColumnKey: PropTypes.string,
  handleColumnPickerChange: PropTypes.func
};

ActionBar.defaultProps = {
  prefixCls: 'amos-table-actionbar',
  checkboxColumnKey: 'selection-column'
};

export default ActionBar;
