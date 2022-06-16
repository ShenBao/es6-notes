console.log(/foo.bar/.test('foo\nbar')); // false
console.log(/foo.bar/s.test('foo\nbar')); // true

console.log(/foo[^]bar/.test('foo\nbar')); // true
// or
console.log(/foo[\s\S]bar/.test('foo\nbar')); // true

// const re = /foo.bar/s; // Or, `const re = new RegExp('foo.bar', 's');`.
// console.log(re.test('foo\nbar')); // true
// console.log(re.dotAll); // true
// console.log(re.flags);

const re = /foo.bar/gisu;
console.log(re.dotAll);
// 查看修饰符
console.log(re.flags);


console.log('2019-06-07'.match(/(\d{4})-(\d{2})-(\d{2})/));


// let t = '2019-05-01'.match(/(\d{4})-(\d{2})-(\d{2})/);
// console.log(t[1]); // 2019
// console.log(t[2]); // 05
// console.log(t[3]); // 01

// console.log('2019-05-01'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/));

let t = '2019-05-01'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
// ["2019-05-01", "2019", "05", "01", index: 0, input: "2019-05-01", groups: {…}]
console.log(t.groups.year); // 2019
console.log(t.groups.month); // 05
console.log(t.groups.day); // 01


let test = 'world hello';
console.log(test.match(/(?<=world\s)hello/));

console.log(test.match(/hello(?=\sworld)/));
// 后行断言
console.log(test.match(/(?<=hello\s)world/));


