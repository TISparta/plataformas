const auth = require('./auth')
const products = require('./products')
const Router = require('koa-router')

const router = new Router()
router.prefix('/')

router.get('/', async function (ctx) {
  ctx.body = 'Hello World'
})

module.exports = function routes(app) {
  app.use(router.routes())
  app.use(auth.routes())
  app.use(products.routes())
}
