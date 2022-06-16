const str = `
<html>
  <body>
    <div>第一个div</div>
    <p>这是一个p</p>
    <span>span</span>
    <div>第二个div</div>
  <body>
</html>`;

function selectDiv(regExp, str) {
  let matches = [];
  while (true) {
    // console.log(regExp.lastIndex)
    const match = regExp.exec(str);
    // console.log(match)
    if (match == null) {
      break;
    }
    matches.push(match[1]);
  }
  return matches;
}
const regExp = /<div>(.*)<\/div>/g;
const res = selectDiv(regExp, str);
console.log(str);
console.log(res);

function collectGroup1(regExp, str) {
  const matches = [];
  while (true) {
    const match = regExp.exec(str);
    if (match === null) break;
    // Add capture of group 1 to `matches`
    matches.push(match[1]);
  }
  return matches;
}

const res2 = collectGroup1(/"([^"]*)"/g, `"foo" and "bar" and "baz"`);
console.log(res2);
// ["foo", "bar", "baz"]


let re = /[abc]/;
console.log(re.exec('abc'));
// ["a", index: 0, input: "abc", groups: undefined]
console.log(re.exec('abc'));
// ["a", index: 0, input: "abc", groups: undefined]

console.log('abeabd'.match(/(a)b(?=e)/g)); // ["ab"]
