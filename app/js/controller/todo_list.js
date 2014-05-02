'use strict';

var angular = require('angular');

angular
  .module('myapp')
  .controller('TodoListCtrl',
  function($scope, TodoService) {

  $scope.getTodos = TodoService.getTodos.bind(TodoService);
  $scope.select = TodoService.select.bind(TodoService);

  $scope.getCssClass = function(todo) {
    if (todo === TodoService.getTodo()) {
      return ['sidebar-item-active'];
    } else {
      return [];
    }
  };

});
