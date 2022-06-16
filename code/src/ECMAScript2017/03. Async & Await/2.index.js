import ajax from '@lib/ajax';

function request(url) {
  return new Promise((resolve) => {
    ajax(url, (res) => {
      resolve(res);
    });
  });
}
async function getData() {
  let res1 = await request('/static/a.json');
  console.log(res1);
  let res2 = await request('/static/b.json');
  console.log(res2);
  let res3 = await request('/static/c.json');
  console.log(res3);
}
getData();
