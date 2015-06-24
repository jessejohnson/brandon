//task runner vars
var gulp = require('gulp');
var less = require('gulp-less');
var pkg = require('./package.json');

// constants
var SRC_DIR = './src/';
var BUILD_DIR = './dist/';
var ALL_LESS = SRC_DIR+'css/less/*.less';


//default task for gulp
gulp.task('default', function(){
	console.log("Gulp default task for " + pkg.name + " v" + pkg.version);
});

//gulp-less
gulp.task('less', function(){
	return gulp.src(ALL_LESS)
		.pipe(less())
		.pipe(gulp.dest(BUILD_DIR+'css/'));
});

//gulp-watch
gulp.task('watcher', function(){
	gulp.watch([ALL_LESS], ['less']);
});