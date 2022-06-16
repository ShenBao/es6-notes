const map = new Map();
let keyObj = {};
let keyFunc = function () {};
let keyString = 'a string';

// 添加键
map.set(keyString, "和键'a string'关联的值");
map.set(keyObj, '和键keyObj关联的值');
map.set(keyFunc, '和键keyFunc关联的值');

console.log(map);

console.log(map.size);

console.log(map.has(keyObj));

console.log(map.get(keyObj));

map.forEach((value, key) => {
  console.log(value, key);
});

for (let [key, value] of map) {
  console.log(key, value);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let [key, value] of map.entries()) {
  console.log(key, value);
}
