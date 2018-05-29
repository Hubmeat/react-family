import React, { Component } from 'react';
import { Tabs, Input, Button  } from 'antd';
import { Route, Switch, Link, Redirect} from 'react-router-dom';
const Search = Input.Search;
const TabPane = Tabs.TabPane;


import Bundle from '../../../router/Bundle';

import OverViewCom from './tabsComponents/overview/overview';

import './eventAnalysis.less';


const Loading = function () {
    return <div>loading.....</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

class EventAnalysis extends Component {
    state = {
        loading: false,
        iconLoading: false,
    }
    callback = (key) => {
        console.log('ss', this.props)
        if (key === '1') {
            props.histroy.push('/index/event/overview')
        }
        if (key === '2') {
        props.histroy.push('/index/event/crditEvaluation')
        }
    }
    enterLoading = () => {
        this.setState({ loading: true });
        setTimeout( () => {
            this.setState({ loading: false });
        }, 800)
    }
    render () {
        return (
            <div id='event_analysis'>
                <div className='dutyBox'>
                    <h4>待处理 <span>0</span></h4>
                    <h3>未处理 <span>0</span></h3>

                    <Search
                        placeholder="请输入手机号"
                        className='search'
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Button 
                        type="primary" 
                        loading={this.state.loading} 
                        onClick={this.enterLoading}
                        className='searchBtn'
                    >
                        领取任务
                    </Button>

                    <Button type="danger" className='reject'>拒 绝</Button>
                    <Button type="primary" className='accept'>通 过</Button>
                </div>
                <div>
                    <Tabs defaultActiveKey="1" 
                    onChange={this.callback.bind(this)}
                    >
                        <TabPane tab="事件总览" key="1">    
                        </TabPane>
                        <TabPane tab="信用评估" key="2">
                            {/* <Link to="/index/event/overview">事件案例分析</Link> */}
                            
                        </TabPane>
                        <TabPane tab="信用报表" key="3">
                        </TabPane>
                        <TabPane tab="贷款历史" key="4">
                        </TabPane>
                    </Tabs>
                </div>
                <div>
                    sss
                    {console.log('cc', this.props.children)}
                    {this.props.children}
                    {/* <OverViewCom /> */}
                </div>

            </div>
        )
    }
}

export default EventAnalysis;