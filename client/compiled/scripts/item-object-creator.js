"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var notFoundMsg = "No data found";

var Item = function Item(data, index) {

    this.index = index;
    this.ip = notFoundMsg;
    this.username = notFoundMsg;
    this.passwords = notFoundMsg;
    this.id = notFoundMsg;
    this.key = notFoundMsg;
    this.time = notFoundMsg;
    this.port = notFoundMsg;
    this.socket = notFoundMsg;

    try {
        this.ip = data.Client.IP;
    } catch (e) {
        console.error(e.message);
    }

    try {
        this.username = data.Client.Data.Username.toString();
    } catch (e) {
        console.error(e.message);
    }

    try {
        this.id = data._id.$oid.toString();
    } catch (e) {
        console.error(e.message);
    }

    try {
        this.key = data.Client.Data.Key.toString();
    } catch (e) {
        console.error(e.message);
    }

    try {
        this.time = data.Client.Data.Time;
    } catch (e) {
        console.error(e.message);
    }

    try {
        this.port = data.Client.Port;
    } catch (e) {
        console.error(e.message);
    }
    try {
        this.socket = data.Client.Socket.toString();
    } catch (e) {
        console.error(e.message);
    }
};

exports.default = function (data, index) {
    if (data) {
        return new Item(data, index);
    }
};