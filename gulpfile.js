/* eslint-disable require-jsdoc */
'use strict';

const {task, src, watch, series} = require('gulp'),
      del = require('del'),
      cache = require('gulp-cache'),
      webpack = require('webpack'),
      webpackDev = require('./webpack.dev.js'),
      webpackProd = require('./webpack.prod.js'),
      browserSync = require('browser-sync').create(),
      eslint = require('gulp-eslint');


function lintJs() {
  return src(['src/**/index.js', 'gulpfile.js', 'webpack.*.js'])
    .pipe(eslint({
      warnFileIgnored: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function build() {
  return new Promise((resolve, reject) => {
    const webpackConfig =
      process.env.NODE_ENV === 'prod' ? webpackProd : webpackDev;
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')));
      }
      resolve();
    });
  });
}

function watchFiles() {
  return watch(
    [
      'src/**/*.js',
      'src/**/*.css',
      'src/**/*.html'
    ], {
      ignoreInitial: true
    },
    series('lint-js', 'build', reload)
  );
}

function serve(done) {
  browserSync.init({
    server: './demos',
    port: 8080,
    host: '0.0.0.0'
  }, done());
}

function reload(done) {
  browserSync.reload(done());
}

function cleanDist(done) {
  return del.sync('dist', done());
}

function cleanDemos(done) {
  return del.sync('demos', done());
}

function cleanCache(done) {
  return cache.clearAll(done);
}

task('clean:cache', cleanCache);
task('clean:dist', cleanDist);
task('clean:demos', cleanDemos);

task('lint-js', lintJs);
task('serve-only', serve);
task('build', build);
task('build:fresh', series('clean:cache', 'clean:demos', 'build'));
task('dev', series('lint-js', 'clean:demos', 'build', serve, watchFiles));
task('dev:no-lint', series('clean:demos', 'build', serve, watchFiles));