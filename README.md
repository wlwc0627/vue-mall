# vmall

> A Vue.js project

## 用(传统方式)命令行把修改过后的代码上传到GitHub
1、git add .
2、git commit -m '提交信息'
3、git push

## 制作首页App组件
1、完成 Header 区域，使用的是Mint-UI中的Header组件(部分引入)
2、制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
  + 在制作 购物车 小图标时，操作会相对多一些
  + 先把 扩展图标 css 样式，拷贝到项目中
  + 拷贝 扩展字体 ttf 文件，到项目中
  + 为 购物车 小图标添加如下样式 'mui-icon-extra mui-icon-extra-cart'
3、要在 中间区域 放置一个 router-view 来展示路由匹配到的组件

## 在 router 文件中，默认的匹配路由的样式为 router-link-active, 此时我们可以在 routers 后添加一个参数：linkActiveClass 用来更改默认路由的样式

## 改造 tabbar 为 router-link

## 设置路由高亮(更改默认路由的样式)

## 点击 tabbar 中对应的路由链接，展示相匹配的路由组件

## 引用 fastclick 插件，解决移动端 300ms 延迟问题

## 制作首页轮播图布局

## 加载首页轮播图数据

## 改造 九宫格 为 六宫格 样式

## 改造 新闻资讯 路由链接(由 router-link 代替 a)

## 新闻资讯 页面制作
1、绘制页面，使用 MUI 中的 media-list.html
2、使用 axios 来获取数据
3、将获取到的数据渲染到页面(数据来源：https://www.apiopen.top/journalismApi)

## 实现 新闻列表 单击跳转到 新闻详情 页面
1、将新闻列表的每一项改造为 router-link 并在跳转的同时传递一个 参数(或id)
2、创建 新闻详情 的组件页面 NewsInfo.vue
3、在 路由模块 中，将 新闻详情 的路由地址和组件页面对应起来

## 将 图片分享 改造为对应的路由链接，并制作相应的页面

## 制作 图片列表 组件页面结构并美化样式
1、制作 顶部导航条，参考 MUI 中的 example 目录下的 tab-top-webview-main，需去掉 slide 的 full-screen 属性
2、制作底部的 图片列表
## 制作 顶部滑动条 的坑！！！
1、需去掉 id='slider' 的 full-screen 类属性
2、滑动条无法正常滑动，通过检查官方文档，这是一个 JS 组件，需要被初始化：
  + 导入 mui.js
  + 调用官方提供的 方式 去初始化 
  ```
    mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  ```