// function timeout() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve(); // resolve('success')
//     }, 1000);
//   });
// }

// // 不加 async 和 await 是2、1   加了是1、2
// async function foo() {
//   await timeout(); // let res = await timeout() res 是 success
//   console.log(2);
// }
// foo();

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('success')
      reject('error');
    }, 1000);
  });
}
async function foo() {
  return await timeout();
}
foo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
