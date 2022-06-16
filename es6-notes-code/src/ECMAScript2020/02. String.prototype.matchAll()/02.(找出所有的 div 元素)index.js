const str = `
<html>
  <body>
    <div>第一个div</div>
    <p>这是一个p</p>
    <span>span</span>
    <div>第二个div</div>
  <body>
</html>`;

// function selectDiv(regExp, str) {
//   let matches = [];
//   while (true) {
//     // console.log(regExp.lastIndex)
//     const match = regExp.exec(str);
//     // console.log(match)
//     if (match == null) {
//       break;
//     }
//     matches.push(match[1]);
//   }
//   return matches;
// }

// function selectDiv(regExp, str) {
//   let matches = [];
//   str.replace(regExp, (all, first) => {
//     matches.push(first);
//   });
//   return matches;
// }

function selectDiv(regExp, str) {
  let matches = [];
  for (let match of str.matchAll(regExp)) {
    matches.push(match[1]);
  }
  return matches;
}

const regExp = /<div>(.*)<\/div>/g;
const res = selectDiv(regExp, str);
console.log(str);
console.log(res);
