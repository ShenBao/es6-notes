// Promise.all([
//   Promise.reject({
//     code: 500,
//     msg: '服务异常',
//   }),
//   Promise.resolve({
//     code: 200,
//     data: ['1', '2', '3'],
//   }),
//   Promise.resolve({
//     code: 200,
//     data: ['4', '5', '6'],
//   }),
// ])
//   .then((res) => {
//     console.log(res);
//     console.log('成功');
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log('失败');
//   });

Promise.allSettled([
  Promise.reject({
    code: 500,
    msg: '服务异常',
  }),
  Promise.resolve({
    code: 200,
    data: ['1', '2', '3'],
  }),
  Promise.resolve({
    code: 200,
    data: ['4', '5', '6'],
  }),
])
  .then((res) => {
    console.log('成功');
    console.log(res);
    const data = res.filter((item) => item.status === 'fulfilled');
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
    console.log('失败');
  });
