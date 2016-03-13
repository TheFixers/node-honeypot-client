'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns a promise which promises that after
// execution of JSON/AJAC call, it will either
// reolve the response, or reject with an error
// Requirements: 'jquery'

exports.default = function (url) {
    return new Promise(function (resolve, reject) {
        _jquery2.default.ajax({
            type: 'GET', // Get request
            url: url, // Pass in the url
            dataType: 'text', // server responds w/ invalid json
            async: true, // Async return
            crossDomain: true, // Cross domain
            success: function success(data) {
                resolve(data);
            },
            error: function error(xhr, options, err) {
                reject(err);
            }
        });
    });
};