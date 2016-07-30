var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('build.css'))
        .pipe(gulp.dest('./src/css/'));

});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/sass/**/*.scss',['styles']);
});
