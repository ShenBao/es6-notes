const name = Symbol('My name is ZhangSan');
console.log(name.toString());
console.log(name);
console.log(name === 'Symbol(My name is ZhangSan)');
console.log(name.toString() === 'Symbol(My name is ZhangSan)');

console.log(name.description);
console.log(name.description === 'My name is ZhangSan');
