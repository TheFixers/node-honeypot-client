/**
 * Gulp multi-language compiler
 * Author: Joshua Michael Waggoner
 * Email: <rabbitfighter@cryptolab.net>
 */

// Imports
var gulp   = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var babel  = require('gulp-babel')
var jshint = require('gulp-jshint');
var concat = require('gulp-concat')

/**
 * Translate ES6/Babel to EC3 with gulp and place in src/compiled
 */
gulp.task('babel', function() {
  return gulp.src('src/*.babel')
  .pipe(babel())
  .pipe(gulp.dest('src/compiled'))
})


/**
 * Place all JavaScripts in src in src/compiled
 */
gulp.task('js', () => {
  return gulp.src('src/*.js')
  .pipe(gulp.dest('src/compiled'))
})

/**
 * Runs Tasks 1-4
 */
 gulp.task('scripts', ['babel', 'js'], () => {
  return gulp.src(['src/compiled/*.js', ])
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
});

/**
 * Translates any change to EC3 with gulp and place 
 * in src/compiled and all.min.js
 */
gulp.task('watch', () => {
  gulp.watch('src/*.{js,babel}', ['scripts'])
})
