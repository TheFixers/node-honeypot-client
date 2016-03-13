'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataTableComponent = require('./data-table-component.js');

var _dataTableComponent2 = _interopRequireDefault(_dataTableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'Results Area',

	render: function render() {
		var data = this.props.data;
		return _react2.default.createElement(
			'div',
			null,
			Object.keys(data).map(function (key, index) {
				return _react2.default.createElement(_dataTableComponent2.default, {
					key: index,
					index: index,
					data: data[key] });
			})
		);
	}
});