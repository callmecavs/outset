var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

// error handler
// https://github.com/gulpjs/gulp/issues/259
var onError = function(error) {
  console.log(error);
  this.emit('end');
};

// minify html
gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(plugins.htmlmin({ collapseWhitespace: true, removeComments: true }))
    .on('error', onError)
    .pipe(gulp.dest('dist'))
    .pipe(plugins.connect.reload());
});

// compile and compress sass
gulp.task('sass', function() {
  return gulp.src('src/style/style.scss')
    .pipe(plugins.sass({ outputStyle: 'compressed' }))
    .on('error', onError)
    .pipe(gulp.dest('dist'))
    .pipe(plugins.connect.reload());
});

// concat and uglify scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglify())
    .on('error', onError)
    .pipe(gulp.dest('dist'))
    .pipe(plugins.connect.reload());
});

// minify all images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(plugins.imagemin({ progressive: true }))
    .on('error', onError)
    .pipe(gulp.dest('dist/images'));
});

// start local server on port 3000
gulp.task('server', function() {
  return plugins.connect.server({
    root: 'dist',
    port: 3000,
    livereload: true
  });
});

// watch sass and js files
gulp.task('watch', function() {
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/style/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['scripts']);
  gulp.watch('src/images/**/*', ['images']);
});

// default task
gulp.task('default', ['server', 'html', 'sass', 'scripts', 'images', 'watch']);
