#!/usr/bin/env node

'use strict';

var fs = require('fs-extra');

var CWD  = process.cwd();
var FROM = __dirname + '/lib';

fs.copy(FROM, CWD, function(error) {
  if(error) console.log(error);

  // rename .gitignore
  fs.renameSync(CWD + '/gitignore', CWD + '/.gitignore');
});
