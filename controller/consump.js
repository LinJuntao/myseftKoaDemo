const userModel = require("../lib/db");
const moment = require("moment");

//moneyname
//返回种类给前端
exports.getConsKind = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let res;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            res = result;
        });
        await userModel
            .findConskind()
            .then(reslut => {
                ctx.body = {
                    res: reslut,
                    code: 200
                };
            })
            .catch(err => {
                ctx.body = {
                    res: err,
                    code: 500
                };
            });
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};
//返回当前月份的数据
// exports.getConsThisMonth = async (ctx, next) => {
//     if (ctx.session && ctx.session.user) {
//         let consname;
//         await userModel.findByIdUser(ctx.session.id)
//             .then((result) => {
//                 consname = result[0]['consqlfm']
//             })

//         let dateStr = ctx.request.body.dateStr;
//         let pageNub = ctx.request.body.pageNub;
//         console.log(dateStr, pageNub)
//         await userModel.findThisMonthData(consname, dateStr, pageNub)
//             .then((res) => {
//                 for (let val of res) {
//                     let d = new Date(val.coneventdate);
//                     let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
//                         ':' + d.getSeconds();
//                     val.coneventdate = times;
//                 }
//                 ctx.body = {
//                     res,
//                     code: 200
//                 }
//             }).catch((err) => {
//                 ctx.body = {
//                     res: err,
//                     code: 500
//                 }
//             })
//         return true
//     } else {
//         ctx.redirect('/signin');
//         return false;
//     }
// }

