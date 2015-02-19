var gulp = require('gulp');
var jade = require('gulp-jade');


gulp.task('template', function(){
	return gulp.src('src/jade-templates/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('public'));
});