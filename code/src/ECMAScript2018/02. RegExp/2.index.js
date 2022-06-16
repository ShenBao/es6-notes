const re = /(?<=\$)foo/;
let str = '$foo %foo foo';
// console.log(re.test(str))
str = str.replace(re, 'bar');
console.log(str);

const re2 = /(?<=\$)\d/;
let str2 = '$1 is worth about ￥123';
str2 = str2.match(re2);
console.log(str2);
