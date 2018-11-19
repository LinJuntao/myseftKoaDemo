/*
Navicat MySQL Data Transfer

Source Server         : 120.78.75.213
Source Server Version : 50722
Source Host           : 120.78.75.213:3306
Source Database       : ideaboxsql

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-11-19 08:58:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `_mysql_session_store`
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:-N54YaJhSa61yrqf0cV8rQRP_CvhDzMA', '1542180927354', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:0bq-SAbztT3fz0J8VMFhY9u04mKaUZQI', '1542372043370', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:0cJd75oT_IOnjyXzdygArEC2gbVdjz0w', '1542326842185', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:1O6yKaJpqEZJAe_zWU_vrnjhQfMgpbOx', '1540514930282', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:1rC9oDZVbv-M-jJDKe3U4-PIStbMTOvE', '1541731878169', '{\"username\":\"测试使用\",\"user\":\"test\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:1ZF6EeiDp7orWGRhiG7wgAz5ydoov3V4', '1541667159363', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:2CSfliRMZ_bNJzSYRK6vImsDGTEXbTtP', '1541464999402', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:3FMFZLh9mNqX_5BYmNFrlIhgTzizAKyl', '1540971999777', '{\"username\":\"这个是私人用的测试账号？！\",\"user\":\"test\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:4GmL8pH6dsMRtkNK1wmEWCnlj66bTs9H', '1542499752838', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:5eJ2VZUNRxq4aj57PeQsBSnCtUHrTvXM', '1542187240482', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:5nvxmtZDXMyNvkXbdz_5dn790Vs_AN1J', '1542286343316', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:5ob4SVyccxFAuGHnA28oKWvHOdoOxoVK', '1542353171205', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:68AnDJIKRCEAObEGCgXjrv_SGnu9t0j7', '1542194051056', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:71EzMd1tMv2ish7SB3OlTY3ydNQxUAol', '1540608700699', '{\"username\":\"测试\",\"user\":\"lala\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:7aUXMUjJMZChl7oHStJaeFXMPWFSWVc6', '1541810172124', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:84Mc1V3uwlVNsytiAMZscuDOXLNtTlcj', '1542620997492', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:9pf9TxkIiUN4wC7d_CbtFpTzAPjodyez', '1542161716914', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:avk2Xf_zHRo7iY3pXVRBtvM04Evb1MzY', '1541837524663', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:bSlBKisH8wlCQSXocxQWIlLPjd-dalNm', '1541139111853', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:dD3P9jiRDuU1kQaFfjnu0_MntgbyscaE', '1542251994864', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:DqLWnMUr4oEosc3yPZKaPsuvbQp2DdPf', '1542187408579', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:D_vYulpYX7KH6QVlalO0h2Uu8tSKkzG0', '1541040234497', '{\"username\":\"这个是私人用的测试账号？！\",\"user\":\"test\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:EJdlgTnN0wDes0IOKrmrvU7RncmYYCN3', '1542176577195', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:e_CIDyQ4_FkS51uPccodAvjNF89NhlR3', '1541921465783', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:FQd735PY241KJLYpnQ5RhvieR66wTKTJ', '1541297631825', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:gNuAaRn4HASwatRpaszs04E_jLHxTKKK', '1541312497358', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:gpSmp7AcvNzbtcb7R2w27iqXu5LCf0Jp', '1542283685326', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:gsQ-qvKShauBoen88-6uVyGvedj1gC1W', '1540467634137', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:H-TJW58yPxqTEmfsUL7seQZOrJ_IFBbd', '1542072687491', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:H2QetILHHRwtJ5w_u4jqLsLhmX7914l9', '1542262370009', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:hBpfCl7JNRcpqDvtphY_ndjOjwweS27P', '1542450148501', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:hgzUSnLDEomhDP0jMvGH9ZsUKXOu5ddd', '1540862631520', '{\"username\":\"这个是私人用的测试账号？！\",\"user\":\"test\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:hnCBVg2UbMxlFW6YIVyr3L_1ISPMQw_1', '1540513717046', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:HoTbXEtnCE0uYne3sDa5kshMC9MevDP1', '1542514729504', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:HtPxga9CLbYyYDKKKjLyNCAXgvKS1Di6', '1540630986363', '{\"username\":\"这个是私人用的测试账号？！\",\"user\":\"test\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:i37Yrs0N59tejxjuQifdw7btyon7Afvy', '1541122711759', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:IqXpO9MhE3h3CrGirwqSjR0QPWACql06', '1540522568779', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:jmY0xQGg8eQ50JeKLFJKxJ76ZyyTWcBe', '1542341574091', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:K22MXft-sjawplMHn4wE9-nEhVvKq-6i', '1542340962653', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:KJ2bEmhWRGOY1swPF1LKpWqi1erSPPxL', '1542187514051', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:ksZzrgSgceCYn1RQZmedAnsscqls3yEM', '1541205259201', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:kW3gVxIBSvxXCFtxN2IfVlxh_4ehuDhq', '1542450306598', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:LyrDu6cODNyJuBrVy5wdjI1kiNRKHIT6', '1542244322634', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:MyXI-u0PvNQUs_530lVQbuplP-KY9byx', '1542587119101', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:NgAlhPFqUGAX9RexnROtK-TVMsntfgIS', '1542192069072', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:nkCXUDUG1SZ9mRWu6COfHP3CrrSqizGs', '1542187612478', '{\"username\":\"坑\",\"user\":\"webbing\",\"id\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:nKkZKsIbDF2psiUaQMy5cbbOcv-1-bOx', '1542513697703', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:nQG9N5r_7yFYmWU_yUcYHui1Sq763-5z', '1542194210491', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:O9ldSKSWmIgjYUaFa4WIRBmPJAOHRt2r', '1541904065457', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:oAxT9urAPJiE7frKVstvAcmaBqDRSPWW', '1540556922740', '{\"username\":\"你@好啊\",\"user\":\"koko\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:OpdDMrdqizVakr_UBabxp0KHC_CV1X11', '1542186100273', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:oyjzr4KPOqUZhb7Jv1-5IK6aPotY8ARW', '1540627951852', '{\"username\":\"这个是私人用的测试账号？！\",\"user\":\"test\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:po7F3jAvCvC1_V4btejViUJ2b9dqv6eO', '1542070820225', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:q5jJNr0t_SrEjExE3dtPIbds9ortZ3_s', '1542413067735', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:QAj-BxeINawn53hoqPLifqj83K-5xctq', '1542534268818', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:QChaVF7JZZGKNpUbQ2v1qhT31RxVRvBR', '1542072735692', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:QOuwKhR8MIizrlUcOkGnHOlKrcB9yfwB', '1542185644825', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:R0R4zJUsRhwijEDy0g9tha_TvBBiBHeU', '1542191957137', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:R3MVKWiqJijhF4ojzmRSdIFx9-J7NXFt', '1542348773221', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:Rs9VuW90WcAVttiitXhMKkHSsnfckMMZ', '1542339559443', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:RSFM6v3tZU6XIeiKPOrKwQhjcM2yrA6j', '1542184700469', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:RsFrXs1jucMhI7hm3Tbmf-2XkfMXzgEL', '1541231261747', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:S3stYgNH-9UudPZ-_RdnF8jXVY7Jmws0', '1542503053453', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:s9QwxovBolhtupj9YmwvJ7dMX93KScDH', '1541724617060', '{\"username\":\"测试使用\",\"user\":\"test\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:Sw92yyIEWQNpa2y9dprz3KdJ2AsNUw88', '1540519688058', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:ToHc_Lv_p_P7YRZwCHEt-TB0Z0U_CtpB', '1542197233476', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:U30G-Qy81M0T6rbFpaomrTAzQv6BbG31', '1540544232188', '{\"username\":\"你@好啊\",\"user\":\"koko\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:up885y78ehI6kPWyV_X3og4yLoN-j5mQ', '1542619641735', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:vBdypdOi0UaaXbOOY0PVyXPDSZ6eX6qM', '1541830228129', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:vjhbKCkgAKz4BstQ36Z2vIhdxhiMsl1U', '1542449920945', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:vQliTxnjAicwlrI3rHXUm21U8oieyNlF', '1542348731903', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:vRWEBZYj8umifFBEUUzhwmnfWunq7wrR', '1541236111306', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:Vtvcd725HGcH4a7qPQGJ2THpN1gjp9yj', '1542109475036', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:WgcvWQX9DlClrkNC4CbuCVosjdBltq1j', '1541658041924', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:WUcUM-aZMXbGvnT8HcCpt-8j-K9nV9qn', '1542434163041', '{\"username\":\"管理员\",\"user\":\"juntao\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:WxqHLpLmTcSLaKHZBXHxWqG9UQ7aXepE', '1540448273562', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:xSd5A2LeQ6AvTSVOkI9pLToHwSEw_S2U', '1542193948630', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:XyBpUORuje0ZYXrM6oa_EPCb1h_j08Kf', '1540538557861', '{\"username\":\"你@好啊\",\"user\":\"koko\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:xZIyLg1EdOiya2UTNeqy7WN5uxAN1zz_', '1540879500864', '{\"username\":\"这个是私人用的测试账号？！\",\"user\":\"test\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:yuXSuYxtNvcvXbgo8jukiYNviM0DmT98', '1540437786797', '{\"username\":\"你好啊\",\"user\":\"koko\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:ZIr5zjni8s5AGQ3K96L-m2QE_wgvCSyw', '1541125256034', '{\"username\":\"顶顶顶顶顶\",\"user\":\"test12\",\"id\":16}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:Zj2Qo0SEZJ7Ge2F5Kl3kCBxZeoYmxFUC', '1541753629193', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:ZZCinp4SFCJXOA6US9wMj5Euo9P5dTmH', '1542341258417', '{\"username\":\"测试\",\"user\":\"test\",\"id\":2}');

-- ----------------------------
-- Table structure for `consjuntao`
-- ----------------------------
DROP TABLE IF EXISTS `consjuntao`;
CREATE TABLE `consjuntao` (
  `coneventid` int(11) NOT NULL AUTO_INCREMENT,
  `coneventdate` datetime DEFAULT NULL COMMENT '添加消费事件时间',
  `coneventcontent` varchar(255) DEFAULT NULL COMMENT '消费事件内容',
  `coneventmoney` varchar(255) DEFAULT NULL COMMENT '消费/收入金额',
  `conevent` int(11) DEFAULT '20' COMMENT '判断是收入还是支出，20代表支出，21代表收入',
  `coneventavatar` varchar(255) DEFAULT '' COMMENT '消费种类对应的图片url地址',
  `userid` int(11) DEFAULT NULL COMMENT '对应user里面的id',
  `conkind` int(11) DEFAULT NULL COMMENT '消费用途',
  PRIMARY KEY (`coneventid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of consjuntao
-- ----------------------------
INSERT INTO `consjuntao` VALUES ('1', '2018-11-14 15:12:13', '工资收入', '3282', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '1', '2');
INSERT INTO `consjuntao` VALUES ('2', '2018-11-14 15:12:44', '转账到支付宝', '0', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '1', '2');
INSERT INTO `consjuntao` VALUES ('3', '2018-11-14 15:13:26', '支付宝转账到农业银行卡--手续费', '0.1', '20', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '1', '2');
INSERT INTO `consjuntao` VALUES ('4', '2018-11-14 20:09:10', '微信余额', '35', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '1', '2');
INSERT INTO `consjuntao` VALUES ('5', '2018-11-14 20:11:17', '还款这个月的花呗', '651', '20', 'http://120.78.75.213:8080/imgs/ideabox_huabei.jpg', '1', '7');
INSERT INTO `consjuntao` VALUES ('6', '2018-11-14 20:54:34', '本月存款1000', '1000', '20', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '1', '2');
INSERT INTO `consjuntao` VALUES ('7', '2018-11-15 08:07:51', '早餐，，肠粉', '3', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('8', '2018-11-15 12:13:20', '中午吃饭', '12', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('9', '2018-11-15 20:41:13', '去老广吃晚餐', '55', '20', 'http://120.78.75.213:8080/imgs/ideabox_huabei.jpg', '1', '7');
INSERT INTO `consjuntao` VALUES ('10', '2018-11-16 08:04:50', '早餐，花呗给钱', '0', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('11', '2018-11-16 13:56:24', '中午长桥吃饭', '0', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('12', '2018-11-16 18:19:06', '晚餐在李记吃饭', '17', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('13', '2018-11-16 18:25:35', '风油精加皮炎平', '18', '20', 'http://120.78.75.213:8080/imgs/ideabox_daily.jpg', '1', '3');
INSERT INTO `consjuntao` VALUES ('14', '2018-11-17 08:09:51', '这两天吃饭花费的钱', '50', '20', 'http://120.78.75.213:8080/imgs/ideabox_huabei.jpg', '1', '7');
INSERT INTO `consjuntao` VALUES ('15', '2018-11-17 09:04:44', '早餐，，花呗', '0', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('16', '2018-11-17 12:02:06', '刷单收入', '30', '21', 'http://120.78.75.213:8080/imgs/ideabox_wechat.jpg', '1', '9');
INSERT INTO `consjuntao` VALUES ('17', '2018-11-17 12:19:18', '中午长桥吃饭-花呗', '0', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('18', '2018-11-17 17:44:51', '晚餐，花呗', '0', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('19', '2018-11-17 17:45:04', '买饮料', '3', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('20', '2018-11-18 08:25:48', '还之前吃饭吃饭的钱', '27', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('21', '2018-11-18 17:28:05', '早餐', '3', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('22', '2018-11-18 17:28:27', '午餐，肠粉', '6', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');
INSERT INTO `consjuntao` VALUES ('23', '2018-11-18 17:50:16', '晚餐', '10', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '1', '4');

-- ----------------------------
-- Table structure for `constest`
-- ----------------------------
DROP TABLE IF EXISTS `constest`;
CREATE TABLE `constest` (
  `coneventid` int(11) NOT NULL AUTO_INCREMENT,
  `coneventdate` datetime DEFAULT NULL COMMENT '添加消费事件时间',
  `coneventcontent` varchar(255) DEFAULT NULL COMMENT '消费事件内容',
  `coneventmoney` varchar(255) DEFAULT NULL COMMENT '消费/收入金额',
  `conevent` int(11) DEFAULT '20' COMMENT '判断是收入还是支出，20代表支出，21代表收入',
  `coneventavatar` varchar(255) DEFAULT '' COMMENT '消费种类对应的图片url地址',
  `userid` int(11) DEFAULT NULL COMMENT '对应user里面的id',
  `conkind` int(11) DEFAULT NULL COMMENT '消费用途',
  PRIMARY KEY (`coneventid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of constest
-- ----------------------------
INSERT INTO `constest` VALUES ('1', '2018-11-08 16:43:11', '发工资', '3010', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '2');
INSERT INTO `constest` VALUES ('2', '2018-11-08 16:43:46', '去看电影', '50', '20', 'http://120.78.75.213:8080/imgs/ideabox_fun.jpg', '2', '6');
INSERT INTO `constest` VALUES ('3', '2018-11-08 16:44:04', '去西餐厅吃饭', '500', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '2', '4');
INSERT INTO `constest` VALUES ('4', '2018-11-08 16:44:18', '去理发', '100', '20', 'http://120.78.75.213:8080/imgs/ideabox_daily.jpg', '2', '3');
INSERT INTO `constest` VALUES ('5', '2018-11-08 16:44:35', '买洗发露洗衣液等等东西', '200', '20', 'http://120.78.75.213:8080/imgs/ideabox_daily.jpg', '2', '3');
INSERT INTO `constest` VALUES ('6', '2018-11-08 16:45:34', '突然花了', '2500', '20', 'http://120.78.75.213:8080/imgs/ideabox_fun.jpg', '2', '6');
INSERT INTO `constest` VALUES ('7', '2018-11-08 16:46:06', '彩票中奖', '100', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '2');
INSERT INTO `constest` VALUES ('8', '2018-11-09 11:39:12', '1', '100', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '2');
INSERT INTO `constest` VALUES ('9', '2018-11-09 11:43:50', '2', '22', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '4');
INSERT INTO `constest` VALUES ('10', '2018-11-09 11:43:54', '3', '22', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '5');
INSERT INTO `constest` VALUES ('11', '2018-11-09 11:39:38', '4', '22', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '1');
INSERT INTO `constest` VALUES ('12', '2018-11-09 11:43:59', '5', '22', '20', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '6');
INSERT INTO `constest` VALUES ('13', '2018-11-09 16:58:27', '测试测试', '120', '21', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '2');
INSERT INTO `constest` VALUES ('14', '2018-11-09 16:59:18', '测试', '123', '21', 'http://120.78.75.213:8080/imgs/ideabox_daily.jpg', '2', '3');
INSERT INTO `constest` VALUES ('15', '2018-11-09 17:00:36', '测试', '123', '21', 'http://120.78.75.213:8080/imgs/ideabox_daily.jpg', '2', '3');
INSERT INTO `constest` VALUES ('16', '2018-11-09 17:01:14', '测试11111', '111', '20', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '2', '2');
INSERT INTO `constest` VALUES ('17', '2018-11-09 17:02:00', '消费', '200', '20', 'http://120.78.75.213:8080/imgs/ideabox_traffic.jpg', '2', '5');
INSERT INTO `constest` VALUES ('18', '2018-11-09 17:10:48', 'turanhouru', '100', '21', 'http://120.78.75.213:8080/imgs/ideabox_traffic.jpg', '2', '5');
INSERT INTO `constest` VALUES ('19', '2018-11-10 11:20:39', '测试', '200', '20', 'http://120.78.75.213:8080/imgs/ideabox_huabei.jpg', '2', '7');
INSERT INTO `constest` VALUES ('20', '2018-11-10 11:22:31', '去长桥吃饭', '12', '20', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '2', '4');
INSERT INTO `constest` VALUES ('21', '2018-11-10 11:32:06', '测试', '123', '20', 'http://120.78.75.213:8080/imgs/ideabox_fun.jpg', '2', '6');
INSERT INTO `constest` VALUES ('22', '2018-11-13 19:14:57', '嫖娼', '499', '21', 'http://120.78.75.213:8080/imgs/ideabox_fun.jpg', '2', '6');

-- ----------------------------
-- Table structure for `consumptionkind`
-- ----------------------------
DROP TABLE IF EXISTS `consumptionkind`;
CREATE TABLE `consumptionkind` (
  `kindid` int(11) NOT NULL AUTO_INCREMENT,
  `kindname` varchar(255) DEFAULT NULL COMMENT '消费分类，',
  `kindurl` varchar(255) NOT NULL COMMENT '种类对应的url图片地址',
  `iconf` varchar(255) DEFAULT NULL COMMENT '图标',
  PRIMARY KEY (`kindid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of consumptionkind
-- ----------------------------
INSERT INTO `consumptionkind` VALUES ('1', '网购消费', 'http://120.78.75.213:8080/imgs/ideabox_online.jpg', '/icon/k1.png');
INSERT INTO `consumptionkind` VALUES ('2', '银行卡转账', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '/icon/k2.png');
INSERT INTO `consumptionkind` VALUES ('3', '生活日常用品', 'http://120.78.75.213:8080/imgs/ideabox_daily.jpg', '/icon/k3.png');
INSERT INTO `consumptionkind` VALUES ('4', '吃饭消费', 'http://120.78.75.213:8080/imgs/ideabox_eat.jpg', '/icon/k4.png');
INSERT INTO `consumptionkind` VALUES ('5', '交通消费', 'http://120.78.75.213:8080/imgs/ideabox_traffic.jpg', '/icon/k5.png');
INSERT INTO `consumptionkind` VALUES ('6', '出去玩耍消费', 'http://120.78.75.213:8080/imgs/ideabox_fun.jpg', '/icon/k6.png');
INSERT INTO `consumptionkind` VALUES ('7', '花呗还款', 'http://120.78.75.213:8080/imgs/ideabox_huabei.jpg', '/icon/k7.png');
INSERT INTO `consumptionkind` VALUES ('8', '支付宝收款', 'http://120.78.75.213:8080/imgs/ideabox_aipay.jpg', '/icon/k7.png');
INSERT INTO `consumptionkind` VALUES ('9', '微信收款', 'http://120.78.75.213:8080/imgs/ideabox_wechat.jpg', '/icon/k7.png');

-- ----------------------------
-- Table structure for `conswebbing`
-- ----------------------------
DROP TABLE IF EXISTS `conswebbing`;
CREATE TABLE `conswebbing` (
  `coneventid` int(11) NOT NULL AUTO_INCREMENT,
  `coneventdate` datetime DEFAULT NULL COMMENT '添加消费事件时间',
  `coneventcontent` varchar(255) DEFAULT NULL COMMENT '消费事件内容',
  `coneventmoney` varchar(255) DEFAULT NULL COMMENT '消费/收入金额',
  `conevent` int(11) DEFAULT '20' COMMENT '判断是收入还是支出，20代表支出，21代表收入',
  `coneventavatar` varchar(255) DEFAULT '' COMMENT '消费种类对应的图片url地址',
  `userid` int(11) DEFAULT NULL COMMENT '对应user里面的id',
  `conkind` int(11) DEFAULT NULL COMMENT '消费用途',
  PRIMARY KEY (`coneventid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of conswebbing
-- ----------------------------
INSERT INTO `conswebbing` VALUES ('1', '2018-11-13 17:28:55', '13号早餐', '4.5', '20', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '3', '2');
INSERT INTO `conswebbing` VALUES ('2', '2018-11-13 17:29:07', '13号午饭', '12', '20', 'http://120.78.75.213:8080/imgs/ideabox_blank.jpg', '3', '2');

-- ----------------------------
-- Table structure for `monthmoneyjuntao`
-- ----------------------------
DROP TABLE IF EXISTS `monthmoneyjuntao`;
CREATE TABLE `monthmoneyjuntao` (
  `dateId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '月账单id',
  `datemonth` varchar(255) DEFAULT NULL COMMENT '月份',
  `datemoney` varchar(255) DEFAULT NULL COMMENT '月账单收入/支出，显示为（+/-）金额',
  `moneyspend` varchar(255) DEFAULT '0' COMMENT '支出金额',
  `moneyincome` varchar(255) DEFAULT '0' COMMENT '收入金额',
  PRIMARY KEY (`dateId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of monthmoneyjuntao
-- ----------------------------
INSERT INTO `monthmoneyjuntao` VALUES ('1', '2018-11', '1492', '-1855', '3347');

-- ----------------------------
-- Table structure for `monthmoneytest`
-- ----------------------------
DROP TABLE IF EXISTS `monthmoneytest`;
CREATE TABLE `monthmoneytest` (
  `dateId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '月账单id',
  `datemonth` varchar(255) DEFAULT NULL COMMENT '月份',
  `datemoney` varchar(255) DEFAULT NULL COMMENT '月账单收入/支出，显示为（+/-）金额',
  `moneyspend` varchar(255) DEFAULT '0' COMMENT '支出金额',
  `moneyincome` varchar(255) DEFAULT '0' COMMENT '收入金额',
  PRIMARY KEY (`dateId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of monthmoneytest
-- ----------------------------
INSERT INTO `monthmoneytest` VALUES ('1', '2018-11', '223', '-4018', '4241');

-- ----------------------------
-- Table structure for `monthmoneywebbing`
-- ----------------------------
DROP TABLE IF EXISTS `monthmoneywebbing`;
CREATE TABLE `monthmoneywebbing` (
  `dateId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '月账单id',
  `datemonth` varchar(255) DEFAULT NULL COMMENT '月份',
  `datemoney` varchar(255) DEFAULT NULL COMMENT '月账单收入/支出，显示为（+/-）金额',
  `moneyspend` varchar(255) DEFAULT '0' COMMENT '支出金额',
  `moneyincome` varchar(255) DEFAULT '0' COMMENT '收入金额',
  PRIMARY KEY (`dateId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of monthmoneywebbing
-- ----------------------------
INSERT INTO `monthmoneywebbing` VALUES ('3', '2018-11', '-16', '-16', '0');

-- ----------------------------
-- Table structure for `todojuntao`
-- ----------------------------
DROP TABLE IF EXISTS `todojuntao`;
CREATE TABLE `todojuntao` (
  `todoeventid` int(11) NOT NULL AUTO_INCREMENT,
  `todoeventdate` datetime DEFAULT NULL COMMENT '添加todo事件时间',
  `todoeventcontent` varchar(255) DEFAULT NULL COMMENT 'todo事件内容',
  `todoeventstatue` int(11) DEFAULT '10' COMMENT '时间的状态，10代表活动，11代表过期',
  `userid` int(11) DEFAULT NULL COMMENT '对应todouser里面的id',
  PRIMARY KEY (`todoeventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todojuntao
-- ----------------------------

-- ----------------------------
-- Table structure for `todotest`
-- ----------------------------
DROP TABLE IF EXISTS `todotest`;
CREATE TABLE `todotest` (
  `todoeventid` int(11) NOT NULL AUTO_INCREMENT,
  `todoeventdate` datetime DEFAULT NULL COMMENT '添加todo事件时间',
  `todoeventcontent` varchar(255) DEFAULT NULL COMMENT 'todo事件内容',
  `todoeventstatue` int(11) DEFAULT '10' COMMENT '时间的状态，10代表活动，11代表过期',
  `userid` int(11) DEFAULT NULL COMMENT '对应todouser里面的id',
  PRIMARY KEY (`todoeventid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todotest
-- ----------------------------
INSERT INTO `todotest` VALUES ('1', '2018-11-14 09:45:23', '啦啦啦啦 545454sddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsc', '11', '2');
INSERT INTO `todotest` VALUES ('2', '2018-11-14 10:08:32', 'ssss dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '11', '2');
INSERT INTO `todotest` VALUES ('3', '2018-11-14 10:31:14', 'cehsicehi cbe测试过户到户的呼唤度哈素海读好书都会和督查uhuhcuhuhwuhuhwduhuhacahchachauhuhcuhacuha哈戳戳昏昏沉沉', '11', '2');
INSERT INTO `todotest` VALUES ('4', '2018-11-14 10:14:24', 'ceshi', '11', '2');
INSERT INTO `todotest` VALUES ('5', '2018-11-14 10:14:26', 'cejo', '10', '2');

-- ----------------------------
-- Table structure for `todowebbing`
-- ----------------------------
DROP TABLE IF EXISTS `todowebbing`;
CREATE TABLE `todowebbing` (
  `todoeventid` int(11) NOT NULL AUTO_INCREMENT,
  `todoeventdate` datetime DEFAULT NULL COMMENT '添加todo事件时间',
  `todoeventcontent` varchar(255) DEFAULT NULL COMMENT 'todo事件内容',
  `todoeventstatue` int(11) DEFAULT '10' COMMENT '时间的状态，10代表活动，11代表过期',
  `userid` int(11) DEFAULT NULL COMMENT '对应todouser里面的id',
  PRIMARY KEY (`todoeventid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todowebbing
-- ----------------------------
INSERT INTO `todowebbing` VALUES ('1', '2018-11-13 17:31:57', '上班摸鱼', '10', '3');
INSERT INTO `todowebbing` VALUES ('2', '2018-11-13 17:32:07', '再次摸鱼', '10', '3');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'todoid',
  `username` varchar(255) DEFAULT NULL COMMENT 'todo用户名',
  `password` varchar(255) DEFAULT NULL COMMENT 'todo用户密码',
  `account` varchar(255) DEFAULT NULL COMMENT '用户账号，只能英文加数字，用于登录',
  `todosqlfm` varchar(255) DEFAULT NULL COMMENT '用于创建对应的数据库表，按照账户+todo 前缀生成',
  `monthsqlfm` varchar(255) DEFAULT NULL COMMENT '月收入表',
  `consqlfm` varchar(255) DEFAULT NULL COMMENT '判断对应的消费记录数据库表',
  `moment` datetime DEFAULT NULL COMMENT '用户注册时间',
  `avator` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `todomanage` int(11) DEFAULT '0' COMMENT '判断是否为管理员，0代表否，1代表是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '管理员', 'e10adc3949ba59abbe56e057f20f883e', 'juntao', 'todojuntao', 'monthmoneyjuntao', 'consjuntao', '2018-11-08 16:39:28', 'd5jr0mqpjt1541666367986.jpg', '1');
INSERT INTO `users` VALUES ('2', '测试', 'e10adc3949ba59abbe56e057f20f883e', 'test', 'todotest', 'monthmoneytest', 'constest', '2018-11-08 16:40:27', '2brnxybtjj1541666427128.jpg', '0');
INSERT INTO `users` VALUES ('3', '坑', 'a2b027a635144d2aa22309192852ac8e', 'webbing', 'todowebbing', 'monthmoneywebbing', 'conswebbing', '2018-11-13 17:26:23', '3ywd1c8v3f1542101183233.jpg', '0');
