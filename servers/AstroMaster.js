var util = require('util');
var EventEmitter = require('events').EventsEmitter;
var net = require('net');
var microtime = require('microtime');
var utils = require('../utils');
var ExponentalBuffer = require('../lib/exponental.buffer');

function Teleserver(params) {
	var self = this;

// Recieves the data from Stellarium.js, process it, and send coordinates to engine to move telescope.


socket.on('data'), function (raw) {
	var command = seld.read(raw);

	desried_position = {
	  x: Math.cos(command.ra) * command.cdec
	, y: Math.sin(command.ra) * command.cdec
	, z: Math.sin(command.dec)
	};


};



};