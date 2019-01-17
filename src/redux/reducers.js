import counter from 'REDUX/reducers/counter'

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state, action)
  }
}






