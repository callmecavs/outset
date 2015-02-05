# outset

Minimal, unassuming, front-end foundation. Configured for HTML5 and Sass, built with Gulp.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## Install

```bash
$ (sudo) npm install outset -g
```

## Use

```
# in your new working directory

$ (sudo) outset
```

Get building! The `index.html` file has everything wired up, and `gulp` will run without errors.

> The most recent, compatible version of [Bourbon](http://bourbon.io/) is included, because not all versions compile with [libsass](https://github.com/sass/libsass). And because it's convenient.

## Browser Support

All that matters: IE9+.

Remove the IE conditional `<script>` in the `<head>` for IE10+.

## Docs

### Structure

Work in the `src` folder, deploy from the `dist` folder. Simple as that.

```
start/
├── .gitignore
├── gulpfile.js
├── package.json
├── dist/
│   ├── index.html
│   ├── scripts.js
│   └── style.css
└── src/
    ├── index.html
    ├── scripts/
    │   └── ready.js
    └── style/
        ├── bourbon/
        ├── _mixins.scss
        ├── _normalize.scss
        └── style.scss
```

The `dist` folder is included in this repo only to demonstrate file structure.

### HTML

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

* Load [Normalize.css](http://nicolasgallagher.com/about-normalize-css/)
* Load [Bourbon.io](http://bourbon.io/docs/)
* Simple media query min-width and max-width mixins
* HTML tag `font-size` set to `62.5%`: `1rem` = `10px`

###### Globals

* Set `*, *:before, *:after` box model to `border-box`
* Set `line-height` to `1.3`
* Set `text-rendering` to `optimizeLegibility`
* Remove `text-decoration` on links
* Set `<strong>` `font-weight` to `bold`
* Set `<em>` `font-style` to `italic`

###### Notes

* `font-family`, `font-weight`, and `font-size` selectors are provided, but commented out in `body`

> Run `bourbon install` in the `style` folder before compiling

### JS

* Load jQuery 2.1.3 [(CDN)](https://developers.google.com/speed/libraries/devguide#jquery)
* Load Velocity.js 1.1 [(CDN)](http://www.jsdelivr.com/#!velocity)
* $(document).ready() provided in `ready.js`

### Gulp

* Minify HTML
* Compile Sass: `compressed` mode
* Concatenate and uglify scripts
* Optimize images: `gif`, `jpg`, `png`, and `svg`
* Start local server on `port 3000`
* Watch HTML, Sass, JS, and images
* Catch errors, log them to console

###### Notes

* Default task does all the above
* See `package.json` for Gulp plugin version details
