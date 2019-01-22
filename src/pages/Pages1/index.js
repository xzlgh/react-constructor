import React, {Component} from 'react';

import image from './images/西瓜.png'

import style from './index.css'
// import './index.css'

export default class Page1 extends Component {
    render() {
        return (
            <div className={style.box}>
                this is Page1~
                <p>试试热更新</p>
                <img src={image} />            
            </div>
        )
    }
}



