'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _headerComponent = require('./header-component.js');

var _headerComponent2 = _interopRequireDefault(_headerComponent);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _promiseFetchServerData = require('../scripts/promise-fetch-server-data.js');

var _promiseFetchServerData2 = _interopRequireDefault(_promiseFetchServerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({

  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      clientData: null,
      openIndex: null,
      error: null
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    console.log("App un-mounted");

    var promise = (0, _promiseFetchServerData2.default)(this.props.source);

    promise.then(function (data) {
      var clientData = data;
      _this.setState({
        clientData: clientData,
        error: null
      });
      console.log(data);
    }).catch(function (err) {
      _this.setState({
        clientData: null,
        error: err
      });
      console.error(err);
    });
    // Just to display async  
    console.log("Here" + this.state.clientData);
  },
  componentWillUnmount: function componentWillUnmount() {
    console.log("App un-mounted");
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_headerComponent2.default, { text: this.props.source }),
      _react2.default.createElement(
        'p',
        null,
        this.state.clientData
      ),
      _react2.default.createElement(
        'a',
        { href: this.props.source },
        this.props.source
      ),
      '.'
    );
  }
});