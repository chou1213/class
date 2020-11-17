const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();

function routerHandle(code, msg, json) {
    return {
        code,
        msg,
        ...(json ? { data: json } : {})
    }
}

router.post('/user', ctx => {
    const { role } = ctx.headers;
    const { name, email } = ctx.request.body;
    let result = {};
    // console.log(role, name, email);
    if (role !== 'admin') {
        result = routerHandle(401, 'unauthorized post');
    } else if (!name || !email) {
        result = routerHandle(404, 'name与email不能为空');
    } else {
        result = routerHandle(200, '上传成功', { name, email });
    }


    ctx.body = result;
})


app.use(koaBody());

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);