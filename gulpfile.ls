env-override = (json) ->
  for key of json when process.env[key]?
    json[key] = that
  json

require! fs
require-json = -> JSON.parse fs.readFileSync it, \utf-8
config = env-override require-json('./app/config.jsenv')

paths =
  pub: '_public'
  index: 'app/*.jade'
  template: 'app/partials/**/*.jade'
  assets: 'app/assets/**'
  js-vendor: 'vendor/scripts/*.js'
  js-env: 'app/*.jsenv'
  ls-app: 'app/**/*.ls'
  js-app: 'app/**/*.js'
  css-vendor: 'vendor/styles/*.css'
  stylus: 'app/styles/*.styl'

require! <[gulp gulp-util gulp-concat gulp-livescript gulp-livereload streamqueue gulp-karma path gulp-if]>
gutil = gulp-util
{protractor, webdriver_update} = require 'gulp-protractor'

livereload-server = require(\tiny-lr)!
livereload = -> gulp-livereload livereload-server

production = true if gutil.env.env is \production

var http-server

gulp.task \httpServer ->
  require! express
  port = 3333
  app = express!
  app.use require('connect-livereload')!
  app.use express.static path.resolve paths.pub
  app.all '/**' (req, res, next) ->
    res.sendfile __dirname + '/_public/index.html'
  http-server := require \http .create-server app
  http-server.listen port, ->
    gutil.log "Running on " + gutil.colors.bold.inverse "http://localhost:#port"

gulp.task 'build' <[assets template fonts:vendor images:vendor js:app js:vendor css]>
gulp.task 'dev' <[build httpServer]> ->
  port = 35729
  livereload-server.listen port, -> gutil.log it if it
  gulp.watch paths.index, <[index]>
  gulp.watch paths.template, <[template]>
  gulp.watch paths.assets, <[assets]>
  gulp.watch [paths.js-env, paths.ls-app, paths.js-app] <[js:app]>
  gulp.watch paths.stylus, <[css]>

gulp.task 'webdriver_update' webdriver_update

gulp.task 'protractor' <[webdriver_update httpServer]> ->
  gulp.src ["./test/e2e/app/*.ls"]
    .pipe protractor configFile: "./test/protractor.conf.ls"
    .on 'error' ->
      throw it

gulp.task 'test:e2e' <[protractor]> ->
  http-server.close!

gulp.task 'protractor:sauce' <[webdriver_update build httpServer]> ->
  args =
    '--selenium-address'
    ''
    '--sauce-user'
    process.env.SAUCE_USERNAME
    '--sauce-key'
    process.env.SAUCE_ACCESS_KEY
    '--capabilities.build'
    process.env.TRAVIS_BUILD_NUMBER
  if process.env.TRAVIS_JOB_NUMBER
    #args['capabilities.tunnel-identifier'] = that
    args.push '--capabilities.tunnel-identifier'
    args.push that

  gulp.src ["./test/e2e/app/*.ls"]
    .pipe protractor do
      configFile: "./test/protractor.conf.ls"
      args: args
    .on 'error' ->
      throw it

gulp.task 'test:sauce' <[protractor:sauce]> ->
  http-server.close!

gulp.task 'test:unit' <[build]> ->
  gulp.start 'test:karma'

gulp.task 'test:karma' ->
  gulp.src [
    * "test/lib/testlib.js"
    * "_public/js/vendor.js"
    * "_public/js/app.templates.js"
    * "_public/js/app.js"
    * "bower_components/angular-mocks/angular-mocks.js"
    * "test/unit/**/*.spec.ls"
  ]
  .pipe gulp-karma do
    config-file: 'test/karma.conf.ls'
    action: 'run'
    browsers: <[PhantomJS]>
  .on 'error' ->
    console.log it
    throw it

require! <[gulp-json-editor gulp-insert gulp-commonjs gulp-uglify]>
gulp.task 'js:app' ->
  env = gulp.src paths.js-env
    .pipe gulp-json-editor env-override
    .pipe gulp-insert.prepend 'module.exports = '
    .pipe gulp-commonjs!

  app = gulp.src paths.ls-app
    .pipe gulp-livescript({+bare}).on \error gutil.log

  s = streamqueue { +objectMode }
    .done env, app, gulp.src paths.js-app
    .pipe gulp-concat 'app.js'
    .pipe gulp-if production, gulp-uglify!
    .pipe gulp.dest "#{paths.pub}/js"

