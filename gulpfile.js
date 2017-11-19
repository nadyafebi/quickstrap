const bootstrap = require('bootstrap/package.json');
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
  var bootstrapSrc = "./node_modules" + bootstrap._location + "/scss";
  return gulp.src('./sass/**/*.scss')
            .pipe(sass({includePaths: [bootstrapSrc]}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});
