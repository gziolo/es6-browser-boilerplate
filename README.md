ES6 browser boilerplate [![Build Status](https://travis-ci.org/gziolo/es6-browser-boilerplate.png?branch=master)](https://travis-ci.org/gziolo/es6-browser-boilerplate)
============
A boilerplate to write JavaScript code in ES6 and run in the browser now using RequireJS. 

## Features ##
- lints code using [ESLint](http://eslint.org/) with [babel-eslint](https://github.com/babel/babel-eslint) parser 
- allows to write unit tests using [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon.JS](http://sinonjs.org/) and run them with [Karma](http://karma-runner.github.io/) runner
- code coverage reports using [isparta](https://github.com/douglasduteil/isparta)
- [Babel](https://babeljs.io/) transforms ES6 code to ES5 with AMD support using [RequireJS](http://requirejs.org/)

## Requirements ##

- Node 0.12.x or io.js 1.x
- Windows only: remember to set Git and Node path in environment variable %PATH%.
- npm install: run ```npm install```
- grunt-cli: run ```npm install -g grunt-cli``` if needed.
- bower: run ```bower install``` if needed

## Grunt tasks ##

- ```grunt dependencies``` - helps to update package.json file
- ```grunt spec``` - lints the code and runs unit tests 
- ```grunt build``` - lints the code, runs unit tests, creates ```dist/``` folder with transformed ES5 code, copies index.html
- ```grunt``` - runs ```grunt build```

## Useful Links ##

### ES6 ###
- [Traceur](https://github.com/google/traceur-compiler)
- [An ES6 Module Loader polyfill](https://github.com/ModuleLoader/es6-module-loader)
- [Traceur-TodoMVC – a Backbone.js app written with ES6](http://addyosmani.com/blog/traceur-todomvc/)
- [Practical Workflows for ES6 Modules - video by Guy Bedford](https://www.youtube.com/watch?v=0VUjM-jJf2U)
- [Practical Workflows for ES6 Modules - article by Guy Bedford](http://guybedford.com/practical-workflows-for-es6-modules)
- [Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)
- [Classes in ECMAScript 6](http://www.2ality.com/2015/02/es6-classes-final.html)
- [An aggregation of tooling for ES6](https://github.com/addyosmani/es6-tools)
- [Author In ES6, Transpile To ES5 As A Build-step: A Workflow For Grunt](http://addyosmani.com/blog/author-in-es6-transpile-to-es5-as-a-build-step-a-workflow-for-grunt/)
- [Using Grunt & the ES6 Module Transpiler](http://www.thomasboyt.com/2013/06/21/es6-module-transpiler)
- [ES6 modules today with Babel (6TO5)](http://es6rocks.com/2014/10/es6-modules-today-with-6to5/)
- [Lint Like It’s 2015 (babel-eslint)](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)

### Grunt build tasks ###
- [Grunt](http://gruntjs.com/)
- [JSHint](http://www.jshint.com/docs/)
- [Karma](http://karma-runner.github.io/)
- [Mocha](http://visionmedia.github.io/mocha/)
- [ChaiJS online test suite](http://chaijs.com/api/test/)
- [Sinon docs](http://sinonjs.org/docs/)
- [Grunt basics](http://24ways.org/2013/grunt-is-not-weird-and-hard/)
- [How to squeeze the most out of your build configuration](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/)
- [Testing Asynchronous JavaScript](http://martinfowler.com/articles/asyncJS.html)
- [Using r.js to Optimize Your RequireJS Project](http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project)
