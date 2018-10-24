const Router = require('koa-router')
const User = require('../models/users.js')
const jwtToken = require('jsonwebtoken')
const jwt = require('koa-jwt')

const router = new Router()

router.prefix('/auth')

router.get('/', async function (ctx) {
  ctx.body = 'Auth'
})

router.post('/login', async function (ctx) {
  try {
    const body = ctx.request.body
    const found = await User.findOne({
      username: body.username,
      password: body.password
    })
    if (!found) {
      ctx.status = 400
      ctx.body = 'Not match found'
    }
    else {
      ctx.status = 200
      ctx.body = {
        token: jwtToken.sign({
          username: body.username
        },
        process.env.SECRET, {
          expiresIn: '1d'
        }),
        message: 'OK'
      }
    }
  } catch (err) {
    console.log(err)
    ctx.throw(400)
  }
})

router.post('/register', async function (ctx) {
  try {
    const body = ctx.request.body
    const user = new User({
      name: body.name,
      username: body.username,
      password: body.password
    })
    const exists = await User.findOne({ username: body.username })
    if (exists) throw Error('User already exists')
    await user.save()
    ctx.body = 'OK'
  } catch (err) {
    console.log(err)
    ctx.throw(400)
  }
})

router.use(jwt({
  secret: process.env.SECRET 
}))

router.get('/user', async function (ctx) {
  ctx.body = {
    username: ctx.state.user.username
  }
})

module.exports = router