//添加月账单-单条记录
exports.postAddConsumpDate = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let {
            coneventcontent,
            coneventmoney,
            conevent,
            conkind
        } = ctx.request.body;

        let condate = moment().format("YYYY-MM-DD HH:mm:ss");
        let coneventavatar;
        if (coneventcontent == "" || coneventcontent == null) {
            ctx.body = {
                code: 500,
                message: "cons输入为空"
            };
        } else {
            await userModel.findConsbyid([conkind]).then(kinddata => {
                coneventavatar = kinddata[0]["kindurl"];
            });
            let vl = [
                condate,
                coneventcontent.trim(),
                coneventmoney,
                conevent,
                coneventavatar,
                ctx.session.id,
                conkind
            ];
            await userModel
                .addConeventdata(consname, vl)
                .then(async res => {
                    ctx.body = {
                        res: res,
                        code: 200
                    };
                })
                .catch(err => {
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};

//按照选择的月份，返回数据
exports.postChangeConsDate = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        let pageNub = ctx.request.body.pageNub;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            await userModel
                .findThisMonthData(consname, coneventdate, pageNub)
                .then(res => {
                    for (let val of res) {
                        let d = new Date(val.coneventdate);
                        let times =
                            d.getFullYear() +
                            "-" +
                            (d.getMonth() + 1) +
                            "-" +
                            d.getDate() +
                            " " +
                            d.getHours() +
                            ":" +
                            d.getMinutes() +
                            ":" +
                            d.getSeconds();
                        val.coneventdate = times;
                    }
                    ctx.body = {
                        res,
                        code: 200
                    };
                })
                .catch(err => {
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};
//根据消费的种类进行筛选
exports.postChangeByKindConsDate = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        let coneventkindid = ctx.request.body.coneventkindid;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            await userModel
                .findThisMonthByKind(consname, coneventdate, coneventkindid)
                .then(res => {
                    for (let val of res) {
                        let d = new Date(val.coneventdate);
                        let times =
                            d.getFullYear() +
                            "-" +
                            (d.getMonth() + 1) +
                            "-" +
                            d.getDate() +
                            " " +
                            d.getHours() +
                            ":" +
                            d.getMinutes() +
                            ":" +
                            d.getSeconds();
                        val.coneventdate = times;
                    }
                    ctx.body = {
                        res,
                        code: 200
                    };
                })
                .catch(err => {
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};

//根据选择的金额进行筛选

exports.postChangeByMoneyConsDate = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        let moneyNub = ctx.request.body.moneyNub;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            await userModel
                .findThisMonthByMoney(consname, coneventdate, moneyNub)
                .then(res => {
                    for (let val of res) {
                        let d = new Date(val.coneventdate);
                        let times =
                            d.getFullYear() +
                            "-" +
                            (d.getMonth() + 1) +
                            "-" +
                            d.getDate() +
                            " " +
                            d.getHours() +
                            ":" +
                            d.getMinutes() +
                            ":" +
                            d.getSeconds();
                        val.coneventdate = times;
                    }
                    ctx.body = {
                        res,
                        code: 200
                    };
                })
                .catch(err => {
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};

//总金额，各个月的消费金额

exports.postTotalMoneyConsDate = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        let moneyname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
            moneyname = result[0]["monthsqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            let moneylist = null;
            let spendmoney = 0;
            let incomemoney = 0;
            await userModel.findMonthData(consname, coneventdate).then(res => {
                moneylist = res;
            });
            if (moneylist != null) {
                for (let val of moneylist) {
                    if (val.conevent == 21) {
                        incomemoney += parseInt(val.coneventmoney);
                    }
                    if (val.conevent == 20) {
                        spendmoney -= parseInt(val.coneventmoney);
                    }
                }
                let vl = [
                    incomemoney + spendmoney,
                    spendmoney,
                    incomemoney,
                    coneventdate
                ];
                await userModel.updatedatemonth(moneyname, vl).then(async dateDate => {
                    await userModel
                        .findmoneyDateBymonth(moneyname, coneventdate)
                        .then(resl => {
                            ctx.body = {
                                res: resl,
                                total: moneylist.length,
                                code: 200
                            };
                        })
                        .catch(err => {
                            ctx.body = {
                                res: err,
                                code: 500
                            };
                        });
                });
            }
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};

//根据传递过来的字符串进行查询
exports.postFindByStringConsDate = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        let findStr = ctx.request.body.findStr;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            await userModel
                .findThisMonthByString(consname, coneventdate, findStr)
                .then(res => {
                    for (let val of res) {
                        let d = new Date(val.coneventdate);
                        let times =
                            d.getFullYear() +
                            "-" +
                            (d.getMonth() + 1) +
                            "-" +
                            d.getDate() +
                            " " +
                            d.getHours() +
                            ":" +
                            d.getMinutes() +
                            ":" +
                            d.getSeconds();
                        val.coneventdate = times;
                    }
                    ctx.body = {
                        res,
                        code: 200
                    };
                })
                .catch(err => {
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};

//根据传递过来的字符串进行查询 -输出
exports.postFindDataUsepieS = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            let kind;
            await userModel.findConskind().then(kinds => {
                kind = kinds;
            });
            await userModel
                .findDataUseBar(consname, coneventdate)
                .then(res => {
                    let pielist = [];
                    let pieMoney = 0;
                    for (let i = 1; i < kind.length + 1; i++) {
                        for (let val of res) {
                            if (val.conevent == 20) {
                                if (val.kindid == i) {
                                    pieMoney += parseInt(val.coneventmoney);
                                }
                            }
                        }
                        if (kind[i - 1].kindid == i) {
                            let jsonobj = {
                                name: kind[i - 1].kindname,
                                value: pieMoney
                            };
                            pieMoney = 0;
                            pielist.push(jsonobj);
                        }
                    }
                    ctx.body = {
                        res: pielist,
                        code: 200
                    };
                })
                .catch(err => {
                    console.log(err);
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};

//收入
exports.postFindDataUsepieI = async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        let consname;
        await userModel.findByIdUser(ctx.session.id).then(result => {
            consname = result[0]["consqlfm"];
        });
        let coneventdate = ctx.request.body.coneventdate;
        if (coneventdate == null && coneventdate == "") {
            ctx.body = {
                res: "未选择月份",
                code: 500
            };
        } else {
            let kind;
            await userModel.findConskind().then(kinds => {
                kind = kinds;
            });
            await userModel
                .findDataUseBar(consname, coneventdate)
                .then(res => {
                    let pielist = [];
                    let pieMoney = 0;
                    for (let i = 1; i < kind.length + 1; i++) {
                        for (let val of res) {
                            if (val.conevent == 21) {
                                if (val.kindid == i) {
                                    pieMoney += parseInt(val.coneventmoney);
                                }
                            }
                        }
                        if (kind[i - 1].kindid == i) {
                            let jsonobj = {
                                name: kind[i - 1].kindname,
                                value: pieMoney
                            };
                            pieMoney = 0;
                            pielist.push(jsonobj);
                        }
                    }
                    ctx.body = {
                        res: pielist,
                        code: 200
                    };
                })
                .catch(err => {
                    console.log(err);
                    ctx.body = {
                        res: err,
                        code: 500
                    };
                });
        }
        return true;
    } else {
        ctx.redirect("/signin");
        return false;
    }
};