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
// 关联表example 如下

```js
const updateCarousel = function (seq, ctx) {
  const id = ctx.params.id;
  var body = ctx.request.body;
  const properties = ['title', 'jump_url', 'img_url', 'status', 'ctime', 'utime']
  return new Promise((resolve, reject) => {
    const BannerModel = init.banner(seq)
    const BannerOrderModel = init.order(seq)

      BannerModel.findAll({
        where: {
          id: id
        }
      }).then((bannerItem) => {
        if(bannerItem[0].status !== body.status) {
          if(body.status === 'ONLINE') {

            const func1 = BannerOrderModel.create({
              turn: id
            })

            const func2 = BannerModel.update(
                body,
                { where: {id: id} },
            )

            Promise.all([func1, func2]).then((res) => {
                console.log(res)
            })

          } else if(body.status === 'OFFLINE') {
            BannerOrderModel.destroy({
              where: {
                turn: id
              }
            }).then(() => {
              console.log('OFFLINE destroy')
              BannerModel.update(
                body,
                { where: {id: id} },
              ).then((res) => {
                console.log('OFFLINE update')
                  resolve(res)
              }).catch((err) => {
                  reject(err)
              })
            })
          }
        } else {
          console.log('update update update')
          BannerModel.update(
            body,
            { where: {id: id} },
          ).then((res) => {
              resolve(res)
          }).catch((err) => {
              reject(err)
          })
        }
      }).catch((err) => {
        reject(err)
      })
    })
}
```