var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify = require('browserify');
var vinyl = require('vinyl-source-stream');
var sass = require('gulp-sass');


gulp.task('html', function(){
	return gulp.src('src/jade-templates/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('public'));
});

gulp.task('js', function(){
	return browserify('./src/js/main')
	.bundle()//including source maps
	.pipe(vinyl('bundle.js'))
	.pipe(gulp.dest('./public/js'))
});

gulp.task('css', function(){
	return gulp.src('src/css/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('./public/css'))
});