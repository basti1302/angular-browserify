'use strict';

var app = require('angular').module('todoApp');

app.controller('EditTodoCtrl', require('./edit_todo'));
app.controller('FooterCtrl', require('./footer'));
app.controller('TodoCtrl', require('./todo'));
app.controller('TodoListCtrl', require('./todo_list'));
app.controller('ImprintCtrl', require('./imprint'));
