import React, { Component } from 'react';
import { Tabs, Input, Button  } from 'antd';
const Search = Input.Search;
const TabPane = Tabs.TabPane;

import './eventAnalysis.less';

class EventAnalysis extends Component {
    state = {
        loading: false,
        iconLoading: false,
    }
    callback = (key) => {
        console.log(key);
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
                <Tabs defaultActiveKey="1" 
                onChange={this.callback.bind(this)}
                >
                    <TabPane tab="事件总览" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="信用评估" key="2">
                        Content of Tab Pane 1 
                    </TabPane>
                    <TabPane tab="信用报表" key="3">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="贷款历史" key="4">
                        Content of Tab Pane 1
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default EventAnalysis;