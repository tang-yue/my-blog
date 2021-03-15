
2017 年 12 月

知识点合集
小知识点

css小知识点

##### tab选项卡的实现

html部分
```
<view class="menu" >
  <text class="{{ current == index ? 'menu-item menu-item-selected':'menu-item'}}" wx:for="{{ navs }}" wx:key="{{ index }}" data-idx= "{{ index }}" bindtap="click"> {{ item }}</text>
</view>
<view class="table" wx:for="{{ contents }}" wx:key="{{ index }}" wx:if="{{ current === index}}">{{ item }}</view>
js

Page({
  data: {
    logs: [],
    navs:['偶遇', '热门', '精华'],
    contents:['偶遇', '热门', '精华'],
    current: 0
  },
  click: function(e) {
    this.setData({
      current: e.currentTarget.dataset.idx
    })
  }
})
```
wxss部分

```
.menu {
  display: flex;
  height: 96rpx;
  background-color: #eaeaea;
}
 .menu-item {
   flex: 1;
   text-align: center;
   line-height: 96rpx;
}
.menu-item-selected {
  border-bottom: 2px solid #3cb29a;
  background-color: #555555;
}
```

##### 自定义弹出模态框的实现

wxml部分
```
<!-- <button class="show-btn" bindtap="showDialogBtn">弹窗</button> -->
<!--弹窗-->
 <view class="modal-mask" bindtap="hideModal" catchtouchmove="preventTouchMove" wx:if="{{showModal}}"></view> 
<view class="modal-dialog" wx:if="{{showModal}}">
  <view class="modal-close" bindtap="onCancel">X</view>
  <view class="modal-title">用户须知</view>
  <view class="modal-content">
    <view>you can write anything that you want to write.</view>
  </view>
  <view><button class="modal-confirm" bindtap="onConfirm">确认按钮</button></view>
</view>
```

wxss部分
```
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.3;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
  font-size: 30rpx;
}
.modal-dialog {
  width: 540rpx; 
  overflow: hidden;
  position: fixed;
  top: 20%;
  left: 0;
  z-index: 9999;
  background-color: #fff;
  margin: -180rpx 105rpx;
}
.modal-dialog .modal-close {
  text-align: right;
  margin-right: 32rpx;
}
.modal-title {
  font-weight: 600;
  font-size: 34rpx;
  color: #030303;
  text-align: center;
}
.modal-content {
  font-size: 30rpx;
  padding: 20rpx 32rpx;
  text-align: left;
}
.modal-close {
  color: #3cb29a;
}
```
js部分
```
Page({
  data: {
    showModal: false,
  },
  onLoad: function () {
    this.showDialogBtn();
  },
  /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  }
})
```

##### 文字垂直水平居中

```
view {
    line-height: 60rpx;
    height: 63rpx;
    width: 62rpx;
    text-align: center;
    vertical-align: middle;
}
```

##### 单/多行文本超出文本框显示省略号

单行
```
.intro {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;        
}
```
多行
```
.book-intro {
    font-size: 28rpx;
    color: #414141;
    height: 160rpx;   // height 是line-height 的4倍 // 有时候需要换成max-height;
    line-height: 40rpx;
    width: 100%;
    margin-top: 10rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;  // 定义几行之后省略号
    -webkit-box-orient: vertical;
}
```

##### 文本如何换行

直接在样式里头加 style="word-break: break-all"


##### 如何做出一条直线的感觉

```
<view class="line"></view>
.line {
    height: 5rpx;
    background: black;
    width: 300rpx;
    margin: 0 20rpx;  // 距离两端的距离
}
```

##### flex 布局文本对齐
```
.text {
    display: flex;
    align-items: baseline;

}
```

##### 不让按钮变形
```
.submit button {
  font-size: 32rpx;
  width: 22%;
  <!-- transform: scale(0.8,0.6);  -->
  color: #fff;
  background-color: #3CB29A;
  line-height: 80rpx;
}
```
##### 复制文本

```
// 加上 selectable 属性
<text class="detail" selectable="true">{{ myAns.comment }}</text>
```
js小知识点


1、微信小程序for循环如何删除其中一个`wx:if="{{ index ! == 3 }}"`。

2、for循环，获取第一个数组。用index来实现。

3、data 属性