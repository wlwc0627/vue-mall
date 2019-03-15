<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='item of lunbotuList' :key="item.id">
        <img :src="item.imgUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeContainer',
  data () {
    return {
      lunbotuList: [{
        id: ' 0001',
        imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
      }, {
        id: '0003',
        imgUrl: 'https://gw.alicdn.com/imgextra/i2/119/O1CN01ATy44X1CkXd7uD5Ke_!!119-0-lubanu.jpg'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
.mint-swipe
  width: 100%
  height: 120px
  .mint-swipe-items-wrap
    .mint-swipe-item
      width: 100%
      height: 0
      padding-bottom: 33%
      img
        width: 100%
.mui-grid-view.mui-grid-9 .mui-table-view-cell
  border-bottom: none
  bottom-left: none
  background: #fff
  width: 33.3%
  img
    width: 60px
    height: 60px
  div
    font-size: 13px
</style>
