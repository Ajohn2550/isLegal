'use strict';

var express = require('express');

var api = require('./api');

var Person = require('../models/person');

module.exports = function (app) {
  app.use('/js',  express.static(global.root + '/public/js'))
     .use('/css', express.static(global.root + '/public/css'))
     .use('/img', express.static(global.root + '/public/img'));

  app.get('/', function (req, res) {
    res.render('index', {});
  });

  app.use('/api', api);

  app.get('/p/:pId', function (req, res) {
    Person.findById(req.params.pId, function (err, person) {
      if (err) {
        res.status(500).json({ Error: true, msg: err });
      }
      res.render('p', { person: person });
    });
  });
};