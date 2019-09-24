"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var observable = rxjs_1.interval(1000).pipe(operators_1.map(function (x) { return Math.random(); }));
var s1 = observable.subscribe(function (x) { return console.log("[obs1]:" + x); });
var s2 = observable.subscribe(function (x) { return console.log("[obs2]:" + x); });
setTimeout(function () {
    s1.unsubscribe();
    s2.unsubscribe();
}, 4000);
