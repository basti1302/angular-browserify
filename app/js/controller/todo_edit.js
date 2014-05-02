'use strict';

var angular = require('angular');

angular
  .module('myapp')
  .controller('TodoEditCtrl',
  function($scope, TodoService) {

  var backupForCancel;

  $scope.editMode = false;

  $scope.getTodo = TodoService.getTodo.bind(TodoService);

  $scope.new = function() {
    TodoService.create();
    $scope.editMode = true;
  };

  $scope.edit = function() {
    backupForCancel = angular.copy(TodoService.getTodo());
    $scope.editMode = true;
  };

  $scope.save = function() {
    $scope.editMode = false;
    backupForCancel = null;
  };

  $scope.cancel = function() {
    if (backupForCancel) {
      var t = TodoService.getTodo();
      t.title = backupForCancel.title;
      t.due = backupForCancel.due;
      t.text = backupForCancel.text;
    } else {
      // currently creating a new item
      TodoService.undoCreate();
    }
    $scope.editMode = false;
  };

});
