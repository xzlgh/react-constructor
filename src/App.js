import React, {Component} from 'react'

import Nav from 'COMPONENT/Nav'
import Layout from 'ROUTER'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Layout />
      </div>
    )
  }
}



