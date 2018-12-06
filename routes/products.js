const Router = require('koa-router')
const User = require('../models/users.js')
const Product = require('../models/products.js')
const jwt = require('koa-jwt')
const koaBody = require('koa-body')

const router = new Router()

router.use(jwt({
  secret: process.env.SECRET 
}))

// Estas rutas necesitas un header
// Authorization: Bearer <token>
router.prefix('/products')

router.get('/', async function (ctx) {
  console.log(ctx.state.user) // jwt decodificado
  ctx.body = 'Products'
})

router.get('/list', async function (ctx) {
  let products = await Product.find({})
  ctx.body = products
})

router.post('/add', koaBody({
  formidable: {
    uploadDir: process.env.ROOT_UPLOAD + '/images/',
    keepExtensions: true
  },
  multipart: true,
  urlencoded: true
}), async (ctx) => {
  let username = ctx.state.user.username
  let file = ctx.request.files.imgUploader
  let fileName = file.path.slice(file.path.lastIndexOf('/') + 1)
  let add = ctx.request.body
  add['url'] = process.env.IMG_URL + fileName
  add['username'] = username
  const newProduct = await Product(add)
  await newProduct.save()
  ctx.body = 'OK'
})

router.post('/delete', async function (ctx) {
  const body = ctx.request.body
  await Product.deleteOne({_id: body._id}, function (err, res) {
    if (err) ctx.body = 'Could not delete the image'
    else ctx.body = 'OK'
  })
})

router.post('/update', async function (ctx) {
  const body = ctx.request.body
  await Product.updateOne({_id: body._id}, body, function (err, res) {
    if (err) ctx.body = 'Something got wrong'
    else ctx.body = 'OK'
  })
})

module.exports = router
