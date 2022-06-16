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

for (let key in authors) {
  let r = [];
  for (let k in authors[key]) {
    r = r.concat(authors[key][k]);
  }
  console.log(r);
}
