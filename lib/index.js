"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),_get=function(e,r,t){for(var o=!0;o;){var n=e,a=r,u=t;o=!1,null===n&&(n=Function.prototype);var c=Object.getOwnPropertyDescriptor(n,a);if(void 0!==c){if("value"in c)return c.value;var l=c.get;if(void 0===l)return;return l.call(u)}var i=Object.getPrototypeOf(n);if(null===i)return;e=i,r=a,t=u,o=!0,c=i=void 0}},_react=require("react"),_react2=_interopRequireDefault(_react),_lodashAssign=require("lodash.assign"),_lodashAssign2=_interopRequireDefault(_lodashAssign),_reactMarkdown=require("react-markdown"),_reactMarkdown2=_interopRequireDefault(_reactMarkdown),_codeBlock=require("./code-block"),_codeBlock2=_interopRequireDefault(_codeBlock),Markdown=function(e){function r(){_classCallCheck(this,r),_get(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return _inherits(r,e),_createClass(r,[{key:"render",value:function(){return _react2["default"].createElement(_reactMarkdown2["default"],_extends({},this.props,{renderers:(0,_lodashAssign2["default"])({},r.renderers,{CodeBlock:_codeBlock2["default"]})}))}}]),r}(_react2["default"].Component());exports["default"]=Markdown,module.exports=exports["default"];