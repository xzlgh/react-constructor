import React, {Component} from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'REDUX/store.js'
import App from './App'
import { BrowserRouter as Router} from 'react-router-dom'

// if (MOCK) {
//   require('mock/mock')  
// }

// 初始化, 首次进入时渲染页面
renderWithHotReload(App)


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    renderWithHotReload(NextApp)
  })
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}








