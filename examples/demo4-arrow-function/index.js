
let arrow = a => a;
let arrow1 = (a, b) => a + b;
let arrow2 = b => {
  console.log(b * 2);
}
let arrow3 = (a = 0, b) => {
  console.log(a + b);
}

// var arr = [1, 2, 3];
//
// let todoApp = todo => console.log(todo);
//
// for (var i = 0; i < arr.length; i++) {
//   todoApp(arr[i]);
// }
