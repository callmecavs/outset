# start

Front-end template, configured for HTML5, SASS (.scss), and JS - built with Gulp.

[![forthebadge](http://forthebadge.com/badges/built-with-love.svg)](http://forthebadge.com)

## Usage

1. `git clone` this repo to start a new project.
2. Run the following in your shell:

```bash
$ (sudo) rm -rf .git
$ (sudo) npm i
$ (sudo) gulp
```

> That's it! The `index.html` file has everything wired up, and the `gulpfile` will run without errors, all right out the box!

## About

The rest of these docs outline exactly what this boilerplate provides.

### General

* Tabs replaced with 2 spaces.

### HTML

* Set language to English.
* Set charset to UTF-8.
* Tell IE to render using newest mode available.
* Set mobile viewport to be the device width, set zoom to 1, and lock zoom.
* Load stylesheet.
* Load jQuery 2.x branch from [Google Hosted Libraries](https://developers.google.com/speed/libraries/devguide#jquery).
* Load scripts before `</body>`.

###### Notes

* Fill in the `<title>`.
* Add your SEO stuff.
* Remove `<script>` from `<head>` if IE9 HTML elements support is not required.

### SCSS

* Load [Normalize.css](https://github.com/necolas/normalize.css/). Docs [here](http://nicolasgallagher.com/about-normalize-css/).
* Load [Bourbon.io](http://bourbon.io/) mixin library. Docs [here](http://bourbon.io/docs/).
* Simple media query mixin.
* Set `*, *:before, *:after` box model to `border-box`.
* Set `line-height` to `1.3`.
* Set `text-rendering` to `optimizeLegibility`.
* Remove `text-decoration` on links.
* Set `<strong>` `font-weight` to `bold`.
* Set `<em>` `font-style` to `italic`.

###### Notes

* `font-family`, `font-wieght`, and `font-size` selectors are provided, but commented.

### JS

Short but sweet.

* $(document).ready() provided.

### Gulp

1. Compile Sass - `compressed` mode, no `sourcemap`.
2. Concat and uglify scripts.
3. Start server on `localhost:3000`.
3. Watch style and scripts.
4. Notify when tasks complete.

###### Tasks:

* `sass`: On style/\*.scss change: compile.
* `scripts`: On scripts/\*.js change: concatenate, uglify.
