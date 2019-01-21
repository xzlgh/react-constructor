import { createStore, applyMiddleware } from 'redux'
import combineReducers from 'REDUX/reducers.js'
// import thunkMiddleware from 'redux-thunk'

import promiseMiddleware from './middleware/promiseMiddleware'


// 创建store,将处理state的reducers传给store, 且将中间件注册到store里面去
let store = createStore(combineReducers, applyMiddleware(promiseMiddleware))

export default store


















