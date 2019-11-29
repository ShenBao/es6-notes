
console.log(2 ** 53); // es7 幂运算符
console.log(Number.MAX_SAFE_INTEGER); // 最大值-1

const bigInt = 9007199254740993n;
console.log(bigInt); // 9007199254740993n
console.log(typeof bigInt); // bigint

console.log(1n == 1); // true
console.log(1n === 1); // false

const bigIntNum = BigInt(9007199254740993n);
console.log(bigIntNum);

