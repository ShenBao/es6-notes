// 导入函数
import {say as s, run as r} from './index.js';

s('hello world');
r();

// 导出函数
export function say(content) {
  console.log(content);
  run();
}

export function run() {
  console.log('I am running');
}
