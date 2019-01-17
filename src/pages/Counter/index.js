import React, {Component} from 'react'
import {connect} from 'react-redux'

import { increment, decrement, counterReset } from 'REDUX/actions/counter'


export class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为(显示redux计数): {this.props.counter.count}</div>
        <button onClick={() => this.props.increment()}>自增</button><br />
        <button onClick={() => this.props.decrement()}>自减</button><br />
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    )
  }
}

const getState = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(counterReset())
    }
  }
}

export default connect(getState, mapDispatchToProps)(Counter)







