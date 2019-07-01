c关于现在正在用的一些分支

activity
enroll 招生
dev-mail-content-img  邮寄内容添加缩略图
dev-channel-order-export  导出
dev-address-collections  发货地址收集页里需求
dev-activation-muti-search  增加激活码批量查询功能
dev-create-subchannel-id-export  创建子渠道ID并导出


dev-create-subchannel-id-export  为需要提测的后两个需求

dev-later-improve-activity  活动管理迭代   大部分

dev-activity-no-complete-demand 为没有做完的活动管理

新增订单号查询 和 dev-modify-backend-api 在统一个分支上

！！！！！所有的时间戳 多1s问题,, 在活动迭代里面已全部修改完毕


现在可以选择多个小程序了，请问配置的这个小程序是什么意思呢？

activityTemplateMessage[i].firstColor ||
              activityTemplateMessage[i].keyword1 ||
              activityTemplateMessage[i].keyword1Color ||
              activityTemplateMessage[i].keyword2 ||
              activityTemplateMessage[i].keyword2Color ||
              activityTemplateMessage[i].remark ||
              activityTemplateMessage[i].remarkColor ||
              activityTemplateMessage[i].url ||

这段代码应该还有更简介的写法

关于localstorage里，如果这个storage 里的值是时时在变化的。
将取localstorage里的值，写在utils里，会导致，取得到的值，并不是当前所取的值。
而是上一次所取得到的值。



关于 amount  为分的记录。
关于 因切错分支，导致以前记忆没有其他的修改变化，而导致的错误。
关于

将上传到oss 功能，upload ，由以前的两步变成一步。
将原生的from表单，input 文件上传，由以前的一步变成两步。

关于过去我对于细节的注重，真的糟糕的不行

要保持最近的数据始终是最新的

          <Button type="primary" style={{margin: '15px 0 0 20px'}}>
           </Button>


查看下global 表示什么意思

我想不通，为什么这个config.files.size 是会变的， 答案是不变的。
市场后台 奖学金和活动管理笔记
6月16日
遇到一个棘手的问题

                <pre className="pre-upload">{this.state.fileErr}</pre>


6月5日，
活动管理后台笔记开始
1、 适用人群里，按照班级名称搜还是有问题

<FormItem
            label="礼物快递地址"
            className={styles.antFormItem}
            style={{ display: "flex" }}
          >
            {getFieldDecorator("giftUrl", {
              initialValue: activity.giftUrl ? activity.giftUrl : ""
            })(<Input style={{ width: "270%" }} placeholder="请输入" />)}
          </FormItem>


6月10日
我们在全部活动列表页，和创建活动的第一页，都应该完全的清除掉活动cookie值
第二设置cookie值需要严格设置。

先从前向后发送下

去掉的如下
1、
完成家长准备课后发送的消息内容暂时去掉
```
     <div  className={styles.subtitle}>完成家长准备课后发送的消息内容</div>
         {completeClassData&&completeClassData.map((item, index) => (
          <div key={index} style={{marginBottom: '1px'}}>
            邀请
            <Input
              className={styles.inputSty}
              onChange={e => this.inputNum(e)}
              value={item.peopleNum}
            />人
            <Button
              type="primary"
              style={{margin: '0 0 0 17px'}}
              onClick={(item) => this.editTemplateMsg(item)}
            >{item.hasTemplate ? '修改模板消息' : '配置模板消息'}</Button>
            {item.hasTemplate&&<Button
              type="primary"
              style={{margin: '0 0 0 17px'}}
            >预览模板消息</Button>}
            <div
              id={index}
              className={styles.deleteItem}
              onClick={e => this.deleteItem(e)}
            />
          </div>))}
        <Icon
          type="plus"
          className={styles.plusSty}
          style={{ marginTop: '10px' }}
          onClick={e => this.completeClassAdd(e)}
        />
```
2、预览模板消息 功能暂时去掉

3、以前用nextLevel,现在全部替换成preLevel

遇到的问题，所有的localstorage 都是应该要实时取

4月22日 7时30分30秒     1555889430000
1555975830000

1556062230000




画

        <StandardTable
          selectedRows={3}
          loading={loading}
          data={couponsData}
          columns={columns}
          rowKey={record => record.id}
          onChange={this.requestData.bind(this)}
        />







参与人数  numberOfParticipants
成功人数  numberOfSuccessful
带新量    numberOfBringNew
,...termModalData.pagination

wxPubInteractionCustomPosterMediaId

关于选择班级的这部分逻辑，我需要详细的问问产品经理。

[
    {courseGroupId:1, termId: 有值},
    {courseGroupId: 2, termId: 0}, // 年课
    {courseGroupId: 3, termId: 0} // 季课
]

          <span>微信名：</span>
          <span style={{marginRight: "30px"}}>{couponTableData.list[0].nickname}</span>
          <span>用户ID：</span>
          <span>{couponTableData.list[0].userId}</span>

活动管理后台。
到此告一段落，其他的等接口，写出来，再调试。
市场后台 招生管理需求笔记


产品需求: https://lanhuapp.com/web/#/item/project/board?pid=c1970e31-29a8-40c2-82ea-180c7fd06edc


第三次遇到 获取url上的参数，并解析。
window.location.search.substr(1).split('&');

应该还有一个固定的函数，自己好好想想吧。

&#xe731;

icon-return

            <UploadAPI dirname="createActivity/createActivity/" tag="interactiveImg" />



关于奖学金的后续需求，需要问产品的地方。
1、领取时间有效期
2、代金券使用有效期

https://crm.testing.pipacoding.com/educational/recruit/planL1

批量发送奖学金， 有效期时间 是一个时间段？？？？

https://crm.testing.pipacoding.com/educational/recruit/scheduleL1?t=1558408189

https://crm.testing.pipacoding.com/educational/recruit/detailsL1?t=1558408254

local storage

无论是有activityId, 还是没有activityId，其实到了创建内容的这个步骤。都必然的是要经过
创建活动的这个步骤。

关于奖学金的后续，需求部分
关于某个某个用户的奖学金，还是自己单独写接口吧。

5月30日，关于接下来，我所需要学习的一些知识。
（1）
关于这几个后台后端接口，全部都是用中间层，但是我对中间层整套代码的最初搭建却是一无所知。
包括就是简单的看懂搭建框架的代码，我也觉得是吃力。
（2）
看oss，上传，更深层以及更细节的部分。
（3）
默写

列表上的跳转到多少页的功能，可以自己思考一下
