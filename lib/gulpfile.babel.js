// IMPORTS

import babelify from 'babelify'
import browserify from 'browserify'
import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import changed from 'gulp-changed'
import connect from 'gulp-connect'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'
import minify from 'gulp-minify-css'
import plumber from 'gulp-plumber'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import assign from 'lodash.assign'
import notifier from 'node-notifier'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import watchify from 'watchify'

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

gulp.task('html', () => {
  return gulp.src('src/html/**/*.html')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

// SASS

gulp.task('sass', () => {
  return gulp.src('src/sass/style.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: [ 'last 2 versions', 'ie >= 9', 'Android >= 4.1' ] }))
    .pipe(minify())
    .pipe(sourcemaps.write('./maps', { addComment: false }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

// JS

const browserifyArgs = {
  entries: 'src/js/main.js',
  debug: true,
  transform: [ 'babelify' ]
}

const watchifyArgs = assign(watchify.args, browserifyArgs)
const bundler = watchify(browserify(watchifyArgs))

const build = () => {
  console.log('Bundling started...')
  console.time('Bundling finished')

  return bundler
    .bundle()
    .on('error', onError)
    .on('end', () => console.timeEnd('Bundling finished'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps', { addComment: false }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
}

bundler.on('update', build)
gulp.task('js', build)

// IMAGES

gulp.task('images', () => {
  return gulp.src('src/images/**/*.{gif,jpg,png,svg}')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed('dist'))
    .pipe(imagemin({ progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
})

// FONTS

gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('dist/fonts'))
})

// SERVER

const sendMaps = (req, res, next) => {
  const filename = req.url.split('/').pop()
  const extension = filename.split('.').pop()

  if(extension === 'css' || extension === 'js') {
    res.setHeader('X-SourceMap', '/maps/' + filename + '.map')
  }

  return next()
}

gulp.task('server', () => {
  return connect.server({
    root: 'dist',
    port: 3000,
    livereload: true,
    middleware: (connect, opt) => {
      return [
        sendMaps
      ]
    }
  })
})

// WATCH

gulp.task('watch', () => {
  gulp.watch('src/html/**/*.html', ['html'])
  gulp.watch('src/sass/**/*.scss', ['sass'])
  gulp.watch('src/images/**/*.{gif,jpg,png,svg}', ['images'])
})

// TASKS

gulp.task('build', ['html', 'sass', 'js', 'images', 'fonts'])
gulp.task('default', ['server', 'build', 'watch'])
