import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import React, { Component } from 'react';

import { changeSlide } from '../redux/actions/publicState';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Sider, Content } = Layout;
import './head.less';

class Head extends Component {    
    // state = {
    //     collapsed: false,
    // };
    toggle = () => {
        // this.setState({
        // collapsed: !this.state.collapsed,
        // });
        // this.props.changeSlide()
        console.log('this.head.state', this.props)
    };
    render () {
        console.log('this.head.state', this.props)
        const collapsed  = this.props.collapsed;
        return (
            <div id='head_con'> 
              <Header style={{ background: '#fff', padding: 0 }}>
                <div className='head_left'>
                    <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </div>

                <div className='head_right'>
                    <ul>
                        <li>
                            <Avatar icon="user" />
                        </li>
                        <li>
                            adminUser
                        </li>
                    </ul>
                </div>
              </Header>
            </div>
        )
    }
}

const mapStateToPropss = (state) => {
    console.log('heaed里面的state', state)
    return {
        collapsed: state.publicState
    }
};

const mapDispatchToPropss = (dispatch) => {
    return {
        CHANGE_SLIDE: () => {
            dispatch(changeSlide())
        }
    }
};

// export default connect(state => (collapsed: state.collapsed), dispatch => { dispatch(changeSlide()) } )(Head);

export default connect(mapStateToPropss, mapDispatchToPropss)(Head);