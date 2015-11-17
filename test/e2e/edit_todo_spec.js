'use strict';

var TodoPage = require('./pages/todo_page');

describe('The todo app (editing)', function() {

  var todoPage;

  beforeEach(function() {
    todoPage = new TodoPage();
    todoPage.open();
    // see comment in test/e2e/list_todo_spec.js
    browser.ignoreSynchronization = true;
  });

  it('should be intially not in edit-mode', function() {
    todoPage.isInDisplayMode();
  });

  it('should switch to edit-mode', function() {
    todoPage.edit();
    todoPage.isInEditMode();
  });

  it('should edit and cancel', function() {
    todoPage.sidebarItem(1).click();
    todoPage.edit();
    todoPage.setTitle('changed title');
    todoPage.setText('changed text');
    todoPage.cancel();
    todoPage.isInDisplayMode();
    expect(todoPage.title.getText()).toEqual('Write blog post');
    expect(todoPage.text.getText()).toEqual('Write a blog post about how to ' +
      'integrate AngularJS and Browserify for http://angularjs.de/');
    expect(todoPage.sidebarItem(1).getText()).toEqual('Write blog post');
  });

  it('should edit and save', function() {
    todoPage.sidebarItem(1).click();
    todoPage.edit();
    todoPage.setTitle('changed title');
    todoPage.setText('changed text');
    todoPage.save();
    todoPage.isInDisplayMode();
    expect(todoPage.title.getText()).toEqual('changed title');
    expect(todoPage.text.getText()).toEqual('changed text');
    expect(todoPage.sidebarItem(1).getText()).toEqual('changed title');
  });

});
