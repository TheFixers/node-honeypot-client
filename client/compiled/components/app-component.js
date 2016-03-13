'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _headerComponent = require('./header-component.js');

var _headerComponent2 = _interopRequireDefault(_headerComponent);

var _resultsAreaComponent = require('./results-area-component.js');

var _resultsAreaComponent2 = _interopRequireDefault(_resultsAreaComponent);

var _footerComponent = require('./footer-component.js');

var _footerComponent2 = _interopRequireDefault(_footerComponent);

var _promiseFetchServerData = require('../scripts/promise-fetch-server-data.js');

var _promiseFetchServerData2 = _interopRequireDefault(_promiseFetchServerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({

    displayName: 'App',

    getInitialState: function getInitialState() {
        return {
            clientData: [],
            openIndex: null,
            error: null
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        console.log("App mounted");

        var promise = (0, _promiseFetchServerData2.default)(this.props.source);

        promise.then(function (data) {
            var clientData = data.trim().split('\n'); // Split into array
            _this.setState({
                clientData: clientData,
                error: null
            });
        }).catch(function (err) {
            _this.setState({
                clientData: [],
                error: err
            });
            console.error(err);
        });
    },
    componentWillUnmount: function componentWillUnmount() {
        console.log("App un-mounted");
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_headerComponent2.default, { text: this.props.source }),
            _react2.default.createElement(_resultsAreaComponent2.default, { data: this.state.clientData }),
            _react2.default.createElement(_footerComponent2.default, { source: this.props.source })
        );
    }
});