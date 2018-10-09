const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const routes = require('./routes/index')

const app = new Koa()
app.use(bodyParser())

/*const Router = require('koa-router')
const router = new Router()
router.prefix('/')

router.get('/', async function (ctx) {
  ctx.body = 'Hello World'
})

app.use(router.routes())*/

mongoose.connect('mongodb://localhost/plataformas', { useNewUrlParser: true });
mongoose.connection.on('error', console.error);

routes(app)

if (!module.parent) {
  const PORT = process.env.PORT || 3000
  console.log(`Running in port ${PORT}`)
  app.listen(PORT)
}

module.exports = app
