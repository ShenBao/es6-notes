const validJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
};

const json = '{"name":"test", "course": "es"}';
console.log(validJSON(json));
