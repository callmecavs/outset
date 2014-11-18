# start

Front-end template, configured for HTML5, SASS (.scss), and JS - built with Gulp.

[![forthebadge](http://forthebadge.com/badges/built-with-love.svg)](http://forthebadge.com)

## Usage

1. `git clone` this repo when beginning a new project.
2. In your shell, run the following:

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

Short but sweet.

* Set language to English.
* Set charset to UTF-8.
* Tell IE to render using newest mode available.
* Set mobile viewport to be the device width, set zoom to 1, and lock zoom.
* Load stylesheet.
* Load jQuery 2.x branch from [Google Hosted Libraries](https://developers.google.com/speed/libraries/devguide#jquery).
* Load scripts.

###### Notes

* Remember to fill in the `<title>`.
* Remove `<script>` from `<head>` if IE9 support is not required.

### SCSS

* Load [Normalize.css](https://github.com/necolas/normalize.css/).
* Load [Bourbon.io](http://bourbon.io/) mixin library. Documentation found [here](http://bourbon.io/docs/).
* Set `*, *:before, *:after` box model to `border-box`, and `margin` to `0`.
* Remove `text-decoration` on links.
* Set `<strong>` `font-weight` to `bold`.
* Set `<em>` `font-style` to `italic`.

###### Notes

* `font` properties in `body` selector are left unset.

### JS

* jQuery 2.x branch is loaded via CDN.
* $(document).ready() provided.

### Gulp

1. Compile Sass (no sourcemap).
2. Contenate and uglify scripts.
3. Run local server on `localhost:3000`.
3. Watch style and scripts.
4. Notify when tasks complete.

###### Tasks:

* `sass`: On style/\*.scss change: compile.
* `scripts`: On scripts/\*.js change: concatenate, uglify.

## Looking Ahead

- [x] Remove Bower
