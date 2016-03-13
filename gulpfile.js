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
var sass   = require('gulp-sass')
var react  = require('gulp-react')

var browserify = require('browserify');
var source = require('vinyl-source-stream');
 

/**
 * Runs SCSS task
 */
gulp.task('scss', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/scss'))
})

/**
 * Runs SCSS task
 */
gulp.task('babel', function () {
    return gulp.src(['src/components/*.js', 'src/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('src/compiled'))
})

/*gulp.task('compile', ['react', 'scss'], function() {
    return gulp.src(['src/compiled/*.js'])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})*/

gulp.task('browserify', ['babel'], function() {
    return browserify('./src/compiled/index.js')
        .bundle()

        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});


/**
 * Watch task
 */
gulp.task('watch', function() {
    gulp.watch('src/*.{js, jsx}', ['browserfy'])
    gulp.watch('src/components/*.{js, jsx}', ['browserify'])
    gulp.watch('scss/*.{scss}', ['scss'])
})