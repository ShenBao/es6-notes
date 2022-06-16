{
  let arr = [1, 2, 3, 4, 2, 3];
  let s = new Set(arr);
  console.log(s);
}

{
  let arr1 = [1, 2, 3, 4];
  let arr2 = [2, 3, 4, 5, 6];
  let s = new Set([...arr1, ...arr2]);
  console.log(s);
  console.log([...s]);
  console.log(Array.from(s));
}

{
  let arr1 = [1, 2, 3, 4];
  let arr2 = [2, 3, 4, 5, 6];
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  let result = new Set(arr1.filter((item) => s2.has(item)));
  console.log(Array.from(result));
}

{
  let arr1 = [1, 2, 3, 4];
  let arr2 = [2, 3, 4, 5, 6];
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  let arr3 = new Set(arr1.filter((item) => !s2.has(item)));
  let arr4 = new Set(arr2.filter((item) => !s1.has(item)));
  console.log(arr3);
  console.log(arr4);
  console.log([...arr3, ...arr4]);
}
