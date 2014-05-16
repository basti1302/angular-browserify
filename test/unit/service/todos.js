'use strict';

var chai = require('chai')
  , expect = chai.expect;

var TodoServiceModule = require('../../../app/js/service/todos.js');

describe('The TodoService', function() {

  var TodoService;

  beforeEach(function() {
    TodoService = new TodoServiceModule();
  });

  it('should have some todos initially', function() {
    var todos = TodoService.getTodos();
    expect(todos.length).to.equal(4);
    expect(todos[0].title).to.equal('Buy milk');
  });

  it('should create a todo', function() {
    var todo = TodoService.create();
    expect(todo.title).to.exist;
    expect(todo.title).to.be.equal('');
    expect(todo.due).to.exist;
    expect(todo.text).to.exist;
    expect(todo.text).to.exist;
  });

  it('should insert a todo', function() {
    TodoService.insert({ title: 'test' });
    var todos = TodoService.getTodos();
    expect(todos.length).to.equal(5);
    expect(todos[4].title).to.equal('test');
  });

  it('should remove a todo, based on object identity', function() {
    TodoService.remove(TodoService.getTodos()[2]);
    var todos = TodoService.getTodos();
    expect(todos.length).to.equal(3);
    expect(todos[1].title).to.equal('Write blog post');
    expect(todos[2].title).to.equal('World Domination');
  });

});
