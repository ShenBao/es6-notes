// // 同步
// const a = 2;
// const b = 3;
// console.log(a + b);

// // 异步
// setTimeout(() => {
//   console.log(a + b);
// }, 1000);

// console.log(1);
// setTimeout(() => {
//   // 异步任务，放入任务队列中
//   console.log(2);
// }, 0);
// console.log(3);

// const url = 'http://jsonplaceholder.typicode.com/users';
// let xmlhttp;
// if (window.XMLHttpRequest) {
//   // code for IE7+, Firefox, Chrome, Opera, Safari
//   xmlhttp = new XMLHttpRequest();
// } else {
//   // code for IE6, IE5
//   xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
// }

// // 发送请求
// xmlhttp.open('GET', url, true);
// xmlhttp.send();

// // 服务端响应
// xmlhttp.onreadystatechange = function () {
//   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//     //    console.log(xmlhttp.responseText)
//     let obj = JSON.parse(xmlhttp.responseText);
//     console.log(obj);
//   }
// };

function ajax(url, callback) {
  let xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  // 发送请求
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
  // 服务端响应
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //    console.log(xmlhttp.responseText)
      let obj = JSON.parse(xmlhttp.responseText);
      callback && callback(obj);
    }
  };
}

ajax('http://jsonplaceholder.typicode.com/users', function (res) {
  console.log(res);
});

ajax('/static/a.json', (res) => {
  console.log(res);
  ajax('/static/b.json', (res) => {
    console.log(res);
    ajax('/static/c.json', (res) => {
      console.log(res);
    });
  });
});

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    callback(src);
  };
  document.head.append(script);
}

function test(name) {
  console.log(name);
}
loadScript('/static/1.js', function (script) {
  loadScript('/static/2.js', function (script) {
    loadScript('/static/3.js', function (script) {
      test('log');
    });
  });
});
