const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
console.log(1);
gulp.task('hello', async() => {
    console.log('hello');
});
gulp.task('first', async(err, doc) => {
    console.log('开始执行gulp任务了，不过必须先下载gulp-cli这个命令行工具才行！');
    gulp.src('./src/css/')
        .pipe(gulp.dest('./dist/css/'));
});
//
gulp.task('htmlmin', async() => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('cssmin', async() => {
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        .pipe(less())
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./dist/css/'));

});
gulp.task('jsmin', async() => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});
gulp.task('copy', async() => {
    gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images/'))
    gulp.src('./src/lib/*')
    .pipe(gulp.dest('./dist/lib'))
})
//这个写法好像有问题
// gulp.task('default', ['htmin', 'cssmin', 'jsmin', 'copy']);
