import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link, HashRouter} from 'react-router-dom';
import { HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
 
import Bundle from './Bundle';


import LayoutCon from 'bundle-loader?lazy&name=userInfo!../components/layout/layout';
import LoginCon from 'bundle-loader?lazy&name=login!../components/Login/Login';
import NotFound from 'bundle-loader?lazy&name=notFound!../components/NotFound/NotFound';


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
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/index" push />} /> 
                <Route path="/index" component={createComponent(LayoutCon)}/> 
                <Route path="/login" component={createComponent(LoginCon)}/> 
                <Route path="/404" component={createComponent(NotFound)} />
                <Route component={createComponent(NotFound)} />
            </Switch>
        </div>
    </HashRouter>
);

export default getRouter;