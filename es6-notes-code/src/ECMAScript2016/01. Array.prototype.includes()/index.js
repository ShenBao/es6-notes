const arr = ['es6', 'es7', 'es8'];

console.log(arr.includes('es6')); // true
console.log(arr.includes('es9')); // false

console.log(arr.includes('es7', 1)); // true
console.log(arr.includes('es7', 2)); // false
console.log(arr.includes('es7', -1)); // false
console.log(arr.includes('es7', -2)); // true

console.log([('a', 'b', 'c')].includes('a')); //true
console.log([('a', 'b', 'c')].indexOf('a') > -1); //true

console.log(arr.indexOf('es7')); // 1
console.log(arr.indexOf('es7') > -1); // true
