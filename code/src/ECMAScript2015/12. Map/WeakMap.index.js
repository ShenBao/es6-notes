const wm1 = new WeakMap();
const key = {
  foo: 1,
};
wm1.set(key, 2);
console.log(wm1.get(key));
console.log(wm1);

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([
  [k1, 'foo'],
  [k2, 'bar'],
]);
console.log(wm2.get(k2));
console.log(wm2);
