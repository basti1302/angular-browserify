'use strict';

var TodoPage = require('./pages/todo_page');

describe('The todo app (deleting a todo)', function() {

  var ptor;
  var todoPage;

  beforeEach(function() {
    todoPage = new TodoPage();
    todoPage.open();
    ptor = protractor.getInstance();
    // see comment in test/e2e/list_todo_spec.js
    ptor.ignoreSynchronization = true;
  });

  it('should delete a todo', function() {
    todoPage.sidebarItem(2).click();
    todoPage.del();
    expect(todoPage.sidebarItems().count()).toEqual(3);
  });

});
