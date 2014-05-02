'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-animate');

angular.module('myapp', [
  'ngAnimate',
]).constant('VERSION', require('../../package.json').version);

require('./service');
require('./directive');
require('./controller');
