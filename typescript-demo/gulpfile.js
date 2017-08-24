var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    nodemon = require('gulp-nodemon') //For node/server
    ;

gulp.task('default', ['compile'], function () {
    gulp.watch('src/**/*', ['compile']);
});

gulp.task('compile', function () {
    gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true, //Warn on expressions and declarations with an implied 'any' type.
            outFile: 'all.js'
        }))
        .pipe(gulp.dest('dev'));
});

/* gulp.task('start', function () {
    var stream = nodemon({
        script: 'dev/all.js', //script to be served/run?
        ext: 'ts',
        env: {
            'NODE_ENV': 'development'
        },
        tasks: ['compile']
    });

    stream
        .on('restart', function () {
            console.log('restarted!')
        })
        .on('crash', function () {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10) // restart the server in 10 seconds 
        })
}) */