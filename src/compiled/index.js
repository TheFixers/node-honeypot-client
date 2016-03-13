'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _appComponent = require('./app-component.js');

var _appComponent2 = _interopRequireDefault(_appComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use ReactDOM to render Disaply Element
_reactDom2.default.render(_react2.default.createElement(_appComponent2.default, null), document.getElementById('root'));