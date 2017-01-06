'use strict';

// 数组的解构赋值
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

// 对象的解构赋值
var { name, age } = { name: "guoyongfeng", age: 18 };
console.log(foo);
console.log(bar );

// 字符串的解构赋值
const [a, b, c, d, e] = 'hello';
console.log(a + b + c + d + e); // 'hello'
