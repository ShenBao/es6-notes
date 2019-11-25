// 检查类型
let checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1);
};

let deepClone = (target) => {
  let targetType = checkType(target);
  let result;
  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = [];
  } else {
    return target;
  }
  for (let i in target) {
    let value = target[i];
    let valueType = checkType(value);
    if (valueType === 'Object' || valueType === 'Array') {
      result[i] = deepClone(value); // 递归
    } else {
      result[i] = value;
    }
  }
  return result;
};

let arr1 = [1, 2, {age: 18}];
let arr2 = deepClone(arr1);
arr2[2].age = 20;
console.log(arr1);
console.log(arr2);

let obj1 = {
  name: 'ZhangSan',
  hobby: ['coding', 'eating'],
};
let obj2 = deepClone(obj1);
obj2.hobby[0] = 'sleeping';
console.log(obj1);
console.log(obj2);
