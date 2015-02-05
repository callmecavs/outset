#!/usr/bin/env node
'use strict';

var fs = require('fs-extra');

var FROM = __dirname + '/lib';
var TO   = process.cwd();

fs.copy(FROM, TO, function(error) {
  if(error) console.log(error);
});
