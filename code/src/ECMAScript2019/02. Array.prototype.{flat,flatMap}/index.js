const numbers = [1, 2, [3, 4, [5, 6]]];
console.log(numbers.flat());

console.log(numbers.flat(2));

{
  const numbers = [1, 2, 3];
  console.log(numbers.map((x) => [x * 2]));
  console.log(numbers.flatMap((x) => [x * 2]));
}

{
  let arr = ['今天天气不错', '', '早上好'];
  console.log(arr.map((s) => s.split('')));
  console.log(arr.flatMap((s) => s.split('')));
}
