'use strict';

var path = require('path');

global.root   = path.resolve(__dirname);
global.lib    = path.resolve(path.join(global.root, 'lib'));
global.config = require('./config')[process.env.NODE_ENV || 'development'];
global.util   = require('util');

require(path.resolve(path.join(global.lib, 'init')))
  .set('view engine', 'jade')
  .locals.pretty = true
;