require! <[gulp-filter bower main-bower-files gulp-stylus gulp-csso gulp-flatten]>
gulp.task 'bower' ->
  bower.commands.install!on \end (results) ->
    for pkg, data of results
      gutil.log do
        gutil.colors.magenta data.pkgMeta.name
        gutil.colors.cyan data.pkgMeta.version
        "installed"

gulp.task 'fonts:vendor' <[bower]> ->
  gulp.src main-bower-files!
    .pipe gulp-filter <[**/*.eof **/*.ttf **/*.svg **/*.woff]>
    .pipe gulp-flatten!
    .pipe gulp.dest "#{paths.pub}/fonts"

gulp.task 'images:vendor' <[bower]> ->
  gulp.src main-bower-files!
    .pipe gulp-filter <[**/*.jpg **/*.jpeg **/*.png **/*.gif]>
    .pipe gulp-flatten!
    .pipe gulp.dest "#{paths.pub}/images"

gulp.task 'js:vendor' <[bower]> ->
  bower = gulp.src main-bower-files!
    .pipe gulp-filter <[**/*.js !**/*.min.js]>

  s = streamqueue { +objectMode }
    .done bower, gulp.src paths.js-vendor
    .pipe gulp-concat 'vendor.js'
    .pipe gulp-if production, gulp-uglify!
    .pipe gulp.dest "#{paths.pub}/js"
    .pipe livereload!

gulp.task 'css' <[bower]> ->
  vendor = gulp.src paths.css-vendor

  bower = gulp.src main-bower-files!
    .pipe gulp-filter <[**/*.css !**/*.min.css]>

  bower-styl = gulp.src main-bower-files!
    .pipe gulp-filter (.path is /\.styl$/)
    .pipe gulp-stylus use: <[nib]>

  styl = gulp.src paths.stylus
    .pipe gulp-filter (.path isnt /\/_[^/]+\.styl$/) # isnt files for including
    .pipe gulp-stylus use: <[nib]>

  s = streamqueue { +objectMode }
    .done vendor, bower, bower-styl, styl
    .pipe gulp-concat 'app.css'
    .pipe gulp-if production, gulp-csso!
    .pipe gulp.dest "#{paths.pub}/css"
    .pipe livereload!

require! <[gulp-angular-templatecache gulp-jade]>

gulp.task 'index' ->
  pretty = yes if gutil.env.env isnt 'production'
  gulp.src paths.index
    .pipe gulp-jade do
      pretty: pretty
      locals:
        googleAnalytics: config.GA_ID
        domainName: config.DOMAIN_NAME
    .pipe gulp.dest "#{paths.pub}"
    .pipe livereload!

gulp.task 'template' <[index]> ->
  gulp.src paths.template
    .pipe gulp-jade!
    .pipe gulp-angular-templatecache 'app.templates.js' do
      base: "#{process.cwd!}/app"
      filename: 'app.templates.js'
      module: 'app.templates'
      standalone: true
    .pipe gulp.dest "#{paths.pub}/js"
    .pipe livereload!

gulp.task 'assets' ->
  gulp.src paths.assets
    .pipe gulp.dest paths.pub

gulp.task 'default' <[build]>

require! <[gulp-replace]>

gulp.task 'replace', ->
  gulp.src 'templates/deploy'
    .pipe gulp-replace /GITHUB_ACCOUNT/, config.GITHUB_ACCOUNT
    .pipe gulp.dest '.'

  gulp.src 'templates/app.ls'
    .pipe gulp-replace /HACKFOLDR_ID/, config.HACKFOLDR_ID
    .pipe gulp.dest 'app'

  gulp.src 'templates/controllers.ls'
    .pipe gulp-replace /HACKFOLDR_ID/, config.HACKFOLDR_ID
    .pipe gulp.dest 'app/app'

  gulp.src 'templates/CNAME'
    .pipe gulp-replace /DOMAIN_NAME/, config.DOMAIN_NAME
    .pipe gulp.dest 'app/assets'
