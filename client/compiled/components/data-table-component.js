'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itemObjectCreator = require('../scripts/item-object-creator.js');

var _itemObjectCreator2 = _interopRequireDefault(_itemObjectCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({

	displayName: 'Data Table Component',

	render: function render() {
		var item = null;
		try {
			item = (0, _itemObjectCreator2.default)(JSON.parse(this.props.data), this.props.index);
		} catch (e) {
			console.error(e.message);
			return _react2.default.createElement(
				'h4',
				null,
				'There was an error'
			);
		}

		return _react2.default.createElement(
			'table',
			{ className: 'table center' },
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Server Item'
					),
					_react2.default.createElement(
						'td',
						null,
						item.index
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'IP Adress'
					),
					_react2.default.createElement(
						'td',
						null,
						item.ip
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Username'
					),
					_react2.default.createElement(
						'td',
						null,
						item.username
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Passwords'
					),
					_react2.default.createElement(
						'td',
						null,
						item.passwords
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'ID'
					),
					_react2.default.createElement(
						'td',
						null,
						item.id
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Key'
					),
					_react2.default.createElement(
						'td',
						null,
						item.key
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Time'
					),
					_react2.default.createElement(
						'td',
						null,
						item.time
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Port'
					),
					_react2.default.createElement(
						'td',
						null,
						item.port
					)
				),
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Socket'
					),
					_react2.default.createElement(
						'td',
						null,
						item.socket
					)
				)
			)
		);
	}
});