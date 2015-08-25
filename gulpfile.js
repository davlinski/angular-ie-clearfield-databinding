var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');


function uglifyTask() {
    return gulp.src('dist/**/*.js')
        .pipe(concat('anguar-ie-clearfield-databinding.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}

function annotateTask() {
    return gulp.src([
        'src/**/module.js',
        'src/**/*.js'])
        .pipe(concat('anguar-ie-clearfield-databinding.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist'));
}

function cleanTask(cb) {
    del('dist/', cb);
}

//function postBuildCleanTask(){
//    del('build/', cb);
//}

gulp.task('default', gulp.series(cleanTask, annotateTask, uglifyTask));