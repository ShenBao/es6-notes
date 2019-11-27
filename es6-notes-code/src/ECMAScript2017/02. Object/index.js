// const obj = {
//   name: 'test',
//   web: 'www.test.com',
//   course: 'es',
// };
// console.log(Object.keys(obj));
// const res = Object.keys(obj).map((key) => obj[key]);
// console.log(res);

// let grade = {
//   lilei: 95,
//   hanmei: 97,
//   lisi: 99,
// };

// grade[Symbol.iterator] = function () {
//   let All = this;
//   let keys = Reflect.ownKeys(grade);
//   let values = [];
//   // console.log(All, keys, '内部数据')
//   return {
//     next() {
//       if (!values.length) {
//         if (keys.length - 1) {
//           values.push(All[keys[0]]);
//           keys.shift();
//           // console.log(values, values.length, All[keys[0]], keys, '内部')
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift(),
//       };
//     },
//   };
// };

// let result = [];
// for (let v of grade) {
//   result.push(v);
// }
// console.log(result);

// const obj = {
//   name: 'test',
//   web: 'www.test.com',
//   course: 'es',
// };
// console.log(Object.values(obj));

// let grade = {
//   lilei: 98,
//   hanmei: 87,
// };

// for (let [k, v] of Object.entries(grade)) {
//   console.log(k, v);
//   // lilei 98
//   // hanmei 87
// }

const data = {
  Portland: '78/50',
  Dublin: '88/52',
  Lima: '58/40',
};
Object.defineProperty(data, 'Lima', {
  enumerable: false, // 是否可枚举
  writable: false, // 是否可写
});

Object.entries(data).map(([city, temp]) => {
  console.log(`City: ${city.padEnd(16)} Weather: ${temp}`);
  // City: Portland         Weather: 78/50
  // City: Dublin           Weather: 88/52
});

console.log(Object.getOwnPropertyDescriptor(data, 'Lima'));
console.log(Object.getOwnPropertyDescriptors(data));
