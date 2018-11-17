const userModel = require('../lib/db')
const MD5 = require('md5')
const moment = require('moment')
const fs = require('fs')

exports.getSignup = async (ctx) => {
    await ctx.render('signup', {
        session: ctx.session
    })
}

exports.postSignup = async (ctx) => {
    let {
        username,
        password,
        repeatpass,
        account,
        avator
    } = ctx.request.body

    await userModel.findDataCountByName(account).then(async (result) => {
        console.log(result)
        if (result[0].count >= 1) {
            //用户存在
            ctx.body = {
                code: 500,
                message: "用户已存在"
            }
        } else if (password !== repeatpass || password.trim() === '') {
            ctx.body = {
                code: 500,
                message: "两次输入的密码不一致"
            }
        } else if (avator && avator.trim() === '') {
            ctx.body = {
                code: 500,
                message: '请上传头像'
            }
        } else {
            let base64Data = avator.replace(/^data:image\/\w+;base64,/, "");
            let dataBuffer = new Buffer(base64Data, 'base64');
            let getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now();
            let upload = await new Promise((reslove, reject) => {
                fs.writeFile('./public/images/' + getName + '.jpg', dataBuffer, (err) => {
                    if (err) {
                        throw err;
                        reject(false)
                    };
                    reslove(true)
                    console.log("头像上传成功!")
                })
            })

            if (upload) {
                let vs = [username, MD5(password), account, "todo" + account, "cons" + account, "monthmoney" + account, moment().format('YYYY-MM-DD HH:mm:ss'), getName + '.jpg'];
                console.log(vs)
                await userModel.insertData(vs).then((res) => {
                    console.log('注册成功', res)
                    userModel.createTable(userModel.todolist(`${account}`))
                    userModel.createTable(userModel.conslist(`${account}`))
                    userModel.createTable(userModel.moneymonthlist(`${account}`))
                    //注册成功
                    ctx.body = {
                        code: 200,
                        message: '注册成功'
                    }
                })
            } else {
                ctx.body = {
                    code: 500,
                    message: "注册失败/头像上传失败"
                }
            }
        }
    })
}