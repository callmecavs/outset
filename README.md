# start

Front-end template, configured for HTML5, SASS (.scss syntax), and JS - built with Gulp.

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
* Load [Bourbon.io](http://bourbon.io/) mixin library.  Documentation found [here](http://bourbon.io/docs/).
* Set `*, *:before, *:after` box model to `border-box`, and `margin` to `0`.
* Remove `text-decoration` on links.
* Set `<strong>` `font-weight` to `bold`.
* Set `<em>` `font-style` to `italic`.

###### Notes

* Remember to set `font` properties in `body` selector.

### JS

* jQuery 2.x branch is loaded via CDN.
* $(document).ready() provided.

###### Notes

* Use bookmarklet.js for debugging layouts.  See [here](https://gist.github.com/addyosmani/fd3999ea7fce242756b1).

### Gulp

###### Default Task:

1. Compile SASS, and remove source map.
2. Minify compiled CSS.
3. Merge all scripts, uglify, rename ready.min.js.
4. Watch all files in /scripts and /style.

###### Notifications:

Uses Mac OSX native notifications, with Growl fallbacks.

* On /style change: SASS compiled, CSS minified.
* On /scripts change: JS uglified.

# Looking Ahead

- [x] Improve documentation
- [ ] Improve commenting
