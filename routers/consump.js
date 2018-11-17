const router = require("koa-router")()
const controller = require("../controller/consump")

//返回消费种类
router.get('/posts/cons/conskind', controller.getConsKind)
//添加单条数据--月账单
router.post('/posts/cons/addcons', controller.postAddConsumpDate)
//当前月份的数据
// router.get('/posts/cons/getthismonth', controller.getConsThisMonth)
//选择月份的数据
router.post('/posts/cons/changemonth', controller.postChangeConsDate)
//根据消费种类筛选
router.post('/posts/cons/changebykind', controller.postChangeByKindConsDate)
//根据选择的金额范围筛选
router.post('/posts/cons/changebymoney', controller.postChangeByMoneyConsDate)
//总金额，以及选择月份的支出与收入
router.post('/posts/cons/totalmoney', controller.postTotalMoneyConsDate)
//根据传递过来的字符串进行查找
router.post('/posts/cons/findbystr', controller.postFindByStringConsDate)
//根据传递过来的月份进行筛选本月的花费分布
router.post('/posts/cons/finddusepieS', controller.postFindDataUsepieS)
//根据传递过来的月份进行筛选本月的收入分布
router.post('/posts/cons/finddusepieI', controller.postFindDataUsepieI)

module.exports = router