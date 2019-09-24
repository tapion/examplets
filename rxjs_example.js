"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var observable = rxjs_1.interval(1000);
var observable2 = observable.pipe(operators_1.map(function (x) { return Math.random(); }));
var subscription = observable2.subscribe(function (x) { return console.log(x); });
setTimeout(function () { subscription.unsubscribe(); }, 4000);
