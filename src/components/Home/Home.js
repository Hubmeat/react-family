import React, { Component } from 'react';

export default class Home extends Component {
    constructor ( props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick () {
        console.log('1111')
        this.setState({
            count: ++this.state.count
        })
    }
      //组件将被卸载  
    // componentWillUnmount(){ 
    // //重写组件的setState方法，直接返回空
    //     this.setState = (state,callback)=>{
    //         return;
    //     };  
    // }
    render () {
        return (
            <div>
                this.is home <br />
                当前计数：{this.state.count} <br />
                <button onClick={this.handleClick.bind(this)}>自增</button>
            </div>
        )
    }
}