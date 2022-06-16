new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
    // reject('fail')
  }, 1000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
