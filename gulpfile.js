const bootstrap = require('bootstrap/package.json');
const gulp = require('gulp');
const panini = require('panini');
const sass = require('gulp-sass');

gulp.task('default', ['sass', 'panini']);

gulp.task('sass', function() {
  var bootstrapSrc = "./node_modules" + bootstrap._location + "/scss";
  return gulp.src('./sass/**/*.scss')
            .pipe(sass({includePaths: [bootstrapSrc]}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

gulp.task('panini', function () {
  gulp.src('./panini/pages/**/*.html')
      .pipe(panini({
        root: './panini/pages/',
        layouts: './panini/layouts/',
        partials: './panini/partials',
        helpers: './panini/helpers',
        data: './panini/data'
      }))
      .pipe(gulp.dest('.'));
});
