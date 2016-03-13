'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _appComponent = require('./components/app-component.js');

var _appComponent2 = _interopRequireDefault(_appComponent);

var _sourceUrl = require('./static/source-url.js');

var _sourceUrl2 = _interopRequireDefault(_sourceUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use ReactDOM to render App component
_reactDom2.default.render(_react2.default.createElement(_appComponent2.default, { source: _sourceUrl2.default }), document.getElementById('root'));