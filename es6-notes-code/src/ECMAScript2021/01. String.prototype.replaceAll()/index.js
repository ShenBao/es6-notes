// const queryString = 'q=query+string+parameters';
// const withSpaces = queryString.replace(/\+/g, ' ');

// const queryString = 'q=query+string+parameters';
// const withSpaces = queryString.split('+').join(' ');

const queryString = 'q=query+string+parameters';
const withSpaces = queryString.replaceAll('+', ' ');
console.log(withSpaces);

