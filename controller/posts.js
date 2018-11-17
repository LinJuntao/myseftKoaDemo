const userModel = require('../lib/db')
const MD5 = require('md5')
const moment = require('moment')
const fs = require('fs')
exports.getPosts = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                res = result;
            })
        await ctx.render('posts', {
            session: ctx.session,
            rel: res
        })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//管理用户的界面
exports.getPostsUser = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let pagetop;
        let res;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                res = result;
            })
        await userModel.findUserPost()
            .then((result) => {
                pagetop = result[0]['count']
            }).catch((error) => {
                pagetop = error
            })
        await ctx.render('usermanager', {
            session: ctx.session,
            pagetop: pagetop,
            rel: res
        })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//管理员用户分页
exports.postPostsUserPage = async (ctx) => {
    let page = ctx.request.body.page;
    await userModel.findAllUser(page)
        .then((result) => {
            ctx.body = result
        }).catch((error) => {
            ctx.body = error
        })
}

//用户查询
exports.postPostsUserFind = async (ctx) => {
    let findname = ctx.request.body.findname
    await userModel.findUserData(findname.trim())
        .then((result) => {
            ctx.body = result
        }).catch((error) => {
            ctx.body = error
        })
}

//删除用户
exports.postPostsUserDel = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let {
            userid,
            tokenX
        } = ctx.request.body
        let token = "Hello KOA2";
        let account;
        if (MD5(token) == tokenX) {
            await userModel.findByIdUser(userid).then((res) => {
                account = res[0]['account']
            })
            await userModel.deleteUser(userid)
                .then((result) => {
                    userModel.deleteTable(userModel.deltab(`${account}`).do)
                    userModel.deleteTable(userModel.deltab(`${account}`).con)
                    userModel.deleteTable(userModel.deltab(`${account}`).mom)
                    ctx.body = {
                        result: result,
                        code: 200
                    }
                    console.log("删除成功")
                }).catch((error) => {
                    ctx.body = error
                })
        }

    }
}
//将某个用户设置成管理员
exports.postPostsUserSetM = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let {
            userid,
            tokenX
        } = ctx.request.body
        let token = "Hello KOA2"
        if (MD5(token) == tokenX) {
            await userModel.setManageUser(userid)
                .then((result) => {
                    ctx.body = {
                        result: result,
                        code: 200
                    }
                    console.log("成为管理员")
                }).catch((error) => {
                    ctx.body = error
                })
        }
    }
}
//跳转修改页面
exports.getPostsSetUser = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        console.log(ctx.session);
        await ctx.render('signset', {
            session: ctx.session
        })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//用户修改
exports.postPostsSetUser = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let {
            username,
            password,
            repeatpass,
            account,
            avator,
            userid
        } = ctx.request.body
        let lastaccount;
        await userModel.findByIdUser(userid).then(async (result) => {
            lastaccount = result[0]['account']
        })
        await userModel.findDataCountByName(account).then(async (result) => {

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
                    let ls = [username, MD5(password), account, "todo" + account, "cons" + account, moment().format('YYYY-MM-DD HH:mm:ss'), getName + '.jpg', userid]
                    await userModel.updateUser(ls).then((res) => {
                        userModel.revberTable(userModel.revtab(`${lastaccount}`, account).do)
                        userModel.revberTable(userModel.revtab(`${lastaccount}`, account).con)
                        userModel.revberTable(userModel.revtab(`${lastaccount}`, account).mom)
                        console.log("修改成功", res)
                        ctx.session = null;
                        ctx.body = {
                            code: 200,
                            message: '修改成功'
                        }
                    })

                } else {
                    ctx.body = {
                        code: 500,
                        message: "修改失败/头像上传失败"
                    }
                }
            }
        })

    }
}
//后台的用户修改
exports.postMMSetUser = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let {
            username,
            password,
            repeatpass,
            account,
            avator,
            userid
        } = ctx.request.body
        let lastaccount;
        await userModel.findByIdUser(userid).then(async (result) => {
            lastaccount = result[0]['account']
        })
        await userModel.findDataCountByName(account).then(async (result) => {

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
            } else {
                let ls = [username, MD5(password), account, "todo" + account, "cons" + account, moment().format('YYYY-MM-DD HH:mm:ss'), avator, userid]
                await userModel.updateUser(ls).then((res) => {
                    userModel.revberTable(userModel.revtab(`${lastaccount}`, account).do)
                    userModel.revberTable(userModel.revtab(`${lastaccount}`, account).con)
                    console.log("修改成功", res)
                    ctx.session = null;
                    ctx.body = {
                        code: 200,
                        message: '修改成功'
                    }
                })


            }
        })

    }
}


//todo页面
exports.getPostsTodo = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                res = result;

            })
        await ctx.render('todo', {
            session: ctx.session,
            rel: res
        })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//cons 页面
exports.getPostsCons = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                res = result;
            })
        let moneyname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                moneyname = result[0]['monthsqlfm']
            })
        let dateStr = new Date();
        let thismonth = dateStr.getFullYear() + "-" + (dateStr.getMonth() + 1);
        await userModel.finddatemonth(moneyname, [thismonth])
            .then((res) => {

                if (res.length <= 0) {
                    userModel.adddatemoney(moneyname, [thismonth, 0])
                }
            })
        await ctx.render('consumption', {
            session: ctx.session,
            rel: res
        })

        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}