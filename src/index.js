import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Hello from './component/Hello'

import getRouter from './router'

if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  getRouter(),
  document.getElementById('app')
);








