const Koa = require("koa");
const path = require('path')
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require("./config/default")
const router = require('koa-router')
const views = require('koa-views')
const staticCache = require('koa-static-cache')
const app = new Koa();

//session存储配置
const sessionMysqlConfig = {
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
    host: config.db.host
}

//配置session 中间件
app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}))

//静态资源中间件
//缓存
app.use(staticCache(path.join(__dirname, './public'), {
    dynamic: true
}, {
    maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), {
    dynamic: true
}, {
    maxAge: 365 * 24 * 60 * 60
}))

//服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(bodyParser({
    formLimit: '1mb'
}))

//路由中间件
app.use(require('./routers/index').routes())
app.use(require('./routers/signup.js').routes())
app.use(require('./routers/signin').routes())
app.use(require('./routers/posts').routes())
app.use(require('./routers/signout').routes())
app.use(require('./routers/todos').routes())
app.use(require('./routers/consump').routes())
app.use(require('./routers/user').routes())

app.listen(config.port, () => {
    console.log(`已启动 ${config.port} 端口`)
})