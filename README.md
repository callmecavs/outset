# outset

Minimal, unassuming, front-end foundation. Configured for HTML5 and Sass, built with Babel and Gulp.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

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

What matters: **IE9+**.

Display reset provided for HTML5 elements in IE9.

## Docs

### HTML

Just an `index.html` file.

```html
<!DOCTYPE html>

<!--[if IE 9]>         <html class="ie9" lang="en-US"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en-US"> <!--<![endif]-->
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

A custom reset, and mixins.

* Configured for `rem` (`1rem` = `10px`)
* Disable transforms and opacity in IE9

### JS

Just a namespace to build in (that you should rename). No libraries!

Outset supports future ES6/7 syntax via [Babel.js](https://babeljs.io/).

```javascript
'use strict';

class Outset {
  constructor( options ) {
    document.addEventListener('DOMContentLoaded', this.create(), false);
  }

  create() {

  }
}

// INSTANCE

var outset = new Outset({

});
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
