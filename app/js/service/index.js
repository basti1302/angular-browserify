'use strict';

var app = require('angular').module('todoApp');

app.service('ImprintService', require('./imprint'));
app.service('TodoService', require('./todos'));
