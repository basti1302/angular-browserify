'use strict';

var TodoPage = require('./pages/todo_page');

describe('The todo app (creating a new todo)', function() {

  var todoPage;

  beforeEach(function() {
    todoPage = new TodoPage();
    todoPage.open();
    // see comment in test/e2e/list_todo_spec.js
    browser.ignoreSynchronization = true;
  });

  it('should switch to edit-mode when creating a new todo', function() {
    todoPage.createNew();
    todoPage.isInEditMode();
  });

  it('should start with an empty todo', function() {
    todoPage.createNew();
    expect(todoPage.titleInput.getText()).toEqual('');
    expect(todoPage.textInput.getText()).toEqual('');
  });

  it('should create a new todo and cancel', function() {
    todoPage.createNew();
    todoPage.setTitle('new title');
    todoPage.setText('new text');
    todoPage.cancel();
    todoPage.isInDisplayMode();
    expect(todoPage.sidebarItems().count()).toEqual(4);
    todoPage.doesNotContainText('new title');
    todoPage.doesNotContainText('new text');
  });

  it('should create a new todo and save', function() {
    todoPage.createNew();
    todoPage.setTitle('new title');
    todoPage.setText('new text');
    todoPage.save();
    todoPage.isInDisplayMode();
    expect(todoPage.sidebarItems().count()).toEqual(5);
    expect(todoPage.sidebarItem(4).getText()).toEqual('new title');
    expect(todoPage.title.getText()).toEqual('new title');
    expect(todoPage.text.getText()).toEqual('new text');
  });

});
