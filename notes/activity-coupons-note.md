市场后台 奖学金和活动管理笔记

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

5点14分之后 我整理mac笔记本文件
6点07 分，看看修饰器

6点37分
学习中间件，搭建代码，
目标： 理清思路，顺便看看node,细节部分

首先入口文件
app.js 
看得我觉得头晕，头晕，是不是还是基础太差的缘故

6月2号
招生商品管理，暂时已经没有什么问题了。
我需要理清下，活动管理的代码，仔细，仔细，再仔细。梳理，采用最好的方式，并且，注意细节。


