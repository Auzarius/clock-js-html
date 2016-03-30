var gulp 		= require("gulp"),
	connect		= require("gulp-connect");
	
var livePort	= 1330;

gulp.task('connect', function() {
	connect.server({
		root: './',
		port: livePort,
		livereload: true,
		fallback: './index.html'
	});
});

gulp.task('default', ['connect']);