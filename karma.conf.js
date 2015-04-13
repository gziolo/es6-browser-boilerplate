module.exports = function(config) {
  config.set({
    autoWatch: false,
    babelPreprocessor: {
      options: {
        modules: 'amd',
        sourceMap: 'inline'
      }
    },
    browsers: ['Firefox'],
    captureTimeout: 60000,
    client: {
      mocha: {
        ui: 'bdd'
      }
    },
    colors: true,
    coverageReporter: {
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        '**/*.js': 'isparta'
      },
      type: 'html'
    },
    files: [
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},

      'test/test-main.js'
    ],
    frameworks: ['mocha', 'requirejs', 'sinon-chai'],
    logLevel: config.LOG_INFO,
    port: 9877,
    preprocessors: {
      'src/**/*.js': ['babel', 'sourcemap', 'coverage'],
      'test/**/*Spec.js': ['babel']
    },
    reporters: ['mocha', 'coverage'],
    singleRun: true
  });
};
