import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
import './layout.css';
import ContentRoute from '../../router/contentsRoute';
// 引入head && slide
import Head from '../../publicCom/head/head';
import SlideCon from '../../publicCom/slide/slide';

class LayoutCon extends Component {
    // state = {
    //   collapsed: false,
    // };

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
                {/* 左侧菜单栏 */}
                <SlideCon />

                {/* head && content */}
                <Layout>
                    <Head />
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <ContentRoute />
                    </Content>
                </Layout>
            </Layout>
        ) 
    }
}
export default connect(state => ({publicState: state.publicState}), dispatch =>  ( { } ) )(LayoutCon);
