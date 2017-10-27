const Koa = require('koa');
const app = new Koa();
 
// response 
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

console.log(8080)
app.listen(8080);