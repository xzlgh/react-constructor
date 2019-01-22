import React,{ Component } from 'react'
import { connect } from 'react-redux'
import getUserInfo from 'REDUX/actions/userInfo'

class UserInfo extends Component {
  render() {
    const { userInfo, isLoading, errorMsg } = this.props.userInfo
    return (
      <div>
        <p>我增加点内容测试一个reducer是否会全局刷新</p>
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
        <button onClick={() => this.props.getUserInfo()}>请求用户数据</button>
      </div>
    )
  }
}

export default connect((state) => ({
  userInfo: state.userInfo,
  counter: state.counter
}), {getUserInfo})(UserInfo)







