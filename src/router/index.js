import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Pages1 from '../pages/Pages1'


const getRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/page1">page1</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Pages1} />
        </Switch>
      </div>
    </Router>
  )
}

export default getRouter







