import React, { Component } from 'react';
import { Route, Switch, Link, Redirect} from 'react-router-dom';

import Bundle from './Bundle';

// here is our components
import Home from 'bundle-loader?lazy&name=home!../components/Home/Home';
import Page1 from 'bundle-loader?lazy&name=Page1!../components/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=Counter!../components/Counter/Counter';
import userInfo from 'bundle-loader?lazy&name=userInfo!../components/UserInfo/userInfo';

// 事件模块
import EventAnalysis from 'bundle-loader?lazy&name=EventAnalysis!../components/Contents/Event/eventAnalysis';

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

class ContentRoute extends Component {
    render () { 
        return (
            <Switch>
                <Route exact path="/index/" component={createComponent(Home)} />
                <Route exact path="/index/event" component={createComponent(EventAnalysis)} />
                <Route exact path="/index/page1" component={createComponent(Page1)} />
                <Route exact path="/index/counter" component={createComponent(Counter)} />
                <Route exact path="/index/userInfo" component={createComponent(userInfo)} />
            </Switch>
        )
    }
}

export default ContentRoute;