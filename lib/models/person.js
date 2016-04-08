'use strict';

var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
  firstName: String,
  lastName:  String,
  birthDate: { type: Date },
  bio: String
});

module.exports = mongoose.model('person', personSchema);