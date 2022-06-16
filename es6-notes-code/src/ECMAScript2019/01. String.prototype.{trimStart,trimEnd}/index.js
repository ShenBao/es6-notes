const str = '   foo    ';
// 正则
console.log(str);
console.log(str.replace(/^\s+/g, '')); // 去掉前面的空格
console.log(str.replace(/\s+$/g, '')); // 去掉后面的空格

console.log(str.length);
console.log(str.trimStart().length);

console.log(str.length);
console.log(str.trimEnd().length);
