import { createStore, applyMiddleware } from 'redux'
import combineReducers from 'REDUX/reducers.js'
import thunkMiddleware from 'redux-thunk'


// 创建store,将处理state的reducers传给store, 且将中间件注册到store里面去
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware))

export default store


















