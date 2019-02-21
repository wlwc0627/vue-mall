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