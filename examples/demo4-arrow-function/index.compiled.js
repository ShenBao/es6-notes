"use strict";

var arrow = function arrow(a) {
  return a;
};
var arrow1 = function arrow1(a, b) {
  return a + b;
};
var arrow2 = function arrow2(b) {
  console.log(b * 2);
};
var arrow3 = function arrow3() {
  var a = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var b = arguments[1];

  console.log(a + b);
};

// var arr = [1, 2, 3];
//
// let todoApp = todo => console.log(todo);
//
// for (var i = 0; i < arr.length; i++) {
//   todoApp(arr[i]);
// }