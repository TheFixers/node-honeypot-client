/**
 * Gulpfile for compiling SCSS files inHoneypot Client
 * Author: Joshua Michael Waggoner
 * Email: <rabbitfighter@cryptolab.net>
 * Usage: 'gulp [option]' i.e. 'gulp watch'
 */

// Imports
var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

// Compile scss
gulp.task('sass', function () {
    return gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
})
