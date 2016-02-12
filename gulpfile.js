
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var config ={
    port: '3005',
    paths:{
        js: './*.js',
        dist: './dist',
        appJs: './app.js',
        tests: './tests/*.js'
    }
};

gulp.task('nodemon', function() {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env:{
            PORT: config.port
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function() {
            console.log('Restarting');
        });
});

gulp.task('default', ['nodemon']);