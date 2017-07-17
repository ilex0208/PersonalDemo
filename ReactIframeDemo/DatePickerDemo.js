import React, { Component } from 'react';
import moment from 'moment';

import {DatePicker} from 'amos-antd';

import TimePicker from './timepicker';

import 'amos-antd/dist/amosantd.css';


const MonthPicker = DatePicker.MonthPicker;

const RangePicker = DatePicker.RangePicker;

const dateFormat = 'YYYY-MM-DD';

class DatePickerDemo extends Component {

  onChange = (value, dateString) => {
    console.log(value, dateString);
  }


  onRangeChange = (value, dateString) => {
    console.log('From: ', value[0], ', to: ', value[1]);
    console.log('From: ', dateString[0], ', to: ', dateString[1]);
  }

  onTimeChange = (value) => {
    console.log('选择了时间：', value);
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

  onOk = (value) => {
    console.log('onOk: ', value);
  }

  render() {
    return (
      <div>
        <span>basic</span>
        1<DatePicker onChange={this.onChange} />
        2<DatePicker disabledDate={this.disabledDate} />
        3<DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        4<MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />

        <div>
          5<RangePicker
            defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
            disabled
          />
          6<RangePicker
            ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
            onChange={this.onRangeChange}
          />
          <br />
          7<RangePicker
            ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
            onChange={this.onRangeChange}
          />
        </div>

        8<DatePicker size="large" />

        9<DatePicker
          showTime
          timePickerType="timepicker"
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Select Time"
          onChange={this.onTimeChange}
          onOk={this.onOk}
        />

        9clock<DatePicker
          showTime
          timePickerType="clock"
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Select Time"
          onChange={this.onTimeChange}
          onOk={this.onOk}
        />

        9simple<DatePicker
          showTime
          timePickerType="simple"
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Select Time"
          onChange={this.onTimeChange}
          onOk={this.onOk}
        />

        <div>
          10<DatePicker onChange={this.handleDateChange} />
          11<TimePicker onChange={this.handleTimeChange} />
          12<TimePicker onChange={this.handleTimeChange} timePickerType='timepicker' />
          13<TimePicker onChange={this.handleTimeChange} timePickerType='clock' />
          14<TimePicker onChange={this.handleTimeChange} timePickerType='simple' />
        </div>
      </div>
    );
  }
}

DatePickerDemo.propTypes = {

};

export default DatePickerDemo;
