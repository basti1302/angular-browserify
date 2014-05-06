'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');

var myApp = angular.module('myapp', [ 'ngRoute' ]);

myApp.constant('VERSION', require('../../package.json').version);

require('./service');
require('./controller');

myApp.config(function($routeProvider) {

  $routeProvider.when('/todos', {
    templateUrl: 'views/todos.html',
  })
  .when('/imprint', {
    templateUrl: 'views/imprint.html',
    controller: 'ImprintCtrl',
  })
  .otherwise({
    redirectTo: '/todos',
  });
});
