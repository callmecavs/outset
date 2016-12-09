# outset

[![Outset on NPM](https://img.shields.io/npm/v/outset.svg?style=flat-square)](https://www.npmjs.com/package/outset)

A minimal frontend boilerplate, emphasizing workflow.

## Getting Started

Follow these steps:

1. [Read](#about)
2. [Install](#install)
3. [Use](#use)

## About

Outset is **a workflow moreso than it is a framework.** It aims to exist in the background, not the spotlight.

All the magic happens in the [`gulpfile`](https://github.com/callmecavs/outset/blob/master/lib/gulpfile.js). The actual HTML/CSS/JS [code](https://github.com/callmecavs/outset/tree/master/lib/src) provides some useful but minimal boilerplate. A more detailed explanation of both can be found [here](https://github.com/callmecavs/outset/blob/master/DETAIL.md).

Outset eliminates a number of annoyances, while making very few assumptions. It is developed with the intention of being the solution to writing frontend code instantly, without worrying about setup, or configuring a build system.

## Install

Using NPM, install outset globally.

```bash
$ npm install outset -g
```

## Use

In your terminal:

```bash
# the path argument is optional
# if not provided, files will be copied to the CWD

$ outset [path]
$ npm i
$ gulp
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
