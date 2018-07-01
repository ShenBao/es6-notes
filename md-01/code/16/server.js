const koa = require('koa');
const mysql = require('koa-mysql');

let db = mysql.createPool({ host: 'localhost', user: 'root', password: '123456', database: '20170702' });

let server = new koa();

server.use(function* () {
  let data = yield db.query(`SELECT * FROM user_table`);

  this.body = data;
});

server.listen(8080);
