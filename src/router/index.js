import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=home!PAGES/Home'
import Pages1 from 'bundle-loader?lazy&name=page1!PAGES/Pages1'
import Counter from 'bundle-loader?lazy&name=counter!PAGES/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!PAGES/UserInfo'

const Loading = function() {
  return <div>Loading....</div>
}

const createComponent = (component) => (props) => {
  return (
    <Bundle load={component}>
      {
        (Component) => Component ? <Component {...props}/> : <Loading />
      }
    </Bundle>
  )
}

const getRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/userInfo">UserInfo</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={createComponent(Home)} />
          <Route path="/page1" component={createComponent(Pages1)} />
          <Route path="/counter" component={createComponent(Counter)} />
          <Route path="/userInfo" component={createComponent(UserInfo)} />
        </Switch>
      </div>
    </Router>
  )
}

export default getRouter







