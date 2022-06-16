console.log('\u0061');

console.log('\uD842\uDFB7');

console.log('\u20BB7');

console.log('\u{20BB7}');

for (let item of 'test') {
  console.log(item);
}

console.log(String.fromCharCode(0x20bb7)); // ஷ , 识别不了

console.log(String.fromCodePoint(0x20bb7)); //  𠮷

const str = 'test';

console.log(str.indexOf('es'));

console.log(str.includes('es'));

console.log(str.startsWith('te'));

console.log(str.endsWith('st'));

const newStr = str.repeat(10);

console.log(newStr);

