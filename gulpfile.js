/**
 * Created by root on 10/7/16.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function(){
    gulp.src('')
        .pipe(webserver({
            port: 9113,
            livereload: {port: 35633, enable: true},
            host: '0.0.0.0',
            fallback: 'index.html'//,
            //proxies: [{
            //    source: '/api',
            //    target: 'http://localhost:8801'
            //}]
        }));
});


gulp.task('sass', function() {
    return gulp.src(['scss/*.scss'])
        .pipe(sass({includePaths: 'node_modules/bootstrap-material-design/bower_components/bootstrap-sass/assets/stylesheets'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});


gulp.task('watch', function(){
    gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch', 'webserver'], function() {});

