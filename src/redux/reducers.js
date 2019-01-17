import counter from 'REDUX/reducers/counter'
import userInfo from 'REDUX/reducers/userInfo'


export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action)
  }
}






