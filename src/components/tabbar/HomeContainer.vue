<template>
  <div>
    <div class="swiper-wrapper">
      <Swiper :lunbotuList='lunbotuList' />
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src='../../assets/images/menu1.png' alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src='../../assets/images/menu2.png' alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <img src='../../assets/images/menu3.png' alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src='../../assets/images/menu4.png' alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src='../../assets/images/menu5.png' alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src='../../assets/images/menu6.png' alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
export default {
  name: 'HomeContainer',
  data () {
    return {
      lunbotuList: []
    }
  },
  components: {
    Swiper
  },
  mounted () {
    this.getImgInfo()
  },
  methods: {
    getImgInfo () {
      this.$axios.get('/api/lunbotu.json').then(res => {
        this.lunbotuList = res.data.data
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.swiper-wrapper
  padding: 0 30px
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
