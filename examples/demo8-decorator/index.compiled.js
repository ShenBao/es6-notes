"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testable(target) {
  target.isTestable = true;
}

var MyTestableClass = testable(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class;

console.log(MyTestableClass.isTestable); // true