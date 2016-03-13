'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'Header Component',

  componentDidMount: function componentDidMount() {
    console.log("Header mounted...");
  },
  componentWillUnmount: function componentWillUnmount() {
    console.log("Header un-mounted...");
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'header center' },
      _react2.default.createElement(
        'h1',
        null,
        'Honeypot Client'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Server data from ',
        this.props.text
      )
    );
  }
});