(window.webpackJsonp=window.webpackJsonp||[]).push([["counter"],{"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./src/pages/Counter/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?cacheDirectory=true!./src/pages/Counter/index.js ***!
  \****************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.Counter=void 0;var _createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_react=__webpack_require__(/*! react */"./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(/*! react-redux */"./node_modules/react-redux/es/index.js"),_counter=__webpack_require__(/*! REDUX/actions/counter */"./src/redux/actions/counter/index.js"),j;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}j=__webpack_require__(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").enterModule,j&&j(module);var Counter=exports.Counter=function(_Component){function Counter(){return _classCallCheck(this,Counter),_possibleConstructorReturn(this,(Counter.__proto__||Object.getPrototypeOf(Counter)).apply(this,arguments))}return _inherits(Counter,_Component),_createClass(Counter,[{key:"render",value:function(){var e=this;return _react2.default.createElement("div",null,_react2.default.createElement("div",null,"当前计数为(显示redux计数): ",this.props.counter.count),_react2.default.createElement("button",{onClick:function(){return e.props.increment()}},"自增"),_react2.default.createElement("br",null),_react2.default.createElement("button",{onClick:function(){return e.props.decrement()}},"自减"),_react2.default.createElement("br",null),_react2.default.createElement("button",{onClick:function(){return e.props.reset()}},"重置"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Counter}(_react.Component),getState=function(e){return{counter:e.counter}},mapDispatchToProps=function(e){return{increment:function(){e((0,_counter.increment)())},decrement:function(){e((0,_counter.decrement)())},reset:function(){e((0,_counter.counterReset)())}}},_default=(0,_reactRedux.connect)(getState,mapDispatchToProps)(Counter),C,D;exports.default=_default,C=__webpack_require__(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").default,D=__webpack_require__(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").leaveModule,C&&(C.register(Counter,"Counter","E:/study/mine/react/react-constructor/src/pages/Counter/index.js"),C.register(getState,"getState","E:/study/mine/react/react-constructor/src/pages/Counter/index.js"),C.register(mapDispatchToProps,"mapDispatchToProps","E:/study/mine/react/react-constructor/src/pages/Counter/index.js"),C.register(_default,"default","E:/study/mine/react/react-constructor/src/pages/Counter/index.js"),D(module))}).call(this,__webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(module))},"./src/redux/actions/counter/index.js":
/*!********************************************!*\
  !*** ./src/redux/actions/counter/index.js ***!
  \********************************************/
/*! no static exports found */function(e,s,i){"use strict";(function(e){Object.defineProperty(s,"__esModule",{value:!0}),s.increment=u,s.decrement=c,s.counterReset=a;var t,r,n,o=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(i(/*! REDUX/actions/actionsTypes */"./src/redux/actions/actionsTypes.js"));function u(){return{type:o.COUNTER_INCREMENT}}function c(){return{type:o.COUNTER_DECREMENT}}function a(){return{type:o.COUNTER_RESET}}(t=i(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").enterModule)&&t(e),r=i(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").default,n=i(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js").leaveModule,r&&(r.register(u,"increment","E:/study/mine/react/react-constructor/src/redux/actions/counter/index.js"),r.register(c,"decrement","E:/study/mine/react/react-constructor/src/redux/actions/counter/index.js"),r.register(a,"counterReset","E:/study/mine/react/react-constructor/src/redux/actions/counter/index.js"),n(e))}).call(this,i(/*! ./../../../../node_modules/webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(e))}}]);