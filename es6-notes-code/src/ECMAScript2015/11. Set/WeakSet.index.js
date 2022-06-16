let ws = new WeakSet();
const obj1 = {
  name: 'test',
};
const obj2 = {
  age: 5,
};
ws.add(obj1);
ws.add(obj2);
ws.delete(obj1);
ws.add(obj2);
console.log(ws);
console.log(ws.has(obj2));
