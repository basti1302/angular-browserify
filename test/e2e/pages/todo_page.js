'use strict';

/*
 * Page object for the todo page.
 */
var TodoPage = function() {

  var driver = browser.driver;

  this.title = element(by.css('.current-item'));
  this.dueDate = element(by.binding('todo.due'));
  this.text = element(by.binding('todo.text'));

  this.titleInput = element(by.model('todo.title'));
  this.textInput = element(by.model('todo.text'));

  var sidebarItemsLocator = by.repeater('todo in getTodos()');

  this.editButton = element(by.buttonText('Edit'));
  this.newButton = element(by.buttonText('New'));
  this.deleteButton = element(by.buttonText('Delete'));
  this.cancelButton = element(by.buttonText('Cancel'));
  this.saveButton = element(by.buttonText('Save'));

  this.open = function() {
    browser.get('http://127.0.0.1:8080/#/todos');
  };

  this.sidebarItems = function() {
    return element.all(sidebarItemsLocator);
  };

  this.sidebarItem = function(index) {
    return element(sidebarItemsLocator.row(index).column('title'));
  };

  this.setTitle = function(title) {
    enter(this.titleInput, title);
  };

  this.setText = function(text) {
    enter(this.textInput, text);
  };

  this.edit = function() {
    this.editButton.click();
  };

  this.createNew = function() {
    this.newButton.click();
  };

  this.del = function() {
    this.deleteButton.click();
  };

  this.cancel = function() {
    this.cancelButton.click();
  };

  this.save = function() {
    this.saveButton.click();
  };

  this.isInDisplayMode = function() {
    expect(this.title.isDisplayed()).toEqual(true);
    expect(this.titleInput.isDisplayed()).toEqual(false);
    expect(this.text.isDisplayed()).toEqual(true);
    expect(this.textInput.isDisplayed()).toEqual(false);
    expect(this.editButton.isDisplayed()).toEqual(true);
    expect(this.newButton.isDisplayed()).toEqual(true);
    expect(this.deleteButton.isDisplayed()).toEqual(true);
    expect(this.cancelButton.isDisplayed()).toEqual(false);
    expect(this.saveButton.isDisplayed()).toEqual(false);
  };

  this.isInEditMode = function() {
    expect(this.title.isDisplayed()).toEqual(false);
    expect(this.titleInput.isDisplayed()).toEqual(true);
    expect(this.text.isDisplayed()).toEqual(false);
    expect(this.textInput.isDisplayed()).toEqual(true);
    expect(this.editButton.isDisplayed()).toEqual(false);
    expect(this.newButton.isDisplayed()).toEqual(false);
    expect(this.deleteButton.isDisplayed()).toEqual(false);
    expect(this.cancelButton.isDisplayed()).toEqual(true);
    expect(this.saveButton.isDisplayed()).toEqual(true);
  };

  this.containsText = function(text) {
    checkText(text, function(result) {
      expect(result).toBe(true);
    });
  };

  this.doesNotContainText = function(text) {
    checkText(text, function(result) {
      expect(result).toBe(false);
    });
  };

  function checkText(text, fn) {
    driver
    .isElementPresent({
      xpath: '//*[contains(text(), \'' + text + '\')]'
    }).then(fn);
  }
};

function enter(field, text) {
  field.clear();
  field.sendKeys(text);
}

module.exports = TodoPage;
