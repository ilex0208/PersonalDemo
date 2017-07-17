import React, { Component } from 'react';
import {trim} from 'amos-tool';

import Input from './_input/index';


class InputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (e) => {
    const val = e.target.value;
    this.setState({
      value: val
    });
  }

  onBlur = (e) => {
    const val = e.target.value || '';
    console.log('onBlur', val);
    this.setState({
      value: trim(val)
    });
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          needTrim
        />
      </div>
    );
  }
}

InputDemo.propTypes = {

};

export default InputDemo;

