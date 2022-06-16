let s = new Set([1, 2, 3, 4]);

console.log(s);

s.add('hello');
s.add('goodbye');

console.log(s);

s.add('hello').add('goodbye');

console.log(s);

s.delete('hello');
// s.clear();

console.log(s);

console.log(s.size);

{
  const s = new Set(['hello', 'goodbye']);
  console.log(s.keys()); // SetIterator {"hello", "goodbye"}
  console.log(s.values()); // SetIterator {"hello", "goodbye"}
  console.log(s.entries()); // SetIterator {"hello" => "hello", "goodbye" => "goodbye"}
  s.forEach((item) => {
    console.log(item); // hello // goodbye
  });

  for (let item of s) {
    console.log(item);
  }

  for (let item of s.keys()) {
    console.log(item);
  }

  for (let item of s.values()) {
    console.log(item);
  }

  for (let item of s.entries()) {
    console.log(item[0], item[1]);
  }
}
