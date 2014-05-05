'use strict';

var angular = require('angular');

module.exports = function($scope, TodoService, $rootScope) {

  var backupForCancel;
  var creatingNew = false;

  $scope.todo = TodoService.getTodos()[0];
  $scope.editMode = false;

  $scope.getTodo = function() {
    return $scope.todo;
  };

  $scope.create = function() {
    $scope.todo = TodoService.create();
    backupForCancel = null;
    creatingNew = true;
    $scope.editMode = true;
    $rootScope.$emit('set-active-todo', null);
  };

  $scope.edit = function() {
    backupForCancel = angular.copy($scope.todo);
    creatingNew = false;
    $scope.editMode = true;
  };

  $scope.save = function() {
    if (creatingNew) {
      TodoService.insert($scope.todo);
    }
    $scope.editMode = false;
    creatingNew = false;
    backupForCancel = null;
    $rootScope.$emit('set-active-todo', $scope.todo);
  };

  $scope.cancel = function() {
    if (!creatingNew) {
      // rollback edits
      $scope.todo.title = backupForCancel.title;
      $scope.todo.due = backupForCancel.due;
      $scope.todo.text = backupForCancel.text;
    }
    creatingNew = false;
    $scope.editMode = false;
    $rootScope.$emit('set-active-todo', $scope.todo);
  };

  $rootScope.$on('select-active-todo', function(evnt, todo) {
    if (!$scope.editMode) {
      $scope.todo = todo;
    }
  });

};
