const bootstrap = require('bootstrap/package.json');
const gulp = require('gulp');
const panini = require('panini');
const sass = require('gulp-sass');

gulp.task('default', gulp.series(gulp.parallel(pages, style), watch));

function pages() {
  return gulp.src('./panini/pages/**/*.html')
             .pipe(panini({
               root: './panini/pages/',
               layouts: './panini/layouts/',
               partials: './panini/partials',
               helpers: './panini/helpers',
               data: './panini/data'
             }))
             .pipe(gulp.dest('.'));
}

function style() {
  var bootstrapSrc = "./node_modules" + bootstrap._location + "/scss";
  return gulp.src('./sass/**/*.scss')
            .pipe(sass({includePaths: [bootstrapSrc]}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
}

function resetPages(done) {
  panini.refresh();
  done();
}

function watch() {
  gulp.watch('./panini/pages/**/*.html').on('all', gulp.series(pages));
  gulp.watch('./panini/{layouts, partials}/**/*.html').on('all', gulp.series(resetPages, pages));
  gulp.watch('./sass/**/*.scss').on('all', gulp.series(style));
}
