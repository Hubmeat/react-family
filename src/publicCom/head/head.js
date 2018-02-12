import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import React, { Component } from 'react';

import { changeSlide } from '../../redux/actions/publicState';
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
        this.props.change()
    };
    render () {
        // const {collapsed}  = this.props.publicState.collapsed;
        return (
            <div id='head_con'> 
              <Header style={{ background: '#fff', padding: 0 }}>
                <div className='head_left'>
                    <Icon
                    className="trigger"
                    type={ this.props.publicState.collapsed? 'menu-unfold' : 'menu-fold'}
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
                        <li onClick={ () => {location.replace("#/login");}}>
                            <Icon type="poweroff" />
                            <span>退出</span>
                        </li>
                    </ul>
                </div>
              </Header>
            </div>
        )
    }
}

const mapStateToPropss = (state) => {
    return {
        publicState: state.publicState
    }
};

const mapDispatchToPropss = (dispatch) => {
    return {
        change: () => {
            dispatch(changeSlide())
        }
    }
};


// export default connect(state => ({publicState: state.publicState}), dispatch =>  ( {changeWay: dispatch(changeSlide())} ) )(Head);
export default connect( mapStateToPropss ,mapDispatchToPropss)(Head);