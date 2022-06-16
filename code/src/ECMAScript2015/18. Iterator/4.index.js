let authors = {
  allAuthors: {
    fiction: ['Agatha Christie', 'J. K. Rowling', 'Dr. Seuss'],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein',
    ],
    fantasy: ['J. R. R. Tolkien', 'J. K. Rowling', 'Terry Pratchett'],
  },
};

authors[Symbol.iterator] = function* () {
  let allAuthors = this.allAuthors;
  let keys = Reflect.ownKeys(allAuthors);
  let values = [];
  while (true) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]];
        keys.shift();
        yield values.shift();
      } else {
        return false;
      }
    } else {
      yield values.shift();
    }
  }
};

let r = [];
for (let v of authors) {
  r.push(v);
}
console.log(r);
