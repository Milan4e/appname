
require('dotenv').config()
const Koa = require('koa');
const app = new Koa();
const diacritics = require('diacritics')

 
// response 
app.use(ctx => {
  ctx.body = diacritics.remove(process.env.MY_NAME);
});

app.listen(process.env.PORT || 3000);