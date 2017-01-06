var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var reload = browserSync.reload;

gulp.task('babel', function() {
  return gulp.src(['examples/**/*.js', '!examples/**/*.compiled.js'])
    .pipe(plumber())
    .pipe(babel())
    .pipe(rename(function (path) {
      path.dirname += "";
      path.basename += ".compiled";
      path.extname = ".js";
      return path;
    }))
    .pipe(gulp.dest("./examples"));
});

gulp.task('serve', ['babel'], function() {
  browserSync.init({
      server: {
          baseDir: "./examples"
      }
  });

  gulp.watch("examples/**/*.js", ['babel']);
  gulp.watch("examples/**/*.html").on('change', reload);
});

gulp.task('default', ['serve']);
