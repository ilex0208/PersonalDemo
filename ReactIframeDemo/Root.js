import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Breadcrumb } from 'amos-antd';
import { Link } from 'react-router';


import componentList from './componentList';

const { Header, Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item;

class Root extends Component {

  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            {
              componentList.map(cl => (
                <MenuItem key={cl.key}><Link to={cl.link}>{cl.text}</Link></MenuItem>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Amos Compnents ©2016 Created by Amos FED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

Root.propTypes = {

};

export default Root;
