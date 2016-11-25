import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute,Redirect,browserHistory} from 'react-router';


import Me from '../components/Me';
import WeiXin from '../components/WeiXin'
import App from '../App'
import Contact from '../components/Contact'
import Seek from '../components/Seek'

class RouteConfig extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute  name="indexList"  component={WeiXin}/>
                    <Route name="contact" path="/contact" component={Contact}/>
                    <Route name="seek" path="/seek" component={Seek}/>
                    <Route name="me" path="/me" component={Me}/>
                </Route>
            </Router>
        )
    }
}

export default RouteConfig;
