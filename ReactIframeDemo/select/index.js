/**
 * ilex
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Select } from 'antd';
import Select from './basic';
const Option = Select.Option;
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  onChange = (e) => {
    let value;
    if (e && e.target) {
      value = e.target.value;
    } else {
      value = e;
    }
    console.log('onChange', value);
    this.setState({
      value
    });
  }

  onDestroy = () => {
    this.setState({
      destroy: 1
    });
  }

  onBlur = (v) => {
    console.log('onBlur', v);
  }

  onFocus = () => {
    console.log('onFocus');
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  createMuilt = () => {
    let _options = [];
    for (let i = 10; i < 36; i++) {
      _options.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    return (<Select
      multiple
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={this.handleChange}
    >
      {_options}
    </Select>);
  }

  otherSelect = () => {
    return (<div style={{ margin: 20 }}>
      <div style={{ height: 150 }} />

      <h2>Single Select</h2>

      <div style={{ width: 300 }}>
        <Select
          value={this.state.value}
          placeholder="placeholder"
          dropdownMenuStyle={{ maxHeight: 200, overflow: 'auto' }}
          style={{ width: 500 }}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          allowClear
          optionLabelProp="children"
          optionFilterProp="text"
          onChange={this.onChange}
        >
          <Option value="01" text="jack" title="jack">
            <b
              style={{
                color: 'red'
              }}
            >
              jack
            </b>
          </Option>
          <Option value="11" text="lucy">lucy</Option>
          <Option value="21" disabled text="disabled">disabled</Option>
          <Option value="31" text="ilex">ilex</Option>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            return <Option key={i} text={String(i)}>{i}</Option>;
          })}
        </Select>
      </div>

      <h2>native select</h2>
      <select
        value={this.state.value}
        style={{ width: 500 }}
        onChange={this.onChange}
      >
        <option value="01">jack</option>
        <option value="11">lucy</option>
        <option value="21" disabled>disabled</option>
        <option value="31">ilex</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            return <option value={i} key={i}>{i}</option>;
          })}
      </select>

      <p>
        <button onClick={this.onDestroy}>destroy</button>
      </p>
    </div>);
  }

  render() {
    return (
      <div className="select-wrapper">
        <div className="select-top"></div>
        <div className="select-content">
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={this.handleChange}
            getPopupContainer={() => document.getElementById('scrollArea')}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="ilex">ilex</Option>
          </Select>
          <div style={{margin: 10, overflow: 'scroll', height: 200}}>
            <h2>修复滚动区域的浮层移动问题</h2>
            <div style={{ padding: 100, height: 1000, background: '#eee', position: 'relative' }} id="area">
              <h4>可滚动的区域</h4>
              <Select defaultValue="lucy" style={{ width: 120 }} getPopupContainer={() => document.getElementById('area')}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="ilex">ilex</Option>
              </Select>
            </div>
          </div>
          <div className="select-entry">
            {
              this.createMuilt()
            }
          </div>

          <div className="select-other">
            {
              this.otherSelect()
            }
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
