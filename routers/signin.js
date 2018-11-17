const router = require('koa-router')()

const controller = require('../controller/signin')

//登录页面
router.get('/signin', controller.getSignin)
//post 登录请求
router.post('/signin', controller.postSignin)


module.exports = router