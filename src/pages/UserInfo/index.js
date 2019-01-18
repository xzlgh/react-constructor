import React,{ Component } from 'react'
import { connect } from 'react-redux'
import getUserInfo from 'REDUX/actions/userInfo'

class UserInfo extends Component {
  render() {
    const { userInfo, isLoading, errorMsg } = this.props.userInfo
    return (
      <div>
        {
          isLoading ? "请求信息中..." : 
          (
            errorMsg ? errorMsg : 
            <div>
              <p>用户信息:</p>
              <p>用户名: {userInfo.name}</p>
              <p>介绍: {userInfo.intro}</p>
            </div>
          )
        }
        <button onClick={() => this.props.getUserInfoMsg()}>请求用户数据</button>
      </div>
    )
  }
}

export default connect((state) => ({
  userInfo: state.userInfo,
}), (dispatch) => ({
  getUserInfoMsg: function() {
    dispatch(getUserInfo())
  }
}))(UserInfo)






