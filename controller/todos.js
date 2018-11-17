const userModel = require('../lib/db')
const moment = require('moment')


//添加todo事件
exports.postAddtodo = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let todoeventcontent = ctx.request.body.todoeventcontent
        if (todoeventcontent == '' || todoeventcontent == null) {
            ctx.body = {
                code: 500,
                message: "todo输入为空"
            }
        } else {
            let ts = [moment().format('YYYY-MM-DD HH:mm:ss'), todoeventcontent.trim(), ctx.session.id]
            await userModel.insertTodoData(todoname, ts)
                .then(async (res) => {
                    ctx.body = {
                        res: res,
                        code: 200
                    }

                }).catch(err => {
                    console.log(err)

                })
        }


        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }

}


//返回所有active数据
exports.getActiveTodo = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        await userModel.findActiveTodo(todoname)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }
                ctx.body = {
                    res: res,
                    code: 200
                }

            }).catch((err) => {
                console.log(err)
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }

}
//删除对应的active事件
exports.postDelTodo = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let userid = ctx.request.body.userid
        await userModel.delTodo(todoname, userid)
            .then(async (res) => {
                ctx.body = {
                    res: res,
                    code: 200
                }
            }).catch((err) => {
                console.log(err)
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//查找activ事件
exports.postFindTodoData = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let todoclickname = ctx.request.body.todoclickname

        await userModel.findTodoData(todoname, todoclickname)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }
                ctx.body = {
                    res: res,
                    code: 200
                }
            }).catch((err) => {

                console.log(err)
                ctx.body = {
                    code: 500,
                    data: err
                }

            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//返回所有todo数据，包括已过去和正在进行的数据
exports.getFindAllTododate = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        await userModel.findAllTodo(todoname)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }

                ctx.body = {
                    res: res,
                    code: 200
                }
            }).catch((err) => {
                console.log(err)
                ctx.body = {
                    code: 500,
                    data: err,

                }
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//todo事件的修改
exports.postUpdateTododate = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let todoeventcontent = ctx.request.body.todoeventcontent;
        let todoeventid = ctx.request.body.todoeventid;
        if (todoeventcontent == '' || todoeventcontent == null) {
            ctx.body = {
                code: 500,
                message: "输入todo事件为空"
            }
        } else {
            let vl = [moment().format('YYYY-MM-DD HH:mm:ss'), todoeventcontent.trim()]
            await userModel.updateTodo(todoname, vl, todoeventid)
                .then(async (res) => {
                    ctx.body = {
                        res: res,
                        code: 200
                    }
                }).catch((err) => {
                    console.log(err)
                    ctx.body = {
                        code: 500,
                        data: err,

                    }
                })
        }
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//所有过期的事件
exports.getFindDStatusTodo = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        await userModel.findDStatusTodo(todoname)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }
                ctx.body = {
                    res: res,
                    code: 200
                }
            }).catch((err) => {
                console.log(err)
                ctx.body = {
                    code: 500,
                    data: err
                }
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//批量处理改变数据状态
exports.postTodoClears = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let checkClearbox = ctx.request.body.checkClearbox;
        let vuales = []
        for (let val of checkClearbox) {
            await userModel.delTodo(todoname, val)
                .then((res) => {
                    vuales.push(res)
                }).catch((err) => {
                    vuales.push(err)
                })
        }
        ctx.body = {
            res: vuales,
            code: 200
        }
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}


//todo/month 页面 /posts/todo/month
exports.getPostsTodoMonth = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                res = result;

            })
        await ctx.render('todomonth', {
            session: ctx.session,
            rel: res
        })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//todo/other 页面 /posts/todo/othertodo
exports.getPostsTodoOther = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                res = result;

            })
        await ctx.render('todoother', {
            session: ctx.session,
            rel: res
        })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }
}

//根据本地时间获取本个月的数据
exports.getTodoThisMonth = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let THISYEAR = new Date().getFullYear();
        let THISMONTH = new Date().getMonth();
        let thisdate, lastdate;
        if (THISMONTH == 0) {
            thisdate = THISYEAR + '-' + (THISMONTH + 2) + '-1';
            lastdate = (THISYEAR) + '-' + '1-1';
        } else if (THISMONTH == 11) {
            thisdate = (THISYEAR + 1) + '-' + '1-1';
            lastdate = THISYEAR + '-' + (THISMONTH + 1) + '-1';
        } else {
            thisdate = THISYEAR + '-' + (THISMONTH + 2) + '-1';
            lastdate = THISYEAR + '-' + (THISMONTH + 1) + '-1';
        }
        let val = [lastdate, thisdate];
        await userModel.findTodoMonthData(todoname, val)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }
                ctx.body = {
                    res: res,
                    code: 200
                }

            }).catch((err) => {
                console.log(err)
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }

}

//根据本地时间获取上1个月的数据

exports.getTodoLastMonth = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let THISYEAR = new Date().getFullYear();
        let THISMONTH = new Date().getMonth();
        let thisdate, lastdate;
        if (THISMONTH == 0) {
            thisdate = THISYEAR + '-' + (THISMONTH + 1) + '-1';
            lastdate = (THISYEAR - 1) + '-' + '1-1';
        } else {
            thisdate = THISYEAR + '-' + (THISMONTH + 1) + '-1';
            lastdate = THISYEAR + '-' + (THISMONTH) + '-1';
        }
        let val = [lastdate, thisdate];
        await userModel.findTodoMonthData(todoname, val)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }
                ctx.body = {
                    res: res,
                    code: 200
                }

            }).catch((err) => {
                console.log(err)
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }

}

//根据本地时间获取上2个月前的所有数据

exports.getTodoMoreMonth = async (ctx) => {
    if (ctx.session && ctx.session.user) {
        let todoname;
        await userModel.findByIdUser(ctx.session.id)
            .then((result) => {
                todoname = result[0]['todosqlfm']
            })
        let THISYEAR = new Date().getFullYear();
        let THISMONTH = new Date().getMonth();
        let moredate;
        if (THISMONTH == 0) {
            moredate = (THISYEAR - 1) + '-12-1';
        } else {
            moredate = THISYEAR + '-' + THISMONTH + "-1";
        }
        let vl = [moredate]
        await userModel.findThireMonthData(todoname, vl)
            .then(async (res) => {
                for (let val of res) {
                    let d = new Date(val.todoeventdate);
                    let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
                        ':' + d.getSeconds();
                    val.todoeventdate = times;
                }
                ctx.body = {
                    res: res,
                    code: 200
                }

            }).catch((err) => {
                console.log(err)
            })
        return true
    } else {
        ctx.redirect('/signin');
        return false;
    }

}