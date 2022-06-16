{
  const a = 5; // 101
  console.log(a.toString(2));

  const b = 101;
  console.log(parseInt(b, 2));
}

{
  const a = 0b0101;
  console.log(a);

  const b = 0o777;
  console.log(b);
}

{
  console.log('Number.isFinite');
  console.log(Number.isFinite(15));
  console.log(Number.isFinite(0.8));
  console.log(Number.isFinite(NaN));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite(-Infinity));
  console.log(Number.isFinite('foo'));
  console.log(Number.isFinite('15'));
  console.log(Number.isFinite(true));
}

{
  console.log('Number.isNaN');
  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(15));
  console.log(Number.isNaN('15'));
  console.log(Number.isNaN(true));
  console.log(Number.isNaN(9 / NaN));
  console.log(Number.isNaN('true' / 0));
  console.log(Number.isNaN('true' / 'true'));
}

// ES5的写法
parseInt('12.34'); // 12

// ES6的写法
Number.parseInt('12.34'); // 12

// ES5的写法
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseFloat('123.45#'); // 123.45

console.log(Math.pow(2, 53));

console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);

{
  console.log('Math.trunc');
  console.log(Math.trunc(5.5));
  console.log(Math.trunc(-5.5));
  console.log(Math.trunc(true)); // 1
  console.log(Math.trunc(false)); // 0
  console.log(Math.trunc(NaN)); // NaN
  console.log(Math.trunc(undefined)); // NaN
  console.log(Math.trunc()); // NaN

  console.log(Number.parseInt(5.5));
  console.log(Number.parseInt(-5.5));
  console.log(Number.parseInt(true)); // NaN
}

{
  console.log('Math.sign');
  console.log(Math.sign(5)); // 1
  console.log(Math.sign(-5)); // -1
  console.log(Math.sign(0)); // 0
  console.log(Math.sign(NaN)); // NaN
  console.log(Math.sign(true)); // 1
  console.log(Math.sign(false)); // 0
}

{
  console.log('Math.cbrt');
  console.log(Math.cbrt(8)); // 2
  console.log(Math.cbrt('test')); // NaN
}
