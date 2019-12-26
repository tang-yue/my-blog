node 连接 mysql 数据库

[连接数据库参考链接](https://www.cnblogs.com/zhongweiv/p/nodejs_mysql.html#mysql_ins)

最后选择koa 加 mysql

https://juejin.im/post/5d0ee268f265da1bc14b3215


https://juejin.im/post/5d0ee268f265da1bc14b3215


express + mysql 参考下面两篇博文

https://juejin.im/post/5d18e05a6fb9a07ede0b5998

https://www.zhihu.com/search?type=content&q=node%E5%86%99%E6%8E%A5%E5%8F%A3


接着又安装了下面这些包

body-parser
cookie-parser
cors
express
multer
mysql


github node + express 项目

https://github.com/fengshi123/express_project/blob/master/dao/userDao.js


查询所有轮播图接口

关于遇到的一个问题：
使用公司中间层，连接 mysql 数据库。 报错。

### 问题一：

```
'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
```

解决方案：

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
-- or
CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';
-- then
FLUSH PRIVILEGES;
```

重新启动：
brew services restart mysql

### 问题二：

```
Access denied for user ''@'localhost' (using password: NO)
```

完全是node.js 连接数据库出错的原因。重现


mysql 如何做到更新接口，传过来就更新，如果不传就不更新呢。


创建数据表 mysql 语法

```
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

id   另一个表的id

1     4

2     5

3     3

4     2

[
	{id: 4},
	{},
	{},
]

### 问题三：

下面这条插入语法究竟是哪里不对了呢.

```
let addSql = 'INSERT INTO carousel_order(order) VALUES(?)';
```

我觉得应该是order 可能是关键词的原因。

Sequelize 用法 中文 翻译网站， 以及 api 详解

https://itbilu.com/nodejs/page-1.html


https://github.com/sequelize/sequelize

https://github.com/demopark/sequelize-docs-Zh-CN  中文文档

关于如何用 sequelize  关联其他表

findAll 的用法   无轮我怎么写，都关联不上去

多表联查   api  https://sequelize.readthedocs.io/en/latest/docs/associations/

go 文档  http://gorm.book.jasperxu.com/crud.html#q


多联表的几个 api

BelongsTo HasOne HasMany BelongsToMany 


我现在最主要要做的是总结。

关于node.js 的问题
a.js
```
module.exports = {
  a: a,
  b: b
}
```

b.js
```
const obj = require('./a.js')

// 但是此时返现obj 是空对象
```

我还以为node.js 出 bug了，  循环加载模块。


遇到一个问题，一个接口单独访问的时候，完全没有问题，但是当频繁使用的时候，返回的数据格式不正确。

都应该用promise 进行返回回调。


遇到问题：

```
BannerModel.update(
	...updates,
	{where: {id: id} }
).then((res) => {
	resolve(res)
}).catch((err) => {
	reject(err)
})
```
上面明明有where 属性，但是控制台一直报错，`Missing where attribute in the options parameter`

批量新增， 批量更新

更新某一条的数据:  body 是一个对象

```
 BannerModel.update(
	body,
	{ where: {id: id} },
).then((res) => {
	resolve(res)
}).catch((err) => {
	reject(err)
})
```


配置前后端项目

https://www.jianshu.com/p/7258a75798c4   部署vsftpd


先启动

然后编辑

vi  /etc/vsftpd/vsftpd.conf


filezilla mac 免费版 下载链接   https://www.macdown.com/mac/2933.html

  useradd ftpuser

  passwd ftpuser

  vpn 会印象到

  eslint 配置参照下面这一篇

  https://hang-hu.github.io/frontend/2019/09/05/use-eslint.html
