import React, { Component } from 'react';
// import {DatePicker, TimePicker} from 'amos-antd';
import {DatePicker} from 'amos-antd';

import TimePicker from './timepicker';

import 'amos-antd/dist/amosantd.css';


const MonthPicker = DatePicker.MonthPicker;

const RangePicker = DatePicker.RangePicker;

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
    // can not select days after today
    return current && current.getTime() > Date.now();
  }

  render() {
    return (
      <div>
        <DatePicker onChange={this.onChange} />
        <DatePicker disabledDate={this.disabledDate} />
        <DatePicker defaultValue="2015-06-06" disabled />
        <DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
        <MonthPicker defaultValue="2015-12" />

        <div>
          <RangePicker style={{ width: 184 }} onChange={this.onRangeChange} />
          <br />
          <RangePicker showTime format="yyyy/MM/dd HH:mm:ss" onChange={this.onRangeChange} />
        </div>

        <DatePicker size="large" />

        <DatePicker showTime format="yyyy-MM-dd HH:mm:ss" placeholder="请选择时间" onChange={this.onTimeChange} />

        <div>
          <DatePicker onChange={this.handleDateChange} />
          <TimePicker onChange={this.handleTimeChange} />
          <TimePicker onChange={this.handleTimeChange} timePickerType='timepicker' />
          <TimePicker onChange={this.handleTimeChange} timePickerType='clock' />
          <TimePicker onChange={this.handleTimeChange} timePickerType='simple' />
        </div>
      </div>
    );
  }
}

DatePickerDemo.propTypes = {

};

export default DatePickerDemo;
