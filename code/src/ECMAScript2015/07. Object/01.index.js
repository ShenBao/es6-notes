// let name = 'ZhangSan';
// let age = 18;
// let obj = {
//   name: name,
//   age: age,
//   study: function () {
//     console.log(this.name + '正在学习 ES6');
//   },
// };

let name = 'ZhangSan';
let age = 18;
let obj = {
  name,
  age,
  study() {
    console.log(this.name + '正在学习 ES6');
  },
};

// new Object()
let obj1 = {
  name: 'ZhangSan',
  age: 18,
};

// new Object()
let obj2 = {
  name: 'ZhangSan',
  age: 18,
};

console.log(obj1 == obj2); // false
console.log(Object.is(obj1, obj2)); // false

let obj3 = obj1;
console.log(Object.is(obj1, obj3)); // true

console.log(Object.is(2, '2')); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, +0)); // false

const target = {
  a: 1,
  b: 2,
};
const source = {
  b: 4,
  c: 5,
};

const y = {...source};

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

let target1 = {
  a: {
    b: {
      c: 1,
    },
    e: 4,
    f: 5,
    g: 6,
  },
};
let source1 = {
  a: {
    b: {
      c: 1,
    },
    e: 2,
    f: 3,
  },
};
Object.assign(target1, source1);
console.log(target1);

{
  let obj = {
    name: 'ZhangSan',
    age: 18,
    school: 'LanZhou ...',
  };

  for (let key in obj) {
    console.log(key, obj[key]);
  }

  Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
  });

  Object.getOwnPropertyNames(obj).forEach((key) => {
    console.log(key, obj[key]);
  });

  Reflect.ownKeys(obj).forEach((key) => {
    console.log(key, obj[key]);
  });
}
