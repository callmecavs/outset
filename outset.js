#!/usr/bin/env node

'use strict'

const fs = require('fs-extra')

const arg = process.argv[2] || '.'

const TEMPLATE = `${ __dirname }/template`
const TO       = `${ process.cwd() }/${ arg }`

fs.copy(TEMPLATE, TO, error => {
  if(error) {
    return console.log(error)
  }

  fs.renameSync(`${ TO }/gitignore`, `${ TO }/.gitignore`)
})
