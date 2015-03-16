# outset

Minimal, unassuming, front-end foundation. Configured for HTML5 and Sass, built with Gulp.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## Install

```bash
$ [sudo] npm install outset -g
```

## Use

In your new working directory:

```bash
$ [sudo] outset
$ [sudo] npm i
$ [sudo] gulp
```

In your browser:

```
http://localhost:3000/
```

Work in the `src` folder, deploy from the `dist` folder.

Get building! The `index.html` file has everything wired up. Review the included `gulp` tasks below.

> The most recent, compatible version of [Bourbon](http://bourbon.io/) is included, because not all versions compile with [libsass](https://github.com/sass/libsass). And because it's convenient.

## Browser Support

All that matters: IE9+.

Remove the IE conditional `<script>` in the `<head>` for IE10+.

## Docs

### HTML

Just an `index.html` file.  Shown here without the conditional IE9 script:

```html
<!DOCTYPE html>

<html lang="en-US">
  <head>
    <title></title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="wrapper">

    </div><!-- END wrapper -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/velocity/1.2.2/velocity.min.js"></script>
    <script src="scripts.js"></script>
  </body>
</html>
```

### Sass

A custom reset, mixins, and placeholder selectors.

* [Bourbon.io](http://bourbon.io/docs/)
* Mixins for media queries
* Placeholder selectors for: clearfix, hiding text, and vertical centering
* Configured for `rem` (`1rem` = `10px`)

### JS

A namespace to build in:

```javascript
'use strict';

// constructor

function Outset(options) {

  this.init();
}

// methods

Outset.prototype.init = function() {

};

// instance

var outset = new Outset({

});
```

> Be sure to use a namespace other than "Outset" to avoid conflicts.

Libraries:

* Load jQuery 2.1.3 [(CDN)](https://developers.google.com/speed/libraries/devguide#jquery)
* Load Velocity.js 1.2.2 [(CDN)](http://www.jsdelivr.com/#!velocity)

### Gulp

Never refresh again!

Tasks:

* Minify HTML
* Compile Sass (`compressed` output)
* Concatenate and uglify scripts
* Optimize images: `gif`, `jpg`, `png`, and `svg`
* Start local server on `port 3000`
* LiveReload on change (no browser extension needed)

Watch for changes:

* HTML, Sass, JS, and images

## Looking Ahead

* Add `gulp-notify` for error reporting or failure to compile Sass/js
* Add task for moving `fonts` folder
