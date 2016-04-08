'use strict';

var app        = require('express')();
var server     = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.connect(global.config.mongo);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes')(app);

server.listen(global.config.port || 8080, function () {
  console.info('Server listening on Port: ' + global.config.port || 8080);
});

module.exports = app;