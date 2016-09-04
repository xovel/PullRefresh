# PullRefresh

原生JS实现移动端的下拉刷新操作。不多说，直接上图。

### 演示

[移动端下拉刷新操作](http://xovel.cn/garden/demo/pull-refresh.html)

~~大图杀猫~~

![动图演示](https://raw.githubusercontent.com/xovel/PullRefresh/master/vendors/demo.gif)

### 项目文件

```text
├─css
│ └─layout.css          样式文件
├─js
│ └─pullrefresh.js      JS文件
├─vendors
│ └─demo.gif            演示图
├─index.html            演示页面
├─LICENSE               协议
└─README.md             项目说明
```

### 说明

- 为何要做这样的一个页面？
> 一方面熟悉GIT的操作，另一方面对下拉刷新操作做一个简单的了解与演示。

- 为何采用原生JS进行实现？
> 原生JS纯净。本项目仅作演示，实际应用时不建议参考。~~jQuery/Zepto有大量实现此需求的插件。~~

### 兼容性

本项目采用了现代浏览器的内置函数进行功能的实现，所使用的具体方法如下：

- CSS3选择器`querySelector`/`querySelectorAll`
- CSS3动画`animation`
- 事件侦听`addEventListener`
- 触屏事件`touchstart`/`touchmove`/`touchend`

支持以上方法的浏览器均有效果。详情请自行参阅[Can I Use](http://caniuse.com/)。

已测试通过的浏览器：

- QQ浏览器 v9.4.1 内核 Chromium/47.0.2526.80
- FireFox v33.1.1
- 微信移动端自带浏览器 Android v6.3.22

### 可改进的地方

- [ ] 有固定头部的下拉刷新
- [ ] 底部上拉加载更多
- [ ] 加入图标*符合现代审美*

### 更新日志

- 2016-09-02 加入图标
- 2016-07-24 代码实现
- 2016-07-23 结构搭建
- 2016-07-22 项目初始化

