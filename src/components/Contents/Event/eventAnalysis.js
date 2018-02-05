import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class EventAnalysis extends Component {

    callback = (key) => {
        console.log(key);
    }    
    render () {
        return (
            <div>
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