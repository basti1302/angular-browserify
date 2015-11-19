'use strict';

module.exports = function() {

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

  this.getTodos = function() {
    return todos;
  };

  this.create = function() {
    return {
      title: '',
      due: createDate(0, 0, 1, 12, 0),
      text: '',
    };
  };

  this.insert = function(todo) {
    todos.push(todo);
  };

  this.remove = function(todo) {
    todos = todos.filter(function(t) { return t !== todo; });
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

};
