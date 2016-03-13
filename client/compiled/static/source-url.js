'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Exports the url for getting client data from server
 */
var HTTP = 'http://';
// Base directory
var HOST = '54.200.61.193/';
// Client data file
var FILE = 'clientInfoData.json';
// Export the whole URL
exports.default = String(HTTP + HOST + FILE);