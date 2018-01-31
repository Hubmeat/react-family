import React from 'react';

import { BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!../components/Home/Home';
import Page1 from 'bundle-loader?lazy&name=Page1!../components/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=Counter!../components/Counter/Counter';
import userInfo from 'bundle-loader?lazy&name=userInfo!../components/UserInfo/userInfo';


const Loading = function () {
    return <div>loading.....</div>
};

// const histroy = createHashHistory();


const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);


const getRouter = () => (
    <Router histroy={createHashHistory()} >
        <div>
            <ul>
                <li><Link to="">首页</Link></li>
                <li><Link to="page1">Page1</Link></li>
                <li><Link to="counter">counter</Link></li>
                <li><Link to="userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/Page1" component={createComponent(Page1)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
                <Route path="/userinfo" component={createComponent(userInfo)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;