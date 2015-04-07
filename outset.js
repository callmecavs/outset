#!/usr/bin/env node

'use strict';

var fs = require('fs-extra');

var path = process.argv[2] || '.';

var CWD  = process.cwd() + '/' + path;
var FROM = __dirname + '/lib';

fs.copy(FROM, CWD, function(error) {
  if(error) console.log(error);

  // rename .gitignore
  fs.renameSync(CWD + '/gitignore', CWD + '/.gitignore');
});
