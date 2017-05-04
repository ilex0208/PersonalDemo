/**
 * ilex
 * demo for iframe
 */
import React, {Component, PropTypes} from 'react';
import { Menu, Icon, Tabs } from 'antd';
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;

const menus = [
  { key: 'binds', icon: 'tags', title: '必应', url:'http://www.bings.com' },
  { key: 'baidu', icon: 'notification', title: '百度', url:'http://www.baidu.com' },
  { key: 'activiti', icon: 'tags', title: 'Activiti', url:'http://www.activiti.org/' },
  { key: 'mdn', icon: 'notification', title: 'MDN', url:'https://developer.mozilla.org/zh-CN/' },
  { key: 'antd', icon: 'tags', title: 'AntDesign', url:'https://ant.design/' },
  { key: 'teamview', icon: 'notification', title: 'TeamView', url:'https://www.teamviewer.com/zhCN/' },
  { key: 'es6', icon: 'tags', title: 'EcmaScript6', url:'http://es6.ruanyifeng.com/' },
  { key: 'reactHome', icon: 'notification', title: 'React', url:'https://facebook.github.io/react/' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:'',
      activeKey: 'home',
      panes: [{ title: 'HOME', content: '首页', key: 'home' }],
      allKeys: []
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  getContent = (key) => {
    let result = [];
    menus.map(m => {
      if(m.key === key){
        let ackey = `iframe${m.key}`;
        result.push({
          key: ackey,
          title: m.title,
          content: <iframe className='iframe' src={m.url} />
        });
        result.push(ackey);
      }
    });
    return result;
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

  _handleClick = (e) => {
    console.log('click ', e);
    let text = e.key;
    let panes = this.state.panes;
    let newPan = this.getContent(text)[0];
    const activeKey = this.getContent(text)[1];
    panes.push(newPan);
    this.setState({
      current: e.key,
      panes,
      activeKey
    });
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <Menu
            className='menu'
            id='nav'
            onClick={this._handleClick}
            selectedKeys={[this.state.current]}
            theme='dark'
          >
            {
              menus.map( menu =>
                <MenuItem key={menu.key}>
                  <Icon type={menu.icon} />&nbsp;{menu.title}
                </MenuItem>
              )
            }
          </Menu>
        </nav>
        <section className="content">
          <Tabs
            className="second-pane"
            hideAdd
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
          </Tabs>
        </section>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
