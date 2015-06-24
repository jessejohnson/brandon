//task runner vars
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var pkg = require('./package.json');

// constants
var ALL_LESS = './src/less/*.less';
var ALL_CSS = './src/css/*.css';
var CSS_CONCAT_ORDER = [
	'./src/css/html5reset.css', 
	'./src/css/grid.css', 
	'./src/css/col.css',
	'./src/css/main.css'
	]
;

//default task for gulp prints name and version
gulp.task('default', function(){
	console.log("Gulp default task for " + pkg.name + " v" + pkg.version);
});

//gulp-less compiles all .less files in the less directory
//and outputs them to the css directory
gulp.task('less', function(){
	return gulp.src(ALL_LESS)
		.pipe(less())
		.pipe(gulp.dest('./src/css/'));
});

gulp.task('css-concat', function(){
	return gulp.src(CSS_CONCAT_ORDER)
		.pipe(concat('brandon.css'))
		.pipe(gulp.dest('./dist/css/'));
})

//gulp-watch
gulp.task('watcher', function(){
	gulp.watch([ALL_LESS, ALL_CSS, 'gulpfile.js'], ['less', 'css-concat']);
});