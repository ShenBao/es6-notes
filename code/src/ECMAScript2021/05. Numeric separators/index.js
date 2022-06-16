let budget = 1_000_000_000_000;
console.log(budget === 10 ** 12); // true

let nibbles = 0b1010_0001_1000_0101;
console.log(!!(nibbles & (1 << 7))); // true

let message = 0xa0_b0_c0;

let a = (message >> 16) & 0xff;
console.log(a.toString(16), a); // a0, 160

let b = (message >> 8) & 0xff;
console.log(b.toString(16), b); // b0, 176

let c = message & 0xff;
console.log(c.toString(16), b); // c0, 192

