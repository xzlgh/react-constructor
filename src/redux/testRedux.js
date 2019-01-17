import { increment, decrement, counterReset } from 'REDUX/actions/counter'

import store from 'REDUX/store.js'

// 打印store的初始状态
console.log("初始状态", store.getState())

// 每次state更新时,打印日志
// 注意subscribe()返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)

// dispatch一个action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(counterReset())

unsubscribe()
















