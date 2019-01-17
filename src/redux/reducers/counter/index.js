
import * as TYPE from 'REDUX/actions/actionsTypes'

// 初始化state
const initState = {
  count: 0
}


export default function reducer(state = initState, action) {
  switch (action.type) {
    case TYPE.COUNTER_INCREMENT:
      return {
        count: state.count + 1
      }
    case TYPE.COUNTER_DECREMENT:
      return {
        count: state.count - 1
      }
    case TYPE.COUNTER_RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}










