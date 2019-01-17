import * as TYPE from 'REDUX/actions/actionsTypes'

export function getUserInfoRequest() {
  return {
    type: TYPE.GET_USER_INFO_REQUEST
  }
}


export function getUserInfoSuccess() {
  return {
    type: TYPE.GET_USER_INFO_SUCCESS
  }
}


export function getUserInfoFail() {
  return {
    type: TYPE.GET_USER_INFO_FAIL
  }
}



