var args = ["a", "b", "c"];
console.log(...args); // "a" "b" "c"

function testSpread(name, age, others){
  console.log(name);
  console.log(age);
  console.log(others);
}

testSpread('you name', 18, 1, 2, 3);
