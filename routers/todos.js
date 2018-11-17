const router = require('koa-router')()
const controller = require('../controller/todos')

//添加todo事件
router.post('/posts/todo/addtodo', controller.postAddtodo)
//显示正需要做的事件的数据
router.get('/posts/todo/gettodo', controller.getActiveTodo)
//删除todo
router.post('/posts/todo/deltodo', controller.postDelTodo)
//查找todo 事件，包括active 和过期
router.post('/posts/todo/findtoda', controller.postFindTodoData)
//所有事件
router.get('/posts/todo/getalldata', controller.getFindAllTododate)
//todo事件的修改
router.post('/posts/todo/updatetodo', controller.postUpdateTododate)
//所有已经过期的todo事件
router.get('/posts/todo/getdeldata', controller.getFindDStatusTodo)
//批量处理事件
router.post('/posts/todo/clears', controller.postTodoClears)
//按照每个月显示
//跳转页面
router.get('/posts/todo/month', controller.getPostsTodoMonth)
//本月的数据
router.get('/posts/todo/thismonth', controller.getTodoThisMonth)
//上个月的数据
router.get('/posts/todo/lastmonth', controller.getTodoLastMonth)
//第三个月后的数据
router.get('/posts/todo/moremonth', controller.getTodoMoreMonth)
//All 以及过期的todo内容
router.get('/posts/todo/todoother', controller.getPostsTodoOther)

module.exports = router