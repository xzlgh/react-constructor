import {combineReducers} from 'redux'

import counter from 'REDUX/reducers/counter'
import userInfo from 'REDUX/reducers/userInfo'


// 使用combineReducer合并多个reducer
export default combineReducers({
  counter,
  userInfo
})






