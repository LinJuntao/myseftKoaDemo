const router = require('koa-router')()
const controller = require('../controller/posts')
//功能页面
router.get('/posts', controller.getPosts)
//管理用户界面
router.get('/posts/user', controller.getPostsUser)
//管理用户分页
router.post('/posts/user/page', controller.postPostsUserPage)
//查找用户
router.post('/posts/user/find', controller.postPostsUserFind)
//删除用户
router.post('/posts/user/del', controller.postPostsUserDel)
//变为管理员
router.post('/posts/user/setuserMM', controller.postPostsUserSetM)
//跳转修改
router.get('/posts/user/setoneuser', controller.getPostsSetUser)
//修改用户资料
router.post('/posts/user/setoneuser', controller.postPostsSetUser)
//后台修改用户资料
router.post('/posts/user/set', controller.postMMSetUser)
//todo页面
router.get('/posts/todo', controller.getPostsTodo)
//cons页面
router.get('/posts/cons', controller.getPostsCons)

module.exports = router