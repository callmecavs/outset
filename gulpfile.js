// init gulp
var gulp   = require("gulp");

// init plugins
var plumber = require('gulp-plumber');
var shell  = require('gulp-shell');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var notify  = require('gulp-notify');

// error handler
var onError = function(error) {
  console.log(error);
}

// compile sass, without source map
// shell used to be compatible with bourbon
gulp.task('sass', function() {
  return gulp.src('style/*.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(shell(['sass style/style.scss style.css --sourcemap=none']))
    .pipe(notify('SASS compiled, CSS minified.'));
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