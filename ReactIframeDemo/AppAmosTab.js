/**
 * ilex
 * demo for iframe
 */
import React, {Component} from 'react';
import Tabs from './tabs';
const TabPane = Tabs.TabPane;

const panes = [
  { key: 'home', title: 'HOME', content: '首页' },
  { key: 'binds', title: '必应', url:'http://www.bings.com' },
  { key: 'baidu', title: '百度', url:'http://www.baidu.com' },
  { key: 'activiti', title: 'Activiti', url:'http://www.activiti.org/' },
  { key: 'mdn', title: 'MDN', url:'https://developer.mozilla.org/zh-CN/' },
  { key: 'antd', title: 'AntDesign', url:'https://ant.design/' },
  { key: 'teamview', title: 'TeamView', url:'https://www.teamviewer.com/zhCN/' },
  { key: 'es6', title: 'EcmaScript6', url:'http://es6.ruanyifeng.com/' },
  { key: 'reactHome', title: 'React', url:'https://facebook.github.io/react/' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:'',
      activeKey: 'home',
      panes: panes,
      allKeys: []
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  removePane = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }


  render() {
    return (
      <Tabs
        className="second-pane"
        hideAdd
        exchangeable
        // filterexchange='home'
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
      </Tabs>
    );
  }
}

App.propTypes = {

};

export default App;
