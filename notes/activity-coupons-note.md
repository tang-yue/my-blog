c关于现在正在用的一些分支

市场后台 奖学金和活动管理笔记

6月5日
活动管理后台笔记开始
1、 适用人群里，按照班级名称搜还是有问题

6月10日
我们在全部活动列表页，和创建活动的第一页，都应该完全的清除掉活动cookie值


招生商品管理后台

蓝湖需求链接  https://lanhuapp.com/web/#/item/project/board?pid=c1970e31-29a8-40c2-82ea-180c7fd06edc

这部分需求暂时被砍掉了。

### 总结

看oss，上传，更深层以及更细节的部分。
其实并没有什么好看的，仅仅是一看就会了。

将原生的from表单，input 文件上传，由以前的一步变成两步。

列表上的跳转到多少页的功能，可以自己思考一下

第二设置cookie值需要严格设置。

比如还有访问的时候，如何改成用10080 ,而不是默认的8000。

比如还要学习，layout 部分， 为了用纯react搭建。

需要整理vue， react 的初始框架。

{!loading ? (
  <SiderMenu
    logo={logo}
    // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
    // If you do not have the Authorized parameter
    // you will be forced to jump to the 403 interface without permission
    Authorized={Authorized}
    menuData={handleGetMenuData()}
    collapsed={collapsed}
    location={location}
    onCollapse={this.handleMenuCollapse}
  />
) : null}

window.ga  能够加载出值，  这部分代码究竟是被嵌在哪里呢？

刚刚出现一个错误，unexcepted global 但是之后就消失掉了。

classnames  这样的包，存在有什么意义，因为一般不会用到超过两个class

react-container-query   这个包能起到什么作用

<ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>

// 还有如下的这样的写法
<span className={`${styles.action} ${styles.account}`}>

如果还是用这一套东西，进行搭建，我觉得完全就是换汤，没有换药呀。

let selectedKeys = urlToList(pathname);
    const menuProps = collapsed
      ? {}
      : {
          selectedKeys
        };

// 我不想再看这个了， 去做两道c语言算法题吧，或者去复习以前的笔记。
复习以前的笔记吧，因为这会让我在做下一次需求时，更有信心。

7月15日
今天下午两点要开始新需求。
1、加上跳转功能
2、精简代码，我觉得精简代码部分，这部分有点不太好精简，害怕会删掉些功能
3、删除在commit 前，eslint会校验的一行代码


-----------------------------------><-----><------><-----><---------------------------------

市场后台， 投放费用录入功能

需求链接：  https://confluence.corp.hetao101.com/pages/viewpage.action?pageId=73007267

分支： dev-delivery-fee-entry-function

dev-user-channels-composition  用户量展示

dev-urgent   回传比例部分的紧急需求

待优化部分

确认弹框，展示的时间，可以去掉前面的0

  // const selectChannelType = (v) => {
  //   this.setState({
  //     channelTypeId: v
  //   })
  // }

  // "eslint-plugin-jsx-a11y": "^6.2.3",


getDay()  如果是周日的话，getDay() 仍旧是为0



{
  adminIds: "24",
  billingRules: {
    buyAnnual: 0,
    buyAnnualPercnt: 0,
    completeCourse: 0,
    courseActivation: 1,
    firstSubmit: 0,
    operator: "超级管理员",
    ruleStartTime: "2019-07-31 00:00:00",
    ruleType: "AUTO",
  },
  channelTypeId: 5,
  groupName: "cps",
  id: null,
  isRule: true,
  userId: 1,
}

/////
8月6日

dev-cost-data-display     刘凡的需求，，数据展示二期 分支

dev-fix-bug-user-composition  修复用户量渠道构成 的一个bug

投放录用比 8月12日 上线  即下周一

转化率及ROI数据看板  8月19日 提测 

发货地址收集页面，要增加一个activityId 查询和列表里展示activityId 待上线


