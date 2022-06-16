const a = {duration: 50, title: ''};

console.log(JSON.stringify(a, null, 4));

a.duration ||= 10;
console.log(a.duration);

console.log(JSON.stringify(a, null, 4));

a.title ||= 'title is empty.';
console.log(a.title);

console.log(JSON.stringify(a, null, 4));
