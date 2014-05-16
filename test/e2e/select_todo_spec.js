'use strict';

var TodoPage = require('./pages/todo_page');

describe('The todo app', function() {

  var ptor;
  var todoPage;

  beforeEach(function() {
    todoPage = new TodoPage();
    todoPage.open();
    ptor = protractor.getInstance();
    // see comment in test/e2e/list_todo_spec.js
    ptor.ignoreSynchronization = true;
  });

  it('should select a different todo from the sidebar', function() {
    todoPage.sidebarItem(1).click();
    expect(todoPage.title.getText()).toEqual('Write blog post');
    expect(todoPage.text.getText()).toEqual('Write a blog post about how to ' +
      'integrate AngularJS and Browserify for http://angularjs.de/');
  });
});
