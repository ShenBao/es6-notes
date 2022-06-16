// function collectGroup1(regExp, str) {
//   const matches = [];
//   function replacementFunc(all, first) {
//     matches.push(first);
//   }
//   str.replace(regExp, replacementFunc);
//   return matches;
// }

// const res = collectGroup1(/"([^"]*)"/gu, `"foo" and "bar" and "baz"`);
// console.log(res);
// ["foo", "bar", "baz"]

function collectGroup1(regExp, str) {
  let results = [];
  for (const match of str.matchAll(regExp)) {
    results.push(match[1]);
  }
  return results;
}

const res = collectGroup1(/"([^"]*)"/g, `"foo" and "bar" and "baz"`);
console.log(res);
