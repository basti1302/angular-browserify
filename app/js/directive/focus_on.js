'use strict';

/*
 * Set focus to the element this directive is declared upon when the given
 * expression evaluates to true.
 */

var angular = require('angular');

angular
  .module('myapp')
  .directive('focusOn', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(attrs.focusOn, function(value) {
        console.log('checking focus: ' + value);
        if (value === true) {
          $timeout(function() {
            console.log('forcing focus');
            element[0].focus();
            scope[attrs.focusOn] = false;
          }, 50);
        }
      });
    }
  };
});
