# outset

[![Outset on NPM](https://img.shields.io/npm/v/outset.svg?style=flat-square)](https://www.npmjs.com/package/outset)

A minimal frontend boilerplate, emphasizing workflow.

## Getting Started

Follow these steps:

1. [Read](#about)
2. [Install](#install)
3. [Use](#use)

## About

Outset is **a workflow more than it is a framework.** It aims to exist in the background, not the spotlight.

All the magic happens in the [`gulpfile`](https://github.com/callmecavs/outset/blob/master/lib/gulpfile.js). The actual HTML/CSS/JS provides some useful but minimal boilerplate. It eliminates a number of annoyances, while making very few assumptions. It is developed and maintained with the intention of being the solution to writing code frontend code instantly, without worrying about configuring a build system.

## Install

Using NPM, install outset globally.

```bash
$ npm install outset -g
```

## Use

In your terminal:

```bash
# the path argument is optional - if not provided, files will be copied to the CWD
# 'npm start' will version and install the devDependencies, then run the default Gulp task

$ outset [path]
$ npm start
```

In your browser:

```
http://localhost:3000/
```

Work in the `src` folder, deploy from the `dist` folder.

## Browser Support

Targeting evergreen browsers and **IE10+**.

Note that this boilerplate **doesn't detect browsers or their features**.

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
