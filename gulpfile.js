var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: 'src/BrowserIdentifier.js',
    extensions: ['.js'],
    debug: false
  })
  .transform(babelify)
  .bundle()
  .pipe(source('BrowserIdentifier.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watchJS', function() {
  gulp.watch("src/**/*.js", ['build']);
});

gulp.task('default', ['watchJS', 'build']);
