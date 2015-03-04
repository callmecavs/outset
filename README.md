# outset

Minimal, unassuming, front-end foundation. Configured for HTML5 and Sass, built with Gulp.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## Install

```bash
$ (sudo) npm install outset -g
```

## Use

In your new working directory:

```bash
$ (sudo) outset
$ (sudo) npm i
$ (sudo) gulp
```

In your browser:

```
[http://localhost:3000/](http://localhost:3000/)
```

Work in the `src` folder, deploy from the `dist` folder. Simple as that.

Get building! The `index.html` file has everything wired up. Review the included `gulp` tasks below.

> The most recent, compatible version of [Bourbon](http://bourbon.io/) is included, because not all versions compile with [libsass](https://github.com/sass/libsass). And because it's convenient.

## Browser Support

All that matters: IE9+.

Remove the IE conditional `<script>` in the `<head>` for IE10+.

## Docs

### HTML

Just an `index.html` file.

* Language: `en-US`
* Charset: `UTF-8`
* IE rendering mode: `edge`
* Viewport: `width=device-width, initial-scale=1, maximum-scale=1`
* Load `style.css`
* Load `scripts.js`

###### Notes

* Fill in `<title>`
* Add more `<meta>`

### Sass

Just mixins and basic global styles.

* Reset with [Normalize.css](http://nicolasgallagher.com/about-normalize-css/)
* Mixins via [Bourbon.io](http://bourbon.io/docs/)
* Simple media query mixins
* More utility classes coming soon
* Configured for `rem` (`1rem` = `10px`)

###### Globals

* Set `*, *:before, *:after` box model to `border-box`
* Set `line-height` to `1.3`
* Set `text-rendering` to `optimizeLegibility`
* Remove `text-decoration` on links
* Set `<strong>` `font-weight` to `bold`
* Set `<em>` `font-style` to `italic`

###### Notes

* `font-family`, `font-weight`, and `font-size` selectors are provided, but commented out in `body`

### JS

Just 2 libraries and a `document.ready()`.

* Load jQuery 2.1.3 [(CDN)](https://developers.google.com/speed/libraries/devguide#jquery)
* Load Velocity.js 1.2.1 [(CDN)](http://www.jsdelivr.com/#!velocity)

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

###### Notes

* Default task does all the above, just run it once!
* Errors are handled and logged to terminal
* See `package.json` for Gulp plugin version details

## Looking Ahead

* Add `gulp-notify` for error reporting or failure to compile Sass/js
* Add task for moving `fonts` folder
