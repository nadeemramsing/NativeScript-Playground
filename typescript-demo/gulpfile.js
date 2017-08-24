var gulp = require('gulp'),
    ts = require('gulp-typescript');

gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true, //Warn on expressions and declarations with an implied 'any' type.
            outFile: 'all.js'
        }))
        .pipe(gulp.dest('dev'));
});