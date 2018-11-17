const mysql = require("mysql");
const config = require("../config/default");

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
    port: config.db.post
});

//sql语句使用
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};

//注册时产生对应的数据库表

exports.todolist = (value) => {
    let todo = `CREATE TABLE IF NOT EXISTS ${"todo" + value} (
                    todoeventid int(11) NOT NULL AUTO_INCREMENT,
                    todoeventdate datetime DEFAULT NULL COMMENT '添加todo事件时间',
                    todoeventcontent varchar(255) DEFAULT NULL COMMENT 'todo事件内容',
                    todoeventstatue int(11) DEFAULT '10' COMMENT '时间的状态，10代表活动，11代表过期',
                    userid int(11) DEFAULT NULL COMMENT '对应todouser里面的id',
                    PRIMARY KEY (todoeventid)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
    return todo;
};

exports.conslist = (value) => {
    let cons = `CREATE TABLE IF NOT EXISTS ${"cons" + value} (
                    coneventid int(11) NOT NULL AUTO_INCREMENT,
                    coneventdate datetime DEFAULT NULL COMMENT '添加消费事件时间',
                    coneventcontent varchar(255) DEFAULT NULL COMMENT '消费事件内容',
                    coneventmoney varchar(255) DEFAULT NULL COMMENT '消费/收入金额',
                    conevent  int(11) DEFAULT '20' COMMENT '判断是收入还是支出，20代表支出，21代表收入',
                    coneventavatar  varchar(255) DEFAULT '' COMMENT '消费种类对应的图片url地址',
                    userid int(11) DEFAULT NULL COMMENT '对应user里面的id',
                    conkind int(11) DEFAULT NULL COMMENT '消费用途',
                    PRIMARY KEY(coneventid)
                    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 `;
    return cons;
};

exports.moneymonthlist = (value) => {
    let datemoney = `
  CREATE TABLE IF NOT EXISTS ${"monthmoney"+value}( 
    dateId int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '月账单id',
    datemonth varchar(255) DEFAULT NULL COMMENT '月份',
    datemoney varchar(255) DEFAULT NULL COMMENT '月账单收入/支出，显示为（+/-）金额',
    moneyspend varchar(255) DEFAULT '0' COMMENT '支出金额',
    moneyincome varchar(255) DEFAULT '0' COMMENT '收入金额',
    PRIMARY KEY( dateId )
  ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8;
    `
    return datemoney;
}

//注册建表
exports.createTable = sql => {
    return query(sql, []);
};

exports.deltab = value => {
    let todo = `DROP TABLE ${"todo" + value};`;
    let cons = `DROP TABLE ${"cons" + value};`;
    let monthmoney = `DROP TABLE ${"monthmoney" + value};`;
    let del = {
        do: todo,
        con: cons,
        mom: monthmoney
    };
    return del;
};

exports.revtab = (last, value) => {
    let todo = `ALTER TABLE ${"todo" + last} RENAME ${"todo" + value};`;
    let cons = `ALTER TABLE ${"cons" + last} RENAME ${"cons" + value};`;
    let monthmoney = `ALTER TABLE ${"monthmoney" + last} RENAME ${"monthmoney" + value};`;
    let rev = {
        do: todo,
        con: cons,
        mom: monthmoney
    };
    return rev;
};
//删除对应的表
exports.deleteTable = sql => {
    return query(sql, []);
};
//修改对应的表
exports.revberTable = sql => {
    return query(sql, []);
};
//建表语句方法
// createTable(todolist(`${USERFM}`));
// createTable(conslist(`${USERFM}`));
//删除表
// deleteTable(deltab(`${USERFM}`).do);
// deleteTable(deltab(`${USERFM}`).con);
//修改表名
// revberTable(revtab(`${USERFM}`).do);
// revberTable(revtab(`${USERFM}`).con);

//注册用户
exports.insertData = value => {
    let _sql =
        "insert into users set username=?,password=?,account=?,todosqlfm=?,consqlfm=?,monthsqlfm=?,moment=?,avator=?;";
    return query(_sql, value);
};

//删除用户
exports.deleteUser = userid => {
    let _sql = `delete from users where id= "${userid}"; `;
    return query(_sql);
};

//根据账户查找用户
exports.findUser = account => {
    let _sql = `select * from users where account = "${account}"; `;
    return query(_sql);
};
//根据ID查找用户
exports.findByIdUser = userid => {
    let _sql = `select * from users where id = "${userid}"; `;
    return query(_sql);
};

//查找用户 username/account 满足一个即可
exports.findUserData = name => {
    let _sql = `SELECT * FROM users WHERE username LIKE '%${name}%' OR account LIKE '%${name}%'; `;
    return query(_sql);
};
//修改用户信息
exports.updateUser = value => {
    let _sql = `update users set username=?, password=?,account=?,todosqlfm=?,consqlfm=?,moment=?,avator = ? where id=?; `;
    return query(_sql, value);
};
//用户的数量
exports.findUserPost = () => {
    let _sql = `SELECT count(*) AS count FROM users;`;
    return query(_sql);
};
//所有用户,分页
exports.findAllUser = page => {
    let _sql = `select * from users limit ${(page - 1) * 10} , 10; `;
    return query(_sql);
};
//设置用户为管理员
exports.setManageUser = userid => {
    let _sql = `update users set todomanage = 1 where id = ${userid};`;
    return query(_sql);
};
//通过名字判断用户名是否存在
exports.findDataCountByName = account => {
    let _sql = `select count(*) as count from users where account="${account}";`;
    return query(_sql);
};
//根据对应的用户添加对应的表格
exports.insertTodoData = (todoname, value) => {
    let _sql = `insert into ${todoname} set todoeventdate=?,todoeventcontent=?,userid=?;`;
    return query(_sql, value);
};
//删除对应用户表的记录
exports.delTodo = (todoname, userid) => {
    let _sql = `update ${todoname} set todoeventstatue = 11 where todoeventid = ${userid};`;
    return query(_sql);
};
//查找事件，包括active 和 down
exports.findTodoData = (todoname, todoclickname) => {
    let _sql = `SELECT * FROM ${todoname} WHERE todoeventcontent  LIKE '%${todoclickname}%';`;
    return query(_sql);
};

//修改todo事件
exports.updateTodo = (todoname, value, todoeventid) => {
    let _sql = `update ${todoname} set todoeventdate = ?,todoeventcontent = ? where todoeventid=${todoeventid};`;
    return query(_sql, value);
};
//所有todo 的记录
exports.findAllTodo = todoname => {
    let _sql = ` select * from ${todoname} order by todoeventdate desc;`;
    return query(_sql);
};

//所有todo的active 记录
exports.findActiveTodo = todoname => {
    let _sql = ` select * from ${todoname}  WHERE todoeventstatue =10  order by todoeventdate desc;`;
    return query(_sql);
};

//所有todo 的删除记录
exports.findDStatusTodo = todoname => {
    let _sql = ` select * from ${todoname}  WHERE todoeventstatue =11  order by todoeventdate desc;`;
    return query(_sql);
};

//根据本地时间获取当前这几个月的数据
exports.findTodoMonthData = (todoname, value) => {
    let _sql = `select * from ${todoname} where todoeventdate BETWEEN ? AND ? ;`;
    return query(_sql, value);
};
//第三个月后的所有数据
exports.findThireMonthData = (todoname, moredate) => {
    let _sql = `select * from ${todoname} where todoeventdate BETWEEN ' ' AND ? ORDER BY todoeventdate DESC ;`;
    return query(_sql, moredate);
};

/**
 * 下面为月消费数据库的对应操作
 */
//返回消费种类给前端
exports.findConskind = () => {
    let _sql = "SELECT * FROM consumptionkind;";
    return query(_sql);
};
//根据种类查找对应的数据
exports.findConsbyid = (value) => {
    let _sql = "select * from consumptionkind where kindid=?;";
    return query(_sql, value);
};
//月账单统计添加数据
exports.adddatemoney = (moneyname, value) => {
    let _sql = `insert into ${moneyname} set datemonth=?,datemoney=?;`;
    return query(_sql, value);
};
//查找该月份是否存在
exports.finddatemonth = (moneyname, value) => {
    let _sql = `SELECT * FROM ${moneyname} WHERE datemonth=?;`;
    return query(_sql, value);
};
//返回所选的月份的数据
exports.findmoneyDateBymonth = (moneyname, datemonth) => {
    let _sql = `SELECT * FROM ${moneyname} WHERE datemonth= "${datemonth}";`;
    return query(_sql);
};
//修改月账单的收入/支出
exports.updatedatemonth = (moneyname, value) => {
    let _sql = `UPDATE  ${moneyname} set datemoney= ? ,moneyspend=?,moneyincome=? WHERE datemonth = ?;`;
    return query(_sql, value);
};
//添加月账单记录
exports.addConeventdata = (consname, value) => {
    let _sql = `insert into ${consname} set coneventdate=?,coneventcontent=?,coneventmoney=?,conevent=?,coneventavatar=?,userid=?,conkind=?;`;
    return query(_sql, value);
};
//当前月份的数据账单
exports.findThisMonthData = (consname, date, pageNub) => {
    let _sql = `SELECT * FROM ${consname} WHERE coneventdate LIKE '%${date}%' ORDER BY coneventdate DESC LIMIT ${(pageNub-1)*10},10;`;
    return query(_sql);
};
//当前月份的数据账单
exports.findMonthData = (consname, date) => {
    let _sql = `SELECT * FROM ${consname} WHERE coneventdate LIKE '%${date}%' ORDER BY coneventdate DESC;`;
    return query(_sql);
};
//根据种类筛选
exports.findThisMonthByKind = (consname, date, kindid) => {
    let _sql = `SELECT * FROM ${consname} WHERE  coneventdate LIKE '%${date}%' AND conkind= ${kindid} ;`;
    return query(_sql);
};

//根据金额筛选
exports.findThisMonthByMoney = (consname, date, value) => {
    let _sql = `SELECT * FROM ${consname} WHERE coneventdate like '%${date}%' AND coneventmoney BETWEEN ${parseInt(value[0])} AND ${parseInt(value[1])} ORDER BY coneventdate DESC`;
    return query(_sql);
};
//根据前端传递过来的字符串进行当前月数的查找查找
//SELECT * from constest WHERE coneventcontent LIKE '%发工%' AND coneventdate LIKE '%2018-11%'
exports.findThisMonthByString = (consname, date, findStr) => {
    let _sql = `SELECT * from ${consname} WHERE coneventcontent LIKE '%${findStr}%' AND coneventdate LIKE '%${date}%';`
    return query(_sql)
}

//用在圆饼图的sql语句
exports.findDataUseBar = (consname, date) => {
    let _sql = `select * from ${consname},consumptionkind where ${consname}.conkind = consumptionkind.kindid and ${consname}.coneventdate LIKE '%${date}%';`
    return query(_sql);
}


//查找对应用户的todo列表
//active
exports.findOneUserTodoToActive = (todosqlfm)=>{
    let _sql = `select * from ${todosqlfm} where todoeventstatue = 10 ORDER BY todoeventdate DESC;`
    return query(_sql);
}
//clear
exports.findOneUserTodoToClear = (todosqlfm)=>{
    let _sql = `select * from ${todosqlfm} where todoeventstatue = 11 ORDER BY todoeventdate DESC;`
    return query(_sql);
}
//查找对应用户的cons列表
//20支出
exports.findOneUserConsToSpend =(consqlfm) =>{
    let _sql = `select * from ${consqlfm} where conevent = 20 ORDER BY coneventdate DESC;`
    return query(_sql);
}
//21收入
exports.findOneUserConsToIncome = (consqlfm)=>{
    let _sql = `select * from ${consqlfm} where conevent = 21 ORDER BY coneventdate DESC;`
    return query(_sql);
}
//查找对应用户的month列表
exports.findOneUserMonthData =(monthsqlfm) =>{
    let _sql = `select * from ${monthsqlfm} ORDER BY dateId DESC;`
    return query(_sql)
}
