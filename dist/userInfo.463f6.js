(window.webpackJsonp=window.webpackJsonp||[]).push([["userInfo"],{"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./src/pages/UserInfo/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?cacheDirectory=true!./src/pages/UserInfo/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}}(),_react=__webpack_require__(/*! react */"./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(/*! react-redux */"./node_modules/react-redux/es/index.js"),_userInfo=__webpack_require__(/*! REDUX/actions/userInfo */"./src/redux/actions/userInfo/index.js"),_userInfo2=_interopRequireDefault(_userInfo),j;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}j=__webpack_require__(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").enterModule,j&&j(module);var UserInfo=function(_Component){function UserInfo(){return _classCallCheck(this,UserInfo),_possibleConstructorReturn(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return _inherits(UserInfo,_Component),_createClass(UserInfo,[{key:"render",value:function(){var e=this,r=this.props.userInfo,t=r.userInfo,n=r.isLoading,o=r.errorMsg;return _react2.default.createElement("div",null,n?"请求信息中...":o||_react2.default.createElement("div",null,_react2.default.createElement("p",null,"用户信息:"),_react2.default.createElement("p",null,"用户名: ",t.name),_react2.default.createElement("p",null,"介绍: ",t.intro)),_react2.default.createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户数据"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),UserInfo}(_react.Component),_default=(0,_reactRedux.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:_userInfo2.default})(UserInfo),y,z;exports.default=_default,y=__webpack_require__(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").default,z=__webpack_require__(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").leaveModule,y&&(y.register(UserInfo,"UserInfo","E:/study/mine/react/react-constructor/src/pages/UserInfo/index.js"),y.register(_default,"default","E:/study/mine/react/react-constructor/src/pages/UserInfo/index.js"),z(module))}).call(this,__webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(module))},"./src/redux/actions/userInfo/index.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/userInfo/index.js ***!
  \*********************************************/
/*! no static exports found */function(e,i,l){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.getUserInfoRequest=s,i.getUserInfoSuccess=u,i.getUserInfoFail=c,i.default=a;var r,t,n,o=function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}}(l(/*! REDUX/actions/actionsTypes */"./src/redux/actions/actionsTypes.js"));function s(){return{type:o.GET_USER_INFO_REQUEST}}function u(e){return{type:o.GET_USER_INFO_SUCCESS,userInfo:e}}function c(){return{type:o.GET_USER_INFO_FAIL}}function a(){return function(r){return r(s()),fetch("http://localhost:40000/api/user.json").then(function(e){return e.json()}).then(function(e){r(u(e))}).catch(function(){r(c())})}}(r=l(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").enterModule)&&r(e),t=l(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").default,n=l(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").leaveModule,t&&(t.register(s,"getUserInfoRequest","E:/study/mine/react/react-constructor/src/redux/actions/userInfo/index.js"),t.register(u,"getUserInfoSuccess","E:/study/mine/react/react-constructor/src/redux/actions/userInfo/index.js"),t.register(c,"getUserInfoFail","E:/study/mine/react/react-constructor/src/redux/actions/userInfo/index.js"),t.register(a,"getUserInfo","E:/study/mine/react/react-constructor/src/redux/actions/userInfo/index.js"),n(e))}).call(this,l(/*! ./../../../../node_modules/webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(e))}}]);