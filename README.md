
#### 项目介绍
这是一个基于node.js koa2 的 一个web项目，里面暂时就添加了两个功能：todo以及consump（月账单）。当然也添加了管理员部分，但管理员只能修改用户的账号密码，不能做其他操作。

#### 软件架构
登录和注册部分采用MD5加密，以及在注册成功后，会生成对应的数据库表，修改账号密码同样操作数据库表。todo部分，是对对应的数据库进行增删查改，consump 部分则添加了echart的图像，显得更加精致。


#### 安装教程

1. npm install
若显示失败，则删除package-lock.json文件即可，我的node开发环境是10.X，若显示版本太低，只需升级node版本
2. node index
运行项目


