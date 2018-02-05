import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link, HashRouter} from 'react-router-dom';
import { HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
 
import Bundle from './Bundle';


import LayoutCon from 'bundle-loader?lazy&name=userInfo!../components/layout/layout';


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

const histroy = createBrowserHistory();

const getRouter = () => (
    // <Router histroy={histroy} basename='/dist'>
    <HashRouter>
        <div>
            {/* <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
                <li><Link to="/index">layout</Link></li>
            </ul> */}
            <Switch>
                {/* <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/Page1" component={createComponent(Page1)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
                <Route path="/userinfo" component={createComponent(userInfo)}/> */}
                <Route path="/index" component={createComponent(LayoutCon)}/> 
            </Switch>
            {/* <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userinfo" component={userInfo}/>
                <Route path="/layout" component={layout}/>
            </Switch> */}
        </div>
    </HashRouter>
);

export default getRouter;