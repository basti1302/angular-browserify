'use strict';

var myApp = require('angular').module('myapp');

myApp.controller('EditTodoCtrl', require('./edit_todo'));
myApp.controller('FooterCtrl', require('./footer'));
myApp.controller('TodoListCtrl', require('./todo_list'));
myApp.controller('ImprintCtrl', require('./imprint'));
