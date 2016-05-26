'use strict';

var resin = require('resin-sdk');
var handlebars = require('express-handlebars');
var express = require('express');
var app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

enableDevices();

app.get('/', function (req, res, next) {
	getDevices(res)
});
app.listen(3000);

function getDevices(res) {
  resin.auth.authenticate({email: process.env.EMAIL, password: process.env.PASSWORD}, function(error, token) {
	    if (error) throw error;
	    resin.models.device.getAllByApplication(process.env.APP_NAME, function(error, devices) {
		    if (error) throw error;
		    res.render('home', { 'devices': devices });
		});
	});
}

function enableDevices() {
	resin.auth.authenticate({email: process.env.EMAIL, password: process.env.PASSWORD}, function(error, token) {
	    if (error) throw error;
	    resin.models.device.getAllByApplication(process.env.APP_NAME, function(error, devices) {
		    if (error) throw error;
		    devices.forEach(function(device) {
				resin.models.device.enableDeviceUrl(device.uuid, function(error) {
				    if (error) throw error;
				});
			});
		});
	});
}