// 对异步自定义数据结构遍历
const obj = {
  count: 0,
  // 生成器
  Gen(time) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({
          done: false,
          value: time,
        });
      }, time);
    });
  },
  // 声明遍历方式,迭代器
  [Symbol.asyncIterator]() {
    let self = this;
    return {
      next() {
        self.count++;
        if (self.count < 4) {
          return self.Gen(Math.random() * 1000);
        } else {
          return Promise.resolve({
            done: true,
            value: '',
          });
        }
      },
    };
  },
};

async function test() {
  for await (let item of obj) {
    console.log(Date.now(), item);
  }
}
test();
