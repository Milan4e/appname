const Koa = require('koa');
const app = new Koa();
 
// response 
app.use(ctx => {
  ctx.body = process.env.MY_NAME;
});

app.listen(process.env.PORT || 3000);