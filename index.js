
require('dotenv').config()
const Koa = require('koa');
const app = new Koa();
const diacritics = require('diacritics')


// response 
app.use(ctx => {
  ctx.body = { name: 'Milan', message: diacritics.remove("ċḋḟġṁṗṡṫ") }
});

app.listen(process.env.PORT || 3000);