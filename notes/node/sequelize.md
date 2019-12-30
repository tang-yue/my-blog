一些语法

1、 更新id为1里的所有数据

```
// body 是一个对象
 BannerModel.update(
	body,
	{ where: {id: id} },
).then((res) => {
	resolve(res)
}).catch((err) => {
	reject(err)
})
```

2、清空表后，再批量创建

```
BannerModel.destroy({
        truncate : true,
        cascade: false
    }).then(() => {
           const creates = order.map((item) => {
                return {turn: item}
            })
            BannerModel.bulkCreate(
                creates
            ).then((result) => {
                resolve(result)
            })
        }).catch((err) => {
            reject(err)
        })
```

3、关联表再查询

```
BannerOrderModel.belongsTo(BannerModel, {
          as: 'model',
          foreignKey: 'turn',
          targetKey: 'id'
        })
        BannerOrderModel.findAll({
          include: [ {model: BannerModel, as: 'model'} ],
        }).then((result) => {
          resolve(result)
        })
```