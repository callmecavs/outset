# outset

[![Outset on NPM](https://img.shields.io/npm/v/outset.svg?style=flat-square)](https://www.npmjs.com/package/outset)

A minimal frontend boilerplate, emphasizing workflow.

## Getting Started

Follow these steps:

1. [Install](#install)
2. [Use](#use)

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

## Docs

### HTML

Simply an `index.html` file.

```html
<!DOCTYPE html>

<html lang="en-US">
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <script src="bundle.js"></script>
  </body>
</html>
```

#### Inline SVGs

You can inline SVGs in your HTML using the following syntax:

```html
@include("path/to/image.svg")
```

The inlined SVG has already run through the Gulp images task, and the path is relative to the `dist/images` folder.

### Sass

A minimal set of partials.

```
sass/
├── _base.scss                // global font and container styles
├── _mixins.scss              // mixins - clearfix, flex, @font-face, image replacement, min-width media query
├── _reset.scss               // custom, minimal reset
├── _vars.scss                // central variable file
├── _z-index.scss             // central z-index file
└── style.scss                // all @imports
```

### JS

Just an entry point to build around. No libraries!

Outset **supports ES6/7** syntax via [Babel.js](https://babeljs.io/), and **bundles modules (the futuristic, tree-shaking way)** via [Rollup](https://github.com/rollup/rollup).

### Gulp

Never refresh again!

Tasks:

* HTML - inline SVGs, minify
* Sass - compile, autoprefix, minify, sourcemaps
* JS - transpile, bundle, minify, sourcemaps
* Images - minify
* Fonts, Videos, Favicon - move to deployment folder
* Server - auto refresh, serve sourcemaps
* Watch

Error Handling:

* No more broken pipes! `gulp-plumber` catches all errors.
* [Error handler](https://github.com/callmecavs/outset/blob/master/lib/gulpfile.babel.js#L23-L33) emits native system notification and logs to terminal.

### Browser Support

Targeting evergreen browsers and **IE10+**.

Note that this boilerplate **doesn't detect browsers or their features**.

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
