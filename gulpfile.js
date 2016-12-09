'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
gulp.task('css', () => {
  gulp
  .src('assets/scss/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers: [
      'last 1 version',
    ]}),
  ]))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
});

const ts = require('gulp-typescript');
const typescript = require('typescript');
const project = ts.createProject('./tsconfig.json', { typescript });
gulp.task('ts', () => {
  project
  .src()
  .pipe(plumber())
  .pipe(project())
  .pipe(gulp.dest('assets/js/'));
});

const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const header = require('gulp-header');
const pkg = require('./package.json');
gulp.task('wp', () => {
  gulp
  .src([
    'assets/js/index.js',
  ])
  .pipe(plumber())
  .pipe(gulpWebpack({
    output: {
      filename: 'app.js',
    },
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') }}),
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            comments: false,
            compact: true,
          },
        },
      ],
    },
  }, webpack))
  .pipe(header(`/**
 * <%= pkg.name %> v<%= pkg.version %>
 *
 */
`, { pkg }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({ server: { baseDir: './' } });
  gulp.watch(['assets/scss/**/*.scss'], ['css']);
  gulp.watch(['assets/ts/**/*.{ts,tsx}'], ['js']);
});

gulp.task('js', (cb) => runSequence('ts', 'wp', cb));

gulp.task('build', ['js', 'css']);

gulp.task('default', ['build']);
