const gulp = require ('gulp');
const sass = require ('gulp-sass') (require('sass'));
const { watch } = require('gulp');



  function buildStyles() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  }

  function controlaSass() {
    watch('./scss/**/*.scss', buildStyles);
  }

  exports.compila = buildStyles;
  exports.vetlla = controlaSass;