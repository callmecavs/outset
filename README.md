# outset

[![Outset on NPM](https://img.shields.io/npm/v/outset.svg)](https://www.npmjs.com/package/outset)

Minimal, unassuming, front-end foundation. Configured for HTML5 and Sass, built with Babel and Gulp.

## Install

```bash
$ npm install outset -g
```

## Use

In your terminal:

```bash
$ outset [path]
$ npm i
$ gulp
```

In your browser:

```
http://localhost:3000/
```

Get building! Work in the `src` folder, deploy from the `dist` folder. The `index.html` file comes wired up.

## Browser Support

Display reset provided for HTML5 elements in IE9.

Note that this boilerplate **doesn't detect browsers or their features**.

## Docs

### HTML

Just an `index.html` file.

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

    <script src="scripts.js"></script>
  </body>
</html>
```

### Sass

A custom [reset](https://github.com/callmecavs/outset/blob/master/lib/src/style/_reset.scss):

* Configured for `rem` (`1rem` = `10px`)

Simple [mixins](https://github.com/callmecavs/outset/blob/master/lib/src/style/_mixins.scss):

* Clearfix
* Media Query
* Font Face
* Image Replacement

### JS

Just a namespace to build in (that you should rename). No libraries!

Outset supports future ES6/7 syntax via [Babel.js](https://babeljs.io/).

```javascript
'use strict';

// CLASS

class Outset {
  constructor() {
    document.addEventListener('DOMContentLoaded', this.create.bind(this), false);
  }

  create() {

  }
}

// INSTANCE

var outset = new Outset();
```

### Gulp

Never refresh again!

Tasks:

* Minify HTML
* Compile Sass (`compressed` output)
* Autoprefixer to add vendor prefixes (browser string: `> 1%, last 2 versions, Explorer >= 9`)
* Transpile, concatenate and uglify scripts
* Optimize images: `gif`, `jpg`, `png`, and `svg`
* Start local server on `port 3000`
* LiveReload on change (no browser extension needed)

Error Handling:

* Plumber catches all errors - no more broken pipes!
* Native notifications for compilation failures
  * Errors are logged to console as well

Watch:

* HTML, Sass, JS, and images

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
