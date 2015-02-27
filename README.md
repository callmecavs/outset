# cinderblock

Scaffolding for your next project. This includes

* choice of html, ejs, jade
* sass
* gulp
* git hooks for scss-lint and jshint to ensure you are commiting high-quality code.

## install

```
$ curl https://raw.githubusercontent.com/jaxgeller/cinderblock/master/install.sh | sh
```

## use

```
# in a blank directory
$ cinderblock <type>
```

## examples

```
$ cinderblock html
$ cinderblock ejs
$ cinderblock jade
```

## what it installs

```
.
├── .jshintrc
├── .scss-lint.yml
├── README.md
├── gulpfile.js
├── package.json
└── src
    ├── images
    ├── scripts
    │   └── main.js
    ├── style
    │   ├── _mixins.scss
    │   ├── _reset.scss
    │   ├── bourbon/
    │   └── style.scss
    └── views/
        ├── includes/
```

## uninstall

```
$ rm /usr/local/bin/cinderblock && rm -r ~/.cinderblock
```

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
