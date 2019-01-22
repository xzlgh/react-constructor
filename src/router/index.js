import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=home!PAGES/Home'
import Pages1 from 'bundle-loader?lazy&name=page1!PAGES/Pages1'
import Counter from 'bundle-loader?lazy&name=counter!PAGES/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!PAGES/UserInfo'
import Loading from 'COMPONENT/Loading'
import NotFound from 'bundle-loader?lazy&name=noFound!PAGES/NoFound';

const createComponent = (component) => (props) => {
  return (
    <Bundle load={component}>
      {
        (Component) => Component ? <Component {...props}/> : <Loading />
      }
    </Bundle>
  )
}

class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route path="/page1" component={createComponent(Pages1)} />
        <Route path="/counter" component={createComponent(Counter)} />
        <Route path="/userInfo" component={createComponent(UserInfo)} />
        <Route path="/*" component={createComponent(NotFound)} />
      </Switch>
    )
  }
}

export default Layout







