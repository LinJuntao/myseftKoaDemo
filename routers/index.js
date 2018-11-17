const router = require('koa-router')()

//注册页面
router.get('/', (ctx, next) => {
    ctx.redirect('/signin')
})


module.exports = router