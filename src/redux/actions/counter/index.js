import * as TYPE from 'REDUX/actions/actionsTypes'

export function increment() {
  return {type: TYPE.COUNTER_INCREMENT}
}


export function decrement() {
  return {type: TYPE.COUNTER_DECREMENT}
}


export function counterReset() {
  return {type: TYPE.COUNTER_RESET}
}




