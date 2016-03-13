"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promiseFetchServerData = require("./promise-fetch-server-data.js");

var _promiseFetchServerData2 = _interopRequireDefault(_promiseFetchServerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Make the data request

exports.default = function (url) {

    var promise = (0, _promiseFetchServerData2.default)(url);

    promise.then(function (data) {
        return data;
    }).catch(function (err) {
        console.error(err);
        return "this is fucked";
    });
};