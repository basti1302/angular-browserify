'use strict';

var myApp = require('angular').module('myapp');

myApp.service('ImprintService', require('./imprint'));
myApp.service('TodoService', require('./todos'));
