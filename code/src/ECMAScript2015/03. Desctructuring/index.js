let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

console.log(a, b, c); // ["a", "b", "c"]
console.log(one, two, three); // 1, 2, 3

let user = {};
[user.firstName, user.secondName] = 'Kobe Bryant'.split(' ');

console.log(user.firstName, user.secondName); // Kobe Bryant

let userInfo = {
  name: 'ZhangSan',
  age: 18,
};

// loop over keys-and-values
for (let [key, value] of Object.entries(userInfo)) {
  console.log(`${key}:${value}`);
}
// name:ZhangSan
// age:18

let userMap = new Map();
userMap.set('name', 'ZhangSan');
userMap.set('age', '18');

for (let [key, value] of userMap.entries()) {
  console.log(`${key}:${value}`);
}
// name:ZhangSan
// age:18

let [name, , title] = ['John', 'Jim', 'Sun', 'Moon'];

console.log(title); // Sun

let [name1, name2, ...rest] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

console.log(name1); // Julius
console.log(name2); // Caesar

// Note that type of `rest` is Array.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

{
  let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];

  console.log(name); // Julius (from array)
  console.log(surname); // Anonymous (default used)
}

{
  let options = {
    title: 'Menu',
    width: 100,
    height: 200,
  };

  let {title, width, height} = options;

  console.log(title); // Menu
  console.log(width); // 100
  console.log(height); // 200
}

{
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ['Cake', 'Donut'],
    extra: true, // something extra that we will not destruct
  };

  // destructuring assignment on multiple lines for clarity
  let {
    size: {
      // put size here
      width,
      height,
    },
    items: [item1, item2], // assign items here
    title = 'Menu', // not present in the object (default value is used)
  } = options;

  console.log(title); // Menu
  console.log(width); // 100
  console.log(height); // 200
  console.log(item1); // Cake
  console.log(item2); // Donut
}

{
  let [a, b, c, d, e] = 'test123';
  console.log(a, b, c, d, e);
  // t e s t 1

  let {0: zero, 1: one, 4: four} = 'test123';
  console.log(zero, one, four);

  let {length: len} = 'test123';
  console.log(len);
}
