import * as TYPE from 'REDUX/actions/actionsTypes'

export function getUserInfoRequest() {
  return {
    type: TYPE.GET_USER_INFO_REQUEST
  }
}


export function getUserInfoSuccess(res) {
  return {
    type: TYPE.GET_USER_INFO_SUCCESS,
    userInfo: res
  }
}


export function getUserInfoFail() {
  return {
    type: TYPE.GET_USER_INFO_FAIL
  }
}


export default function getUserInfo() {
  return {
    types: [TYPE.GET_USER_INFO_REQUEST, TYPE.GET_USER_INFO_SUCCESS, TYPE.GET_USER_INFO_FAIL],
    promise: client => client.get(`http://localhost:40000/api/user.json`)
  }
}


// export default function getUserInfo() {
//   return function(dispatch) {
//     dispatch(getUserInfoRequest())
//     return fetch('http://localhost:40000/api/user.json')
//       .then(response => {
//         return response.json()
//       }).then(json => {
//         dispatch(getUserInfoSuccess(json))
//       }).catch(() => {
//         dispatch(getUserInfoFail())
//       })
//   }
// }


