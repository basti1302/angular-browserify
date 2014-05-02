'use strict';

var angular = require('angular');

angular
  .module('myapp')
  .service('TodoService', function() {

  var todos = [{
    title: 'Buy milk',
    due: createDate(0, 0, 0, 18, 0),
    text: 'We are out of milk and coffee without milk is just unbearable.',
  }, {
    title: 'Write blog post',
    due: createDate(0, 0, 1, 14, 0),
    text: 'Write a blog post about how to integrate AngularJS and Browserify ' +
      'for http://angularjs.de/',
  }, {
    title: 'Finish talk proposal',
    due: createDate(0, 0, 7, 23, 30),
    text: 'Finalize the talk proposal for FoobarConf. Call for papers ' +
      'deadline is on Tuesday.',
  }, {
    title: 'World Domination',
    due: createDate(5, 0, 0, 12, 0),
    text: 'Because, who wouldn\'t want that?',
  }];

  var todo = todos[0];

  this.getTodos = function() {
    return todos;
  };

  this.select = function(_todo) {
    todo = _todo;
  };

  this.getTodo = function() {
    return todo;
  };

  this.create = function() {
    todo = {
      title: '',
      due: createDate(0, 0, 1, 12, 0),
      text: '',
    };
    todos.push(todo);
  };

  this.undoCreate = function() {
    todos.pop();
    todo = todos[0];
  };

  function createDate(year, month, day, hour, minute) {
    var now = new Date();
    return new Date(
      now.getFullYear() + year,
      now.getMonth() + month,
      now.getDate() + day,
      hour, minute, 0, 0
    );
  }
});
