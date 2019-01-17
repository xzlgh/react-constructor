import React, {Component} from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'REDUX/store.js'

import getRouter from 'ROUTER'

// 初始化, 首次进入时渲染页面
renderWithHotReload(getRouter())


if (module.hot) {
  module.hot.accept('ROUTER', () => {
    const getRouter = require('ROUTER').default
    renderWithHotReload(getRouter())
  })
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}








