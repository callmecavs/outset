var gulp   = require("gulp");
var shell  = require('gulp-shell');
var min    = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

// compile sass, remove source map
gulp.task('sass', shell.task([
  'sass style/style.scss style.css --sourcemap=none'
]));

// minify css
gulp.task('css', function() {
  gulp.src('./style.css')
    .pipe(min())
    .pipe(gulp.dest('./'))
    .pipe(notify('SASS compiled, CSS minified'));
});

// uglify, rename js
gulp.task('scripts', function() {
  gulp.src('./scripts/*.js')
    .pipe(uglify())
    .pipe(rename('ready.min.js'))
    .pipe(gulp.dest('./scripts'))
    .pipe(notify('JS uglified.'));
});

// watch 
gulp.task('watch', function() {
  gulp.watch('./scripts/**', ['scripts']);
  gulp.watch('./style/**', ['sass', 'css']);
});

// build task
gulp.task('build', ['sass', 'css', 'scripts']);

// default task
gulp.task('default', ['build', 'watch']);