const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-html', () => {
	return gulp.src('index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('build'));
});

gulp.task('minify-js', () => {
	return gulp.src('script.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});

gulp.task('minify-css', () => {
	return gulp.src('style.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('build'));
})

gulp.task('build', gulp.parallel('minify-html', 'minify-css', 'minify-js'));

gulp.task('watch', () => {
	gulp.watch('index.html', gulp.series('minify-html'));
	gulp.watch('style.css', gulp.series('minify-css'));
	gulp.watch('script.js', gulp.series('minify-js'));
});

gulp.task('default', gulp.series('build', 'watch'));