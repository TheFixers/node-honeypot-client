/**
 * Gulpfile
 * Author: Joshua Michael Waggoner
 * Email: <rabbitfighter@cryptolab.net>
 */

// Imports
var gulp   = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var babel  = require('gulp-babel')
var react  = require('gulp-react')
var sass   = require('gulp-sass')
var jshint = require('gulp-jshint')
var concat = require('gulp-concat')


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Translate EReact to EC3 with gulp and place in src/compiled
gulp.task('react', function() {
  return gulp.src('src/*.jsx')
      .pipe(react())
      .pipe(gulp.dest('src/compiled'))
})

// Translate ES6/Babel to EC3 with gulp and place in src/compiled
gulp.task('babel', function() {
  return gulp.src('src/*.babel')
      .pipe(babel())
      .pipe(gulp.dest('src/compiled'))
})


// Place all JavaScripts in src in src/compiled
gulp.task('js', function() {
  return gulp.src('src/*.js')
      .pipe(gulp.dest('src/compiled'))
})

// Run all scripts
 gulp.task('scripts', ['babel', 'react', 'sass', 'js'], function() {
  return gulp.src(['src/compiled/*.js', ])
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'))
});

// Translates any changes with gulp and compiles dist/all.min.js
gulp.task('watch', function() {
  gulp.watch('src/*.{js,babel,jsx}', ['scripts'])
})