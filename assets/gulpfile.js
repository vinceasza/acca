var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {

  // Compile Sass and autoprefix
  gulp.src('css/main.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: '> 1%',
    }))
    .pipe(gulp.dest('css'));

});

gulp.task('watch', function () {

  gulp.watch('css/**/*', ['styles']);

});

gulp.task('default', ['watch']);