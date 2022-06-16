function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(src); // 状态：fullfilled, 结果： result
    script.onerror = (err) => reject(err); // 状态：rejected,结果： error
    document.head.appendChild(script);
  });
}

// function test(name) {
//   console.log(name);
// }

// loadScript('/static/1.js')
//   .then(loadScript('/static/2.js'))
//   .then(loadScript('/static/3.js'))
//   .then(() => {
//     test('log');
//   });

// loadScript('/static/1.js')
//   .then(
//     () => {
//       return loadScript('/static/2.js');
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then(
//     () => {
//       return loadScript('/static/3.js');
//     },
//     (err) => {
//       console.log(err);
//     }
//   );

// function test() {
//   return new Promise((resolve, reject) => {
//     reject(new Error('es'));
//   });
// }

// test().catch((e) => {
//   console.log(e.message); // es
// });

// loadScript('/static/1.js')
//   .then(() => {
//     return loadScript('/static/2.js');
//   })
//   .then(() => {
//     return loadScript('./30.js');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function test(bool) {
//   if (bool) {
//     return new Promise((resolve) => {
//       resolve(20);
//     });
//   } else {
//     return Promise.reject(new Error('myError'));
//   }
// }
// test(0).then(
//   (value) => {
//     console.log(value);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// var p1 = Promise.resolve(1);
// var p2 = Promise.resolve(2);
// var p3 = Promise.resolve(3);
// Promise.all([p1, p2, p3]).then(function (results) {
//   console.log(results); // [1, 2, 3]
// });

// const p1 = loadScript('/static/1.js');
// const p2 = loadScript('/static/2.js');
// const p3 = loadScript('/static/3.js');
// Promise.all([p2, p1, p3]).then((value) => {
//   console.log(value, 'log');
// });

// var p1 = Promise.resolve(1);
// var p2 = Promise.resolve(2);
// var p3 = Promise.resolve(3);
// Promise.race([p1, p2, p3]).then(function (value) {
//   console.log(value); // 1
// });

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1);
    }, 3000);
  });
};
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2);
    }, 2000);
  });
};
Promise.race([p1(), p2()]).then((value) => {
  console.log(value);
});

const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(111);
      resolve();
    }, 100);
  });
};

const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(222);
      resolve();
    }, 300);
  });
};

const fn3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(333);
      resolve();
    }, 200);
  });
};

const fn4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(444);
      resolve();
    }, 50);
  });
};

// 顺序执行函数
fn1().then(fn2).then(fn3).then(fn4);
