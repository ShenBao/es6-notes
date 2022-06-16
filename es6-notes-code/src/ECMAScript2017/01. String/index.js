
const str = 'test';
console.log(str.padStart(8, 'x'));
console.log(str.padEnd(8, 'y'));
console.log(str.padStart(8));

const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
console.log(year, month, day);
console.log(`${year}-${month}-${day}`);

const tel = '13012345678';
const newTel = tel.slice(-4).padStart(tel.length, '*');
console.log(newTel); // *******5678

const str1 = 'I am learning es';
console.log(str1.padEnd(30, '.'));

const str2 = '200';
console.log(str2.padEnd(5));
// "200  "
