const foo = (a, b, c, d) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
};
// foo(1, 2, 3, 4)
const name = 'ZhangSan';
const age = 18;
foo`这是${name},他的年龄是${age}岁`;

function tag(strs) {
  console.log(strs);
  // strs[0] === undefined
  // strs.raw[0] === "\\unicode and \\u{55}"
}

// 在标签函数中使用
tag`\u{61} and \u{62}`; //
tag`\u{61} and \unicode`; // 结果是 undefined
