"use strict";

// rest
function restFunc(a) {
  console.log(a);

  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  console.log(rest);
}
restFunc(1);
restFunc(1, 2, 3, 4);