import React, { Component, PropTypes } from 'react';

import { Checkbox } from 'amos-core';

const { Radio, RadioGroup } = Checkbox;

import './amoscheck.scss';

class CheckBoxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i1checked: false,
      i3checked: false,
      i2disabled: false,
      i4disabled: false,
      radioValue: '3'
    };
  }

  handle1 = () => {
    this.setState({
      i1checked: true,
      i3checked: true,
      radioValue: '3'
    });
  }

  handle2 = () => {
    this.setState({
      i1checked: false,
      i3checked: false,
      radioValue: this.state.radioValue === '3' ? null : this.state.radioValue
    });
  }

  handle3 = () => {
    this.setState({
      i2disabled: true,
      i4disabled: true
    });
  }

  handle4 = () => {
    this.setState({
      i2disabled: false,
      i4disabled: false
    });
  }

  handle1Change = (e, checked) => {
    this.setState({
      i1checked: checked
    });
  }

  handle3Change = (e, checked) => {
    this.setState({
      i3checked: checked
    });
  }

  handleRadioChange = (event, value) => {
    this.setState({
      radioValue: value
    });
  }


  render() {
    return (
      <div>
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          increaseArea="20%"
          label="Checkbox, <span class='label1'>#input-1</span>"
          checked={this.state.i1checked}
          onChange={this.handle1Change}
        />
        <br />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          increaseArea="20%"
          label="Checkbox, <span class='label1'>#input-2</span>"
          defaultChecked
          disabled={this.state.i2disabled}
        />
        <br />
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          increaseArea="20%"
          label="Checkbox, <span class='label1'>#disabled</span>"
          disabled
        />
        <RadioGroup name="radio" value={this.state.radioValue} onChange={this.handleRadioChange}>
          <Radio
            value="3"
            radioClass="iradio_square-blue"
            increaseArea="20%"
            label="Radio, <span class='label1'>#input-3</span>"
          />
          <Radio
            value="4"
            radioClass="iradio_square-blue"
            increaseArea="20%"
            label="Radio, <span class='label1'>#input-4</span>"
            disabled={this.state.i4disabled}
          />
          <Radio
            value="5"
            radioClass="iradio_square-blue"
            increaseArea="20%"
            label="Radio, <span class='label1'>#disabled</span>"
            disabled
          />
        </RadioGroup>
      </div>
    );
  }
}

CheckBoxDemo.propTypes = {

};

export default CheckBoxDemo;
