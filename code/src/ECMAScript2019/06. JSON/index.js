eval('var str="test";\u2029 function foo(){return str;}');
console.log(foo());

console.log(JSON.stringify('\u{D800}') === '"\\ud800"');; // true

console.log(JSON.stringify('\uD83D\uDE0E')); // 笑脸

console.log(JSON.stringify('\uD83D')); // "\ud83d"

