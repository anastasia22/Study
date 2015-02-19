var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify = require('browserify');
var vinyl = require('vinyl-source-stream');


gulp.task('template', function(){
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