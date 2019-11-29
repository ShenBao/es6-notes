// const obj = Object.fromEntries([
//   ['foo', 1],
//   ['bar', 2],
// ]);

// console.log(obj);

// const obj = {
//   name: 'test',
//   course: 'es',
// };
// const entries = Object.entries(obj);
// console.log(entries);

// const fromEntries = Object.fromEntries(entries);
// console.log(fromEntries);

const map = new Map();
map.set('name', 'test');
map.set('course', 'es');
console.log(map);

const obj = Object.fromEntries(map);
console.log(obj);

const course = {
  math: 80,
  english: 85,
  chinese: 90,
};
const res = Object.entries(course).filter(([key, val]) => val > 80);
console.log(res);
console.log(Object.fromEntries(res));
