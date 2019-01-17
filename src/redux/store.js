import { createStore } from 'redux'
import combineReducers from 'REDUX/reducers.js'

// 创建store,将处理state的reducers传给store
let store = createStore(combineReducers)

export default store















