import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
import './layout.css';
import ContentRoute from '../../router/contentsRoute';

export default class Loyout extends Component {
    state = {
      collapsed: false,
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    menuClick = e => {
      this.setState({
          selectedKey: e.key
      });
      console.log(this.state);
      const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
      popoverHide && popoverHide();
    };    

    render () {
        return (
            <Layout style={{ height: '100%' }} id='layout'>
              <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
              >
              <div className="logo" />

              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="user" /><span>User</span></span>}
                >
                  <Menu.Item key="home">
                    <Link to="/index/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="page1">
                    <Link to="/index/page1">Page1</Link>
                  </Menu.Item>
                  <Menu.Item key="counter">
                    <Link to="/index/counter">counter</Link>
                  </Menu.Item>
                  <Menu.Item key="userInfo">
                    <Link to="/index/userInfo">userInfo</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={<span><Icon type="team" /><span>Team</span></span>}
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                  <ContentRoute />
              </Content>
            </Layout>
            </Layout>

        ) 
    }
}

