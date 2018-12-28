问题1， 解决，没有滚动条时，背景充满全屏
有滚动条时，背景颜色却没有撑满的问题。

给最外层设置背景颜色的div加样式：
```
// 宽
min-width: max-content;
min-width: -moz-max-content;
// 高
min-height: max-content;
min-width: -moz-max-content;
```