{
  let s1 = Symbol();
  let s2 = Symbol();
  console.log(s1);
  console.log(s2);
  console.log(s1 === s2); // false
}

{
  let s1 = Symbol('foo');
  let s2 = Symbol('foo');
  console.log(s1);
  console.log(s2);
  console.log(s1 === s2); // false
}

{
  const obj = {
    name: 'test',
    toString() {
      return this.name;
    },
  };
  let s = Symbol(obj);
  console.log(s);
}

{
  let s1 = Symbol.for('foo');
  let s2 = Symbol.for('foo');
  console.log(s1 === s2); // true
}

{
  const s1 = Symbol('foo');
  console.log(Symbol.keyFor(s1)); // undefined

  const s2 = Symbol.for('foo');
  console.log(Symbol.keyFor(s2)); // foo
}

{
  const stu1 = Symbol('李四');
  const stu2 = Symbol('李四');
  const grade = {
    [stu1]: {
      address: 'yyy',
      tel: '222',
    },
    [stu2]: {
      address: 'zzz',
      tel: '333',
    },
  };
  console.log(grade);
  console.log(grade[stu1]);
  console.log(grade[stu2]);
}

{
  console.log('属性遍历：');
  const sym = Symbol('test');
  class User {
    constructor(name) {
      this.name = name;
      this[sym] = 'test.com';
    }
    getName() {
      return this.name + this[sym];
    }
  }
  const user = new User('ZhangSan');
  console.log(user.getName());

  for (let key in user) {
    console.log(key);
  }

  for (let key of Object.keys(user)) {
    console.log(key);
  }

  for (let key of Object.getOwnPropertySymbols(user)) {
    console.log(key);
  }

  for (let key of Reflect.ownKeys(user)) {
    console.log(key);
  }
}
