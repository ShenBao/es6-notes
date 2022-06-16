// 用 Generator 实现一个斐波那契数列 1,1,2,3,5,8,13...
function* fibonacci() {
  let n1 = 1;
  yield n1;
  let n2 = 1;
  yield n2;
  let n3 = 0;
  while (true) {
    yield (n3 = n1 + n2);
    n1 = n2;
    n2 = n3;
  }
}
let d = fibonacci();
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);
// console.log(d.next().value);

for (let index = 0; index < 30; index++) {
  console.log(d.next().value);
}
