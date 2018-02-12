import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/actions/userInfo';
import './userInfo.css';
import notFoundImage from '../../assets/images/404.jpg';

class UserInfo extends Component {
    render () {
        console.log('this.props', this.props)
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return(
            <div>
                {
                    isLoading?'请求信息中...': (
                        errorMsg? errorMsg: 
                            <div id='testBox'>
                                <p>用户信息</p>
                                <p>用户名：{userInfo.name} </p>
                                <p>介绍： {userInfo.address} </p>
                            </div>
                    )
                }
                <button onClick={ () => this.props.getUserInfo()}>请求用户信息</button>
                <img className='image' src = { notFoundImage } />
            </div>
        )
    }
}

export default  connect( state => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);