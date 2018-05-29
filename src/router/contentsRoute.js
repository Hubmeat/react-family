import React, { Component } from 'react';
import { HashRouter,Route, Switch, Link, Redirect} from 'react-router-dom';

import Bundle from './Bundle';

// here is our components
import Home from 'bundle-loader?lazy&name=home!../components/Home/Home';
import Page1 from 'bundle-loader?lazy&name=Page1!../components/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=Counter!../components/Counter/Counter';
import userInfo from 'bundle-loader?lazy&name=userInfo!../components/UserInfo/userInfo';

// 事件模块
import EventAnalysis from '../components/Contents/Event/eventAnalysis';
import OverViewCom from 'bundle-loader?lazy&name=overview!../components/Contents/Event/tabsComponents/overview/overview';
import CreditEvaluationCom from 'bundle-loader?lazy&name=creditEvaluation!../components/Contents/Event/tabsComponents/creditEvaluation/creditEvaluation';

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
                {/* <Route exact path="/index/" component={createComponent(Home)} /> */}
                <Route exact path="/index/event" render={
                    (props) => (
                        // <Route  component={createComponent(EventAnalysis)} >
                        <EventAnalysis name = 'testTTT'>
                            <Route path="/index/event/overview" component={createComponent(OverViewCom)}/>
                            <Route path="/index/event/crditEvaluation" component={createComponent(CreditEvaluationCom)}/>
                        </EventAnalysis>
                    )
                } />
                <Route exact path="/index/page1" component={createComponent(Page1)} />
                <Route exact path="/index/counter" component={createComponent(Counter)} />
                <Route exact path="/index/userInfo" component={createComponent(userInfo)} />
            </Switch>
        )
    }
}

export default ContentRoute;