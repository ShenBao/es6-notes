const input = {
  a: 1,
  b: 2,
};

const output = {
  ...input,
  c: 3,
};

console.log(output); // {a: 1, b: 2, c: 3}

const input2 = {
  a: 1,
  b: 2,
  c: 3,
};

let {a, ...rest} = input2;

console.log(a, rest); // 1 {b: 2, c: 3}
