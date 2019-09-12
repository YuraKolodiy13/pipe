const gulp         = require("gulp");
const postcss      = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sass         = require("gulp-sass");
const minifycss    = require("gulp-minify-css");
const browserify   = require("browserify");
const uglify       = require("gulp-uglify");
const tap          = require("gulp-tap");
const buffer       = require("gulp-buffer");
const plumber      = require("gulp-plumber");
// const basePath     = "./wp-content/themes/echoua/";
const scssSrcPath  = `src/**/*.scss`;
const jsSrcPath    = `src/**/*.js`;
const ignore1      = `!src/_lib/**/*`;
const ignore2      = `!src/**/index.js`;
const ignore3      = `!src/_global.js`;
const buildPath    = "dist";

gulp.task("styles", function () {
  return gulp.src(scssSrcPath)
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( postcss([ autoprefixer() ]) )
    .pipe( minifycss() )
    .pipe( gulp.dest(buildPath) );
});

gulp.task("scripts", function () {
  return gulp.src([jsSrcPath, ignore1, ignore2, ignore3], {read: false})
    .pipe(tap(function (file) {
      file.contents = browserify(file.path, {debug: true})
        .transform("babelify", {presets: ["@babel/preset-env"]})
        .bundle()
        .on("error", function (err) {
          // eslint-disable-next-line no-console
          console.log(err.toString());
        });
    }))
    .pipe( buffer() )
    .pipe( uglify() )
    .pipe( gulp.dest(buildPath) );
});

gulp.task("watch", function () {
  gulp.watch(scssSrcPath, gulp.series("styles"));
  gulp.watch(jsSrcPath, gulp.series("scripts"));
});

gulp.task("default", gulp.parallel("styles", "scripts"));
