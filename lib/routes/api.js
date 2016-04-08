'use strict';

var express = require('express');
var router = express.Router();

var Person = require('../models/person');

router.route('/person')
  .post(function(req, res) {
    var errors = [];

    if(!req.body.firstName)
      errors.push('User did not provide a first name');
    if(!req.body.lastName)
      errors.push('User did not provide a last name');
    if(!req.body.birthDate)
      errors.push('User did not provide birth date');
    if(!req.body.bio)
      errors.push('User did not provide a bio');

    if(errors.length > 0) {
      res.status(400).json({ Error: true, msg: 'Unable to create user', errors: errors });
    } else {
      var person = new Person();

      person.firstName = req.body.firstName;
      person.lastName  = req.body.lastName;
      person.birthDate  = new Date(req.body.birthDate);
      person.bio       = req.body.bio;

      person.save(function(err) {
        if (err)
          res.status(500).json({ Error: true, msg: err });

        res.status(201).json(person);
      });

    }


  });

  module.exports = router;