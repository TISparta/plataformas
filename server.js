const koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const respond = require('koa-respond')
const mongoose = require('mongoose')
const routes = require('./routes/index')
const serve = require('koa-static')

const app = new koa()

app.use(helmet())
app.use(cors())
app.use(bodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('Body parse error', 422)
  }
}))

app.use(respond())
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  await next();
})

app.use(serve('./public'))
routes(app)

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => console.log('Database connected'))

module.exports = app
