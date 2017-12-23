
require('dotenv').config()
const Koa = require('koa');
const app = new Koa();
const diacritics = require('diacritics')
const random = require('random-words')

// response 
app.use(ctx => {
  ctx.body = { name: 'Milan', message: random() }
});

app.listen(process.env.PORT || 3000);