var gulp = require('gulp');
var browserSync = require('browser-sync').create;
var sass = require('gulp-sass');


gulp.task('serve', ['sass'], function() {
    browserSync.init({
server: "./"

    });
    // gulp.watch(['node_modules/bootstrap/scss'])
}); 