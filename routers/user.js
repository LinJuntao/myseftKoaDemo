const router = require('koa-router')()
const controller = require('../controller/user')

//跳转单独一个用户的页面
router.get('/posts/user/oneuser', controller.getOneUser)
//指定用户的todo表
router.post('/posts/user/oneusergettodo',controller.postOneUserTodo)
//指定用户的cons表
router.post('/posts/user/oneusergetcons',controller.postOneUserCons)
//指定用户的month表
router.post('/posts/user/oneusergetmonth',controller.postOneUserMonth)
//echart 使用
router.post('/posts/user/oneuseechart',controller.postOneUserEchartdata)

module.exports = router