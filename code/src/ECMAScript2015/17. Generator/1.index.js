// function* gen() {
//   let val;
//   val = yield 1;
//   console.log(`1:${val}`); // 1:undefined
//   val = yield 2;
//   console.log(`2:${val}`); // 2:undefined
//   val = yield 3;
//   console.log(`3:${val}`); // 3:undefined
// }

// var g = gen();

// console.log(g.next()); // {value: 1, done: false}
// console.log(g.next()); // {value: 2, done: false}
// console.log(g.next()); // {value: 3, done: false}
// console.log(g.next()); // {value: undefined, done: true}

// function* gen () {
// let val
// val = (yield [3, 4, 5]) + 8;
// console.log(val);
// }
// var g = gen();
// console.log(g.next(10))
// console.log(g.next(20))

function* gen() {
  var val = 100;
  while (true) {
    console.log(`before ${val}`);
    val = yield val;
    console.log(`return ${val}`);
  }
}

var g = gen();
console.log(g.next(20).value);
// before 100
// 100
console.log(g.next(30).value);
// return 30
// before 30
// 30
console.log(g.next(40).value);
// return 40
// before 40
// 40
