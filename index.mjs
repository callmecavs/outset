#!/usr/bin/env node

import fs from 'fs-extra'
import { URL } from 'url'

const dest = `${ process.cwd() }/${ process.argv[2] || '.' }`
const dirname = new URL('.', import.meta.url).pathname

try {
  await fs.copy(`${ dirname }template`, dest)
} catch (error) {
  console.log(error.message)
}
