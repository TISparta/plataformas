const Router = require('koa-router')
const User = require('../models/users.js')
const jwt = require('koa-jwt')

const router = new Router()

router.use(jwt({
  secret: 'mySuuuuuuuperSecretKey' 
}))

// Estas rutas necesitas un header
// Authorization: Bearer <token>
router.prefix('/products')

router.get('/', async function (ctx) {
  console.log(ctx.state.user) // jwt decodificado
  ctx.body = 'Products'
})

router.get('/list', async function (ctx) {
})

module.exports = router
