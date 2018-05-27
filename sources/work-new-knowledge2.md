---
2018 年 5月27号开始至今

---

### 上传图片到oss功能的一些思考

[javascript 客户端签名直传](https://help.aliyun.com/document_detail/31925.html?spm=a2c4g.11186623.4.2.eHVzX8)

主要就是参照的上面的代码

* 生命周期函数体现的淋漓尽致

* 将init() 初始化函数 写在DidMout里面。

* 因为一个页面里面多处用到 这个组件，因此，每个组件的里面的Dom的id都是需要不一样的，这个需要通过this.props给传进去

* 在该组件被卸载的时候，即componentWillUnmount，需要将所存储的该页面的图片的url链接地址都给清理掉。

* 关于该组件和我们的大容器相连接的地方，我们直接是写死掉的，和modalForm相连接的。这个部分的存值也是要清理掉的。

代码如下

```


```
