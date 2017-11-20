// Load node modules.
const bootstrap = require('bootstrap/package.json');
const browser = require('browser-sync');
const gulp = require('gulp');
const panini = require('panini');
const rimraf = require('rimraf');
const sass = require('gulp-sass');

// Run this using 'gulp clean'.
gulp.task('clean', gulp.series(clean));

// Run this using 'gulp build'.
gulp.task('build', gulp.series('clean', gulp.parallel(pages, style)));

// Run this using 'gulp'.
gulp.task('default', gulp.series('build', serve, watch));

// Compile HTML pages using Panini.
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

// Compile CSS files using SASS.
function style() {
  var bootstrapSrc = "./node_modules" + bootstrap._location + "/scss";
  return gulp.src('./sass/**/*.scss')
            .pipe(sass({includePaths: [bootstrapSrc]}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
}

// Refresh Panini when layout/partials is added/changed.
function resetPages(done) {
  panini.refresh();
  done();
}

// Remove HTML and CSS files from project folder.
function clean(done) {
  rimraf('./css', function() {});
  rimraf('./*.html', function () {});
  done();
}

// Serve website using Browsersync.
function serve(done) {
  browser.init({
    server: './',
    port: 8000
  });
  done();
}

// Watch any changes in the project folders and take appropriate actions.
function watch() {
  gulp.watch('./panini/pages/**/*.html').on('all', gulp.series(pages, browser.reload));
  gulp.watch('./panini/{layouts, partials}/**/*.html').on('all', gulp.series(resetPages, pages, browser.reload));
  gulp.watch('./sass/**/*.scss').on('all', gulp.series(style, browser.reload));
}
