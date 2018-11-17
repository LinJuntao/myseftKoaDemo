const userModel = require('../lib/db')

//跳转某个用户的界面
exports.getOneUser = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            res = result;
        });
        await ctx.render('oneuser', {
            session: ctx.session,
            rel: res
        })
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
}

//指定用户的todo数据库表的数据
exports.postOneUserTodo = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            res = result;
        });
        let oneuserid = ctx.request.body.userid;
        await userModel.findByIdUser(oneuserid).then(async (userResult) => {
            if (userResult) {
                let todosqlfm = userResult[0]['todosqlfm'];
                let active, clear;
                await userModel.findOneUserTodoToActive(todosqlfm).then((res) => {
                    active = res;
                }).catch((err) => {
                    console.log(err)
                })
                await userModel.findOneUserTodoToClear(todosqlfm).then((res) => {
                    clear = res;
                }).catch((err) => {
                    console.log(err)
                })
                ctx.body = {
                    active: active,
                    clear: clear,
                    code: 200
                }
            }
        }).catch((err) => {
            console.log(err)
        })
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
}

//指定用户的cons数据库表的数据
exports.postOneUserCons = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            res = result;
        });
        let oneuserid = ctx.request.body.userid;
        await userModel.findByIdUser(oneuserid).then(async (userResult) => {
            if (userResult) {
                let consqlfm = userResult[0]['consqlfm'];
                let spend, income;
                await userModel.findOneUserConsToSpend(consqlfm).then((res) => {
                    spend = res;
                }).catch((err) => {
                    console.log(err)
                })

                await userModel.findOneUserConsToIncome(consqlfm).then((res) => {
                    income = res;
                }).catch((err) => {
                    console.log(err)
                })

                ctx.body = {
                    spend: spend,
                    income: income,
                    code: 200
                }
            }
        }).catch((err) => {
            console.log(err)
        })
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
}


//指定用户的Month数据库表的数据
exports.postOneUserMonth = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            res = result;
        });
        let oneuserid = ctx.request.body.userid;
        await userModel.findByIdUser(oneuserid).then(async (userResult) => {
            if (userResult) {
                let monthsqlfm = userResult[0]['monthsqlfm'];
                await userModel.findOneUserMonthData(monthsqlfm).then((res) => {

                    ctx.body = {
                        res: res,
                        code: 200
                    }
                }).catch((err) => {
                    ctx.body = {
                        code: 500,
                        res: err
                    }
                })
            }
        }).catch((err) => {
            console.log(err)
        })
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
}

//月消费使用的echarts数据
exports.postOneUserEchartdata = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            res = result;
        });
        let oneuserid = ctx.request.body.userid;
        let monthdate = ctx.request.body.monthdate;
        await userModel.findByIdUser(oneuserid).then(async (userResult) => {
            if (userResult) {
                let monthsqlfm = userResult[0]['monthsqlfm'];
                await userModel.finddatemonth(monthsqlfm,monthdate).then((res)=>{
                    let jsonobj = [{
                        name:'支出',
                        value:res[0]['moneyspend'].substr(1)
                    },{
                        name:'收入',
                        value:res[0]['moneyincome']
                    }];
                    ctx.body ={
                        res:jsonobj,
                        code:200
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }).catch((err) => {
            console.log(err)
        })
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
}