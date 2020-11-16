const koa = require('koa');
const app = new koa();
const path = require('path');
const helmat = require('koa-helmet');
const statics = require('koa-static');

const router = require('./routes/routes'); // 合并路由

app.use(helmat());
app.use(statics(path.join(__dirname, '../public')));
app.use(router());

app.listen(3000);