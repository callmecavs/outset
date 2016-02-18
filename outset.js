#!/usr/bin/env node

'use strict'

const fs = require('fs-extra')

const path = process.argv[2] || '.'

const TO   = `${ process.cwd() }/${ path }`
const FROM = `${ __dirname }/lib`

fs.copy(FROM, TO, (error) => {
  if(error) return console.log(error)

  fs.renameSync(TO + '/gitignore', TO + '/.gitignore')
})
