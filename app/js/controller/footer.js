'use strict';

var angular = require('angular');

angular
  .module('myapp')
  .controller('FooterCtrl',
  function($scope, VERSION) {
  $scope.version = VERSION;
});
