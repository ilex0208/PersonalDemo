import React, {PropTypes} from 'react';
import DateTimeFormat from 'gregorian-calendar-format';
import { TimePicker as RcTimePicker, ClockPicker, SimplePicker } from 'amos-time-picker';
import classNames from 'classnames';
import GregorianCalendar from 'gregorian-calendar';

import defaultLocale from './zh_CN';
import generateShowHourMinuteSecond from './showTimeTools';

import './style/ClockPicker.scss';
import './style/SimplePicker.scss';

/**
 *
 *
 *
 * @export
 * @class TimePicker
 * @extends {React.Component}
 */
export default class TimePicker extends React.Component {
  static defaultProps = {
    format: 'HH:mm:ss',
    prefixCls: 'ant-time-picker',
    onChange() {
    },
    locale: {},
    align: {
      offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    timePickerType: 'timepicker' // 'timepicker | clock | simple'
  }

  static propTypes = {
    placement: PropTypes.string,
    transitionName: PropTypes.string,
    format: PropTypes.string,
    size: PropTypes.string, // 'large' | 'default' | 'small';
    locale: PropTypes.object,
    onChange: PropTypes.func, // (time: moment.Moment, timeString: string) => void;
    onOpenChange: PropTypes.func, // (open: boolean) => void;
    disabled:  PropTypes.bool,
    placeholder: PropTypes.string,
    hideDisabledOptions: PropTypes.bool,
    disabledHours: PropTypes.func, // () => number[];
    disabledMinutes: PropTypes.func, // (selectedHour: number) => number[];
    disabledSeconds: PropTypes.func, // (selectedHour: number, selectedMinute: number) => number[];
    style: PropTypes.object,
    getPopupContainer: PropTypes.func, // (triggerNode: Element) => HTMLElement;
    addon: PropTypes.func,
    use12Hours: PropTypes.bool,
    timePickerType: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    open:  PropTypes.bool,
    prefixCls: PropTypes.string
  }

  static contextTypes = {
    antLocale: PropTypes.object
  }

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue;
    if (value && !moment.isMoment(value)) {
      throw new Error(
        'The value/defaultValue of TimePicker must be a moment object at `amos-antd`'
      );
    }
    this.state = {
      value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({ value: nextProps.value });
    }
  }

  getLocale() {
    let locale = defaultLocale;
    if (this.context.antLocale && this.context.antLocale.TimePicker) {
      locale = this.context.antLocale.TimePicker;
    }
    // 统一合并为完整的 Locale
    return { ...locale, ...this.props.locale };
  }

  handleChange = (value) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const { onChange, format = 'HH:mm:ss' } = this.props;
    if (onChange) {
      onChange(value, (value && value.format(format)) || '');
    }
  }

  handleOpenClose = ({ open }) => {
    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
  }

  saveTimePicker = (timePickerRef) => {
    this.timePickerRef = timePickerRef;
  }

  focus() {
    this.timePickerRef.focus();
  }

  getDefaultFormat() {
    const { format, use12Hours } = this.props;
    if (format) {
      return format;
    } else if (use12Hours) {
      return 'h:mm:ss a';
    }
    return 'HH:mm:ss';
  }

  render() {
    const locale = this.getLocale();
    const props = { ...this.props };
    props.placeholder = ('placeholder' in this.props) ? props.placeholder : locale.placeholder;

    delete props.defaultValue;

    const className = classNames(props.className, {
      [`${props.prefixCls}-${props.size}`]: !!props.size,
    });

    const addon = (panel) => (
      props.addon ? (
        <div className={`${props.prefixCls}-panel-addon`}>
          {props.addon(panel)}
        </div>
      ) : null
    );

    // timepicker | clock | simple
    const timePickerType = props.timePickerType || 'timepicker';

    const format = this.getDefaultFormat();

    switch(timePickerType){
      case 'clock':
        return (
          <ClockPicker
            {...generateShowHourMinuteSecond(format)}
            {...props}
            ref={this.saveTimePicker}
            className={className}
            value={this.state.value}
            locale={locale}
            format={format}
            onChange={this.handleChange}
            onOpen={this.handleOpenClose}
            onClose={this.handleOpenClose}
            addon={addon}
          />
        );
      case 'simple':
        return (
          <SimplePicker
            {...generateShowHourMinuteSecond(format)}
            {...props}
            ref={this.saveTimePicker}
            className={className}
            value={this.state.value}
            locale={locale}
            format={format}
            onChange={this.handleChange}
            onOpen={this.handleOpenClose}
            onClose={this.handleOpenClose}
            addon={addon}
          />
        );
      default: // any or 'timepicker'
        return (
          <RcTimePicker
            {...generateShowHourMinuteSecond(format)}
            {...props}
            ref={this.saveTimePicker}
            className={className}
            value={this.state.value}
            locale={locale}
            format={format}
            onChange={this.handleChange}
            onOpen={this.handleOpenClose}
            onClose={this.handleOpenClose}
            addon={addon}
          />
        );
    }
  }
}
