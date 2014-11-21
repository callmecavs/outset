// gulp
var gulp   = require('gulp');

// plugins
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var notify  = require('gulp-notify');
var connect = require('gulp-connect');

// error handler
var onError = function(err) {
  console.log(err);
  this.emit('end');
}

// compile sass
gulp.task('sass', function() {
  return gulp.src('style/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', onError)
    .pipe(gulp.dest('./'))
    .pipe(notify('SASS compiled.'))
});

// concat and uglify scripts
gulp.task('scripts', function() {
  return gulp.src('scripts/*.js')
    .pipe(concat('scripts.min.js'))
    .on('error', onError)
    .pipe(uglify())
    .on('error', onError)
    .pipe(gulp.dest('./'))
    .pipe(notify('JS concatenated and uglified.'));
});

// spin up server
gulp.task('server', function() {
  return connect.server({
    port: 3000
  });
});

// watch style and scripts
gulp.task('watch', function() {
  gulp.watch('style/*.scss', ['sass']);
  gulp.watch('scripts/*.js', ['scripts']);
});

// default task
gulp.task('default', ['server', 'sass', 'scripts', 'watch']);
