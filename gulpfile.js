var gulp=require('gulp'),
	connect=require('gulp-connect'),
	watch=require('gulp-watch');
gulp.task('connect',function(){
	connect.server({
		root:'app',
		port:9001,
		livereload:true
	});
});
gulp.task('html',function(){
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});
gulp.task('watch',function(){
	gulp.watch(['./app/*html'],['html']);
})
gulp.task('default',['connect','watch']);