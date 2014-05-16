'use strict';

var chai = require('chai')
  , expect = chai.expect;

var TodoListCtrlModule = require('../../../app/js/controller/todo_list.js');

describe('The TodoListCtrl', function() {

  var todo;
  var $scope;

  beforeEach(function() {
    todo = {
      title: 'Todo',
      due: '2015-02-13',
      text: 'Do it',
    };

    $scope = {
      $parent: {
        todo: todo
      }
    };

    var TodoService = {
      getTodos: function() {},
    };

    TodoListCtrlModule($scope, TodoService);
  });

  it('should highlight the active todo item', function() {
    var styles = $scope.getCssClass(todo);
    expect(styles).to.be.instanceof(Array);
    expect(styles.length).to.equal(1);
    expect(styles[0]).to.equal('sidebar-item-active');
  });

  it('should not highlight an inactive todo item', function() {
    var styles = $scope.getCssClass({});
    expect(styles).to.be.instanceof(Array);
    expect(styles.length).to.equal(1);
    expect(styles[0]).to.equal('sidebar-item-inactive');
  });

});
