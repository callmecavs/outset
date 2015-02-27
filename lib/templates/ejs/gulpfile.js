'use strict';

var gulp = require('gulp');
var p = require('gulp-load-plugins')();
var handle = p.notify.onError('Error: <%= error.message %>');

gulp.task('server', function() {
  return p.connect.server({
    root: 'dist',
    port: 8000,
    livereload: true
  });
});

gulp.task('ejs', function() {
  return gulp.src('src/views/*.ejs')
    .pipe(p.ejs())
    .on('error', handle)
    .pipe(p.htmlmin({collapseWhitespace: true}))
    .on('error', handle)
    .pipe(gulp.dest('dist/'))
    .pipe(p.connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/style/style.scss')
    .pipe(p.sass({outputStyle: 'compressed'}))
    .on('error', handle)
    .on('error', function(e){console.log(e); return this.emit('end');})
    .pipe(gulp.dest('dist/'))
    .pipe(p.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(p.concat('main.js'))
    .pipe(p.uglify())
    .on('error', handle)
    .pipe(gulp.dest('dist/'))
    .pipe(p.connect.reload());
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(p.imagemin())
    .on('error', handle)
    .pipe(gulp.dest('dist/images'))
    .pipe(p.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/views/**/*.ejs', ['ejs']);
  gulp.watch('src/style/**/*.scss', ['sass']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/images/**/*', ['images']);
});


gulp.task('build', ['ejs', 'sass', 'scripts', 'images']);
gulp.task('default', ['server', 'build', 'watch']);
