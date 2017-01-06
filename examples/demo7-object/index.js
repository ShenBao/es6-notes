var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); 

//
// let func1 = {
//   sayHi(){
//     return 'hi'
//   }
// }
//
// let func2 = {
//   party(){
//     return 'BJNodeParty'
//   }
// }
//
// let Today = {
//   __proto__: func2,
//   goParty(){
//     return super.party() + 'together';
//   }
// }
//
// console.log(Today.party());
// console.log(Object.getPrototyOf('Today') === func2);
//
// Object.is(NaN, NaN);
// Object.is(1, 2);
//
//
// let aa = Object.assign(
//   {},
//   { a: 'a' },
//   { n: 'b' }
// )
//
// console.log(aa);
//
// const x = 'x';
// const y = 'y';
//
// let bb = {
//   x,
//   y,
//   eat(){
//     console.log(this.a);
//   }
// }
//
// console.log( bb );
