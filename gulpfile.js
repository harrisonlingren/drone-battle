var gulp = require("gulp");

var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task("default", function () {
  return gulp.src(['src/js/vendor/jquery/dist/jquery.js', 'src/js/app/components/*.js', 'src/js/app/app.js'])
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build"));
});
