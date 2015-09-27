# outset

[![Outset on NPM](https://img.shields.io/npm/v/outset.svg)](https://www.npmjs.com/package/outset)

Minimal, unassuming, front-end foundation. Configured for HTML5 and Sass, built with Browserify and Gulp.

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

Work from the `src` folder, deploy from the `dist` folder.

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

    <script src="bundle.js"></script>
  </body>
</html>
```

### Sass

A custom [reset](https://github.com/callmecavs/outset/blob/master/lib/src/sass/_reset.scss):

* Configured for `rem` (`1rem` = `10px`)

A few simple [mixins](https://github.com/callmecavs/outset/blob/master/lib/src/sass/_mixins.scss):

* Clearfix
* Media Query
* Image Replacement
* Font Face

### JS

Just an entry point to build around. No libraries!

Outset **supports ES6/7** syntax via [Babel.js](https://babeljs.io/), and **bundles modules** via [browserify/watchify](https://github.com/substack/node-browserify).

### Gulp

Never refresh again!

Tasks:

* [HTML](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L34-L42) - minify
* [Sass](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L44-L56) - compile, autoprefix, minify, sourcemaps
* [JS](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L58-L87) - transpile, bundle, minify, sourcemaps
* [Images](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L89-L98) - minify
* [Fonts](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L100-L105)
* [Server](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L107-L131) - auto refresh, serve sourcemaps
* [Watch](https://github.com/callmecavs/outset/blob/v3.0.0/lib/gulpfile.babel.js#L133-L139)

Error Handling:

* No more broken pipes! `gulp-plumber` catches all errors.
* Error handler emits native system notification and logs to terminal.

### Browser Support

Targeting evergreen browsers and **IE10+**. Note that this boilerplate **doesn't detect browsers or their features**.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
