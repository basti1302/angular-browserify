'use strict';

module.exports = function($scope, TodoService) {

  var backupForCancel;
  var creatingNew = false;

  $scope.editMode = false;

  $scope.create = function() {
    $scope.$parent.todo = TodoService.create();
    backupForCancel = null;
    creatingNew = true;
    $scope.editMode = true;
  };

  $scope.edit = function() {
    if ($scope.editMode) {
      return;
    }
    backupForCancel = copy($scope.$parent.todo);
    creatingNew = false;
    $scope.editMode = true;
  };

  $scope.save = function() {
    if (creatingNew) {
      TodoService.insert($scope.$parent.todo);
    }
    $scope.editMode = false;
    creatingNew = false;
    backupForCancel = null;
  };

  $scope.cancel = function() {
    if (!creatingNew) {
      // rollback edits
      $scope.$parent.todo.title = backupForCancel.title;
      $scope.$parent.todo.due = backupForCancel.due;
      $scope.$parent.todo.text = backupForCancel.text;
    } else {
      // discard new todo, set active todo to some arbitrary todo
      $scope.$parent.todo = TodoService.getTodos()[0];
      creatingNew = false;
    }
    $scope.editMode = false;
  };

  $scope.remove = function() {
    TodoService.remove($scope.$parent.todo);
    // set active todo to some arbitrary todo
    $scope.$parent.todo = TodoService.getTodos()[0];
  };

  function copy(todo) {
    return {
      title: todo.title,
      due: todo.due,
      text: todo.text,
    };
  }
};
