const auth = require('./auth')
const products = require('./products')
const Router = require('koa-router')
const cors = require('@koa/cors')

module.exports = function routes(app) {
  app.use(auth.routes())
  app.use(products.routes())
}
