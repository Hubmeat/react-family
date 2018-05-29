import React, { Component } from 'react';
import { Card } from 'antd';

class OverViewCom extends Component {
    state = {
        name: '总览'
    }
    render () {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                    sdsadsadasd
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}

export default OverViewCom;