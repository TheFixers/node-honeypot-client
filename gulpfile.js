/**
 * Gulpfile for Honeypot Client
 * Author: Joshua Michael Waggoner
 * Email: <rabbitfighter@cryptolab.net>
 * Usage: 'gulp [option]' i.e. 'gulp watch'
 */

// Imports
var gulp   = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var babel  = require('gulp-babel')
var sass   = require('gulp-sass')
var react  = require('gulp-react')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
 
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

// Browserify task
gulp.task('browserify', ['compile'], function() {
    return browserify('client/compiled/index.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'))
})

// Watch task
gulp.task('watch', function() {
    gulp.watch('./client/source/**/*.{js, jsx}', ['browserfy'])
    gulp.watch('./client/source/*.{js, jsx}', ['browserify'])
    gulp.watch('./client/styles/*.{scss}', ['scss'])
})