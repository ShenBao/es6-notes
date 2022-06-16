let arr = [1, 2, 3, 2, 4];

{
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

{
  //   arr.forEach(function (elem, index, array) {
  //     if (arr[i] == 2) {
  //       continue; // 报错
  //     }
  //     console.log(elem, index);
  //   });
}

{
  arr.forEach(function (i) {
    if (i === 2) {
      return;
    } else {
      console.log(i);
    }
  });
}

{
  let result = arr.map(function (value) {
    value += 1;
    console.log(value);
    return value;
  });
  console.log(arr, result);
}

{
  let result = arr.filter(function (value) {
    console.log(value);
    return value == 2;
  });
  console.log(arr, result);
}

{
  let result = arr.some(function (value) {
    console.log(value);
    return value == 4;
  });
  console.log(arr, result);
}

{
  let result = arr.every(function (value) {
    console.log(value);
    return value == 2;
  });
  console.log(arr, result);
}

{
  let sum = arr.reduce(function (prev, cur, index, array) {
    return prev + cur;
  }, 0);
  console.log(sum);
}

{
  let max = arr.reduce(function (prev, cur) {
    return Math.max(prev, cur);
  });
  console.log(max);
}

{
  let res = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) == -1 && prev.push(cur);
    return prev;
  }, []);
  console.log(res);
}

{
  for (var index in arr) {
    console.log(arr[index]);
  }
}

{
  for (let val of arr) {
    console.log(val);
  }
}

{
  console.log('for ... of');
  for (let item of arr) {
    console.log(item);
  }

  for (let item of arr.values()) {
    console.log(item);
  }

  for (let item of arr.keys()) {
    console.log(item);
  }

  for (let [index, item] of arr.entries()) {
    console.log(index, item);
  }
}

{
  let array = [5, 12, 8, 130, 44];

  let found = array.find(function (element) {
    return element > 10;
  });

  console.log(found);
}

{
  let array = [5, 12, 8, 130, 44];

  let found = array.findIndex(function (element) {
    return element > 10;
  });

  console.log(found);
}

console.log('---- indexOf:');

let arrs = [1, 2, undefined, null, NaN];

var rf = arrs.find((v)=> {
  return v === NaN;
})

console.log(rf);

var rfi = arrs.findIndex((v)=> {
  return v === NaN;
})

console.log(rfi);

console.log(arrs.includes(NaN));


