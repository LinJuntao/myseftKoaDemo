const router = require('koa-router')()
const controller = require('../controller/signup')

//注册页面
router.get('/signup', controller.getSignup)
//post 注册请求
router.post('/signup', controller.postSignup)

module.exports = router