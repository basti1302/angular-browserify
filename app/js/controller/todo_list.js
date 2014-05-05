'use strict';

var angular = require('angular');

module.exports = function($scope, TodoService, $rootScope) {

  $scope.activeTodo = TodoService.getTodos()[0];

  $scope.getTodos = TodoService.getTodos.bind(TodoService);

  $scope.select = function(todo) {
    $scope.activeTodo = todo;
    $rootScope.$emit('select-active-todo', todo);
  };

  $rootScope.$on('set-active-todo', function(evnt, todo) {
    $scope.activeTodo = todo;
  });

  $scope.getCssClass = function(todo) {
    if (todo === $scope.activeTodo) {
      return ['sidebar-item-active'];
    } else {
      return [];
    }
  };

};
