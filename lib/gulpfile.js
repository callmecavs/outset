// IMPORTS

const prefixer = require('autoprefixer')
const sync     = require('browser-sync')
const cssnano  = require('cssnano')
const gulp     = require('gulp')
const changed  = require('gulp-changed')
const include  = require('gulp-file-include')
const htmlmin  = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const plumber  = require('gulp-plumber')
const postcss  = require('gulp-postcss')
const maps     = require('gulp-sourcemaps')
const notifier = require('node-notifier')
const scss     = require('postcss-scss')
const rollup   = require('rollup')
const babel    = require('rollup-plugin-babel')

// ERROR HANDLER

const onError = function(error) {
  notifier.notify({
    'title': 'Error',
    'message': 'Compilation failure.'
  })

  console.log(error)
  this.emit('end')
}

// HTML

gulp.task('html', ['images'], () => {
  return gulp.src('src/html/**/*.html')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(include({ prefix: '@', basepath: 'dist/' }))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('dist'))
})

// SASS

const processors = [
  prefixer({ browsers: 'last 2 versions' }),
  cssnano({ safe: true })
]

gulp.task('sass', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(maps.init())
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(maps.write('./maps', { addComment: false }))
    .pipe(gulp.dest('dist'))
})

// JS

gulp.task('js', () => {
  const config = {
    entry: 'src/js/main.js',
    sourceMap: true,
    plugins: [
      babel()
    ]
  }

  rollup
    .rollup(config)
    .then(bundle => {
      bundle.write({
        dest: 'dist/bundle.js'
      })
    })
})

// IMAGES

gulp.task('images', () => {
  return gulp.src('src/images/**/*.{gif,jpg,png,svg}')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed('dist/images'))
    .pipe(imagemin({ progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/images'))
})

// VIDEOS, FONTS, FAVICON

const inputs = [
  '/videos/**/*',
  '/fonts/**/*.{eot,svg,ttf,woff,woff2}',
  '/favicon.ico'
]

const outputs = [
  '/videos',
  '/fonts',
  ''
]

;['videos', 'fonts', 'favicon'].forEach((name, index) => {
  gulp.task(name, () => {
    return gulp.src('src' + inputs[index])
      .pipe(plumber({ errorHandler: onError }))
      .pipe(gulp.dest('dist' + outputs[index]))
  })
})

// SERVER

const server = sync.create()
const reload = sync.reload

const sendMaps = (req, res, next) => {
  const filename = req.url.split('/').pop()
  const extension = filename.split('.').pop()

  if(extension === 'css' || extension === 'js') {
    res.setHeader('X-SourceMap', '/maps/' + filename + '.map')
  }

  return next()
}

const options = {
  notify: false,
  server: {
    baseDir: 'dist',
    middleware: [
      sendMaps
    ]
  },
  watchOptions: {
    ignored: '*.map'
  }
}

gulp.task('server', () => sync(options))

// WATCH

gulp.task('watch', () => {
  gulp.watch('src/html/**/*.html', ['html', reload])
  gulp.watch('src/sass/**/*.scss', ['sass', reload])
  gulp.watch('src/js/**/*.js', ['js', reload])
  gulp.watch('src/images/**/*.{gif,jpg,png,svg}', ['images', reload])
})

// BUILD & DEFAULT TASK

gulp.task('build', ['html', 'sass', 'js', 'images', 'videos', 'fonts', 'favicon'])
gulp.task('default', ['server', 'build', 'watch'])
