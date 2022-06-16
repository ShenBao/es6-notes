// function* draw(first = 1, second = 3, third = 5) {
//   let firstPrize = [
//     '1A',
//     '1B',
//     '1C',
//     '1D',
//     '1E',
//     '1F',
//     '1G',
//     '1H',
//     '1I',
//     '1J',
//     '1K',
//     '1L',
//     '1M',
//     '1N',
//   ]; // 满足1000积分的名单
//   let secondPrize = [
//     '2O',
//     '2P',
//     '2Q',
//     '2R',
//     '2S',
//     '2T',
//     '2U',
//     '2V',
//     '2W',
//     '2X',
//     '2Y',
//     '2Z',
//   ]; // 满足500积分的名单
//   let thirdPrize = ['31', '32', '33', '34', '35', '36', '37', '38', '39']; // 满足50积分的名单
//   let count = 0;
//   let random;
//   while (1) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrize.length);
//       yield firstPrize[random];
//       count++;
//       firstPrize.splice(random, 1);
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrize.length);
//       yield secondPrize[random];
//       count++;
//       secondPrize.splice(random, 1);
//     } else if (count < first + second + third) {
//       random = Math.floor(Math.random() * thirdPrize.length);
//       yield thirdPrize[random];
//       count++;
//       thirdPrize.splice(random, 1);
//     } else {
//       return false;
//     }
//   }
// }
// let t = draw();
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);

// es 5 版本
function draw(first = 1, second = 3, third = 5) {
  let firstPrize = [
    '1A',
    '1B',
    '1C',
    '1D',
    '1E',
    '1F',
    '1G',
    '1H',
    '1I',
    '1J',
    '1K',
    '1L',
    '1M',
    '1N',
  ]; // 满足1000积分的名单
  let secondPrize = [
    '2O',
    '2P',
    '2Q',
    '2R',
    '2S',
    '2T',
    '2U',
    '2V',
    '2W',
    '2X',
    '2Y',
    '2Z',
  ]; // 满足500积分的名单
  let thirdPrize = ['31', '32', '33', '34', '35', '36', '37', '38', '39']; // 满足50积分的名单
  let result = [];
  let random;
  // 抽一等奖
  for (let i = 0; i < first; i++) {
    random = Math.floor(Math.random() * firstPrize.length);
    result = result.concat(firstPrize.splice(random, 1));
  }
  // 抽二等奖
  for (let i = 0; i < second; i++) {
    random = Math.floor(Math.random() * secondPrize.length);
    result = result.concat(secondPrize.splice(random, 1));
  }
  // 抽三等奖
  for (let i = 0; i < third; i++) {
    random = Math.floor(Math.random() * thirdPrize.length);
    result = result.concat(thirdPrize.splice(random, 1));
  }
  return result;
}

let t = draw();
for (let value of t) {
  console.log(value);
}
