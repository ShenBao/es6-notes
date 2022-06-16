function createIterator(items) {
  var i = 0;
  return {
    next: function () {
      var done = i >= items.length;
      var value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value,
      };
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}

var iterator = createIterator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
