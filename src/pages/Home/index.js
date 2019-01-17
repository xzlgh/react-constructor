import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    _handleClick() {
        this.setState({
            count: ++this.state.count
        })
    }
    render() {
        return (
            <div>
                <p>this is home~</p>
                当前计数: {this.state.count} <br />
                <p>测试热更新</p>
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
        )
    }
}




