// function foo(x, y) {
//   y = y || 'world';
//   console.log(x, y);
// }
// foo('hello', 'es6');
// foo('hello', 0);

// function foo(x, y = 'world') {
//   console.log(x, y);
// }
// foo('hello', 0);

// function f(x, y = 7, z = 42) {
//   return x + y + z;
// }
// console.log(f(1, undefined, 43)); // 51

// function f(x, y = 7, z = x + y) {
//   return z * 0.5;
// }

// console.log(f(1, 7)); // 4

// function test(a, b = 1, c) {
//   console.log(arguments.length);
// }
// test('a', 'b'); // 2

// function test(a, b = 1, c) {
//   console.log(test.length);
// }
// test('a', 'b'); // 1

// function test(a = 2, b = 1, c) {
//   console.log(test.length);
// }
// test('a', 'b'); // 0

// function sum() {
//   let num = 0;
//   // Array.prototype.forEach.call(arguments, function (item) {
//   //     num += item * 1
//   // })
//   Array.from(arguments).forEach(function (item) {
//     num += item * 1;
//   });
//   return num;
// }
// console.log(sum(1, 2, 3, 4));

// function sum(...nums) {
//   let num = 0;
//   nums.forEach(function (item) {
//     num += item * 1;
//   });
//   return num;
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(1, 2, 3, 4)); // 10

// function sum(x = 1, y = 2, z = 3) {
//   return x + y + z;
// }

// console.log(sum.apply(null, [4])); // 9
// console.log(sum.apply(null, [4, 5])); // 12
// console.log(sum.apply(null, [4, 5, 6])); // 15

// function sum(x = 1, y = 2, z = 3) {
//   return x + y + z;
// }

// console.log(sum(...[4])); // 9
// console.log(sum(...[4, 5])); // 12
// console.log(sum(...[4, 5, 6])); // 15

let hello = (name, city) => {
  console.log(name, 'hello', city);
};
hello('zhangsan', 'beiJing');

// let hi = (name) => {
//   console.log(name);
// };
// hi('zhangsan');

// let sum = (x, y, z) => x + y + z;
// console.log(sum(1, 2, 3));

// let sum2 = (x, y, z) => ({
//   x: x,
//   y: y,
//   z: z,
// });
// console.log(sum2(1, 2, 3));

// let test = {
//   name: 'test',
//   say: () => {
//     console.log(this.name);
//   },
// };
// test.say();

// let test = {
//   name: 'test',
//   say: function () {
//     console.log(this.name);
//   },
// };

// console.log(test.say()); // test


