'use strict';

var resin = require('resin-sdk');
var exphbs  = require('express-handlebars');
var express = require('express');
var app = express();

var urls = [];

var hbs = exphbs.create({
    helpers: {
        url: function () {
        	console.log(urls.length);
        	return urls.shift();
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
	resin.auth.authenticate({email: process.env.EMAIL, password: process.env.PASSWORD}, function(error, token) {
	    if (error) throw error;
	    resin.models.device.getAllByApplication(process.env.APP_NAME, function(error, devices) {
		    if (error) throw error;
		    var iter = 0;
		    devices.forEach(function(device) {
				resin.models.device.enableDeviceUrl(device.uuid, function(error) {
				    if (error) throw error;
				    resin.models.device.getDeviceUrl(device.uuid, function(error, url) {
					    if (error) throw error;
					    urls.push(url + "/html/");
					    iter++;
					    if(iter == devices.length)
					    {
					    	res.render('home');
					    }
					});
				});
			});
		});
	});
});

app.listen(3000);



