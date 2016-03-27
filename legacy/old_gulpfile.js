/**
 * Gulpfile for Honeypot Client
 * Author: Joshua Michael Waggoner
 * Email: <rabbitfighter@cryptolab.net>
 * Usage: 'gulp [option]' i.e. 'gulp watch'
 */

// Imports
var babel  = require('gulp-babel')
var browserify = require('browserify')
var concat = require('gulp-concat')
var del = require('del');
var gulp = require('gulp')
var react = require('gulp-react')
var sass = require('gulp-sass')
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')

gulp.task('clean', function () {
  return del([
    'build/*',
    'client/compiled/*'
  ])
})
// Compile scss
gulp.task('sass', function () {
    return gulp.src('client/styles/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('build/styles'))
})
// Compile sripts
gulp.task('modules', function () {
    return gulp.src(['client/source/modules/*.js'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('client/compiled/modules'))
})
// Compile react components
gulp.task('components', function () {
    return gulp.src(['client/source/components/*.js'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('client/compiled/components'))
})
// Compile static files
gulp.task('static', function () {
    return gulp.src(['client/source/static/*.js'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./client/compiled/static'))
})
// Compile index.js (entry file)
gulp.task('entry', function () {
    return gulp.src(['client/source/*.js'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('client/compiled'))
})
// Compile all
gulp.task('compile', ['modules', 'components', 'static', 'entry', 'sass'], function() {
    return true
})
// Browserify build task
gulp.task('build', ['compile'], function() {
    return browserify('client/compiled/index.js')
        .bundle()
        .pipe(source('bundle.js'))//Pass desired output filename to vinyl-source-stream
        .pipe(gulp.dest('./build/'))
})
// Watch task builds live
gulp.task('watch', function() {
    gulp.watch('./client/source/**/*.{js, jsx}', ['build'])
    gulp.watch('./client/source/*.{js, jsx}', ['build'])
    gulp.watch('./client/styles/*.{scss}', ['scss'])
})