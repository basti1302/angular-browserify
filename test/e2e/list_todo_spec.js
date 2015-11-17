'use strict';

var TodoPage = require('./pages/todo_page');

describe('The todo app', function() {

  var todoPage;

  beforeEach(function() {
    todoPage = new TodoPage();
    todoPage.open();

    // Um, this is not good. Not sure why it is needed :-(
    // Without it, we get an "Error while waiting for Protractor to sync with
    // the page: {}". There are several issues on GitHub describing that but
    // no solution, only workarounds like setting ignoreSynchronization = true
    // or waiting a bit at the start of the test.
    browser.ignoreSynchronization = true;
  });

  it('should list several todos items', function() {
    expect(todoPage.sidebarItem(0).getText()).toEqual('Buy milk');
    expect(todoPage.sidebarItem(1).getText()).toEqual('Write blog post');
    expect(todoPage.sidebarItem(2).getText()).toEqual(
      'Finish talk proposal');
    expect(todoPage.sidebarItem(3).getText()).toEqual('World Domination');
  });

  it('should show details for the first todo item', function() {
    expect(todoPage.title.getText()).toEqual('Buy milk');
    expect(todoPage.text.getText()).toEqual('We are out of milk and coffee ' +
      'without milk is just unbearable.');
  });
});
