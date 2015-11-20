'use strict';

var chai = require('chai')
  , expect = chai.expect
  , sinon = require('sinon')
  , sinonChai = require('sinon-chai');

chai.use(sinonChai);

var EditTodoCtrlModule = require('../../../app/js/controller/edit_todo.js');

describe('The EditTodoCtrl\'s', function() {

  var todo;
  var $scope;
  var TodoService;

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

    TodoService = {
      getTodos: sinon.stub().returns([{}]),
      create: sinon.spy(),
      insert: sinon.spy(),
      remove: sinon.spy(),
    };

    EditTodoCtrlModule($scope, TodoService);
  });

  describe('create workflow', function() {

    it('should create an new todo', function() {
      $scope.create();
      expect(TodoService.create).to.have.been.calledOnce;
      expect($scope.editMode).to.be.true;
    });

    it('should save a new todo', function() {
      $scope.create();
      $scope.save();
      expect(TodoService.insert).to.have.been.calledOnce;
      expect($scope.editMode).to.be.false;
    });

    it('should cancel the creation of a new todo', function() {
      $scope.create();
      $scope.cancel();
      expect(TodoService.insert).to.not.have.been.called;
      expect($scope.editMode).to.be.false;
    });
  });

  describe('edit workflow', function() {

    it('should edit a todo', function() {
      $scope.edit();
      expect($scope.editMode).to.be.true;
    });

    it('should save an edited todo', function() {
      $scope.edit();
      $scope.save();
      expect(TodoService.insert).to.not.have.been.called;
      expect($scope.editMode).to.be.false;
    });

    it('should cancel the editing of an existing todo', function() {
      $scope.edit();
      $scope.$parent.todo.title = 'changed';
      $scope.cancel();
      expect(TodoService.insert).to.not.have.been.called;
      expect($scope.$parent.todo.title).to.equal('Todo');
      expect($scope.editMode).to.be.false;
    });
  });

  it('should remove a todo item', function() {
    var t = $scope.$parent.todo;
    $scope.remove();
    expect(TodoService.remove).to.have.been.calledWith(t);
  });

});
