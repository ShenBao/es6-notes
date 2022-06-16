function* count(x = 1) {
  while (true) {
    if (x % 7 === 0) {
      yield x;
    }
    x++;
  }
}
// es5中就是个死循环 因为es5的循环需要有个终止值，但我们这个需求没有终止，一直在数数
let n = count();
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
