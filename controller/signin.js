const userModel = require('../lib/db')
const MD5 = require('md5')


exports.getSignin = async (ctx) => {
    await ctx.render('signin', {
        session: ctx.session
    })
}
exports.postSignin = async (ctx) => {
    let {
        account,
        password
    } = ctx.request.body
    await userModel.findUser(account)
        .then(result => {
            let res = result;
            if (res.length && account === res[0]['account'] && MD5(password) === res[0]['password']) {
                ctx.session = {
                    username: res[0]['username'],
                    user: res[0]['account'],
                    id: res[0]['id']
                }
                ctx.body = {
                    code: 200,
                    message: "登录成功"
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名或密码错误'
                }
            }
        }).catch(err => {
            console.log(err)
        })
}