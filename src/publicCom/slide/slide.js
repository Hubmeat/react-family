import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class SlideCon extends Component {    
    // state = {
    //     collapsed: false,
    // };
    toggle = () => {
        // this.setState({
        // collapsed: !this.state.collapsed,
        // });
        this.props.change()
    };
    render () {
        // const {collapsed}  = this.props.publicState.collapsed;
        return (
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.props.publicState.collapsed}
                    >
                    <div className="logo" />

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>User</span></span>}
                        >
                        {/* <Menu.Item key="home">
                            <Link to="/index/">Home</Link>
                        </Menu.Item> */}
                        <Menu.Item key="event">
                            <Link to="/index/event">事件案例分析</Link>
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
        )
    }
}



export default connect(state => ({publicState: state.publicState}), dispatch =>  ( { } ) )(SlideCon);
