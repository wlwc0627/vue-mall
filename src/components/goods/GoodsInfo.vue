<template>
  <div class="info-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :lunbotuList='lunbotu'></Swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品价格</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2399</del>&nbsp;&nbsp;&nbsp;&nbsp;
            销售价：<span class="now_price">￥2199</span>
          </p>
          <p class="number">
            购买数量:&nbsp;&nbsp;<NumberBox />
          </p>
        </div>
      </div>
      <div class="mui-card-footer">
        <p>
          <mt-button type="primary" size='small'>立即购买</mt-button>&nbsp;&nbsp;&nbsp;&nbsp;
          <mt-button type='danger' size='small'>加入购物车</mt-button>
        </p>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods-detail">
          <p>商品货号:</p>
          <p>库存情况:</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type='primary' size='large' plain>图文介绍</mt-button>
        <mt-button type='danger' size='large' plain>商品评价</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../common/Swiper'
import NumberBox from '../common/NumberBox'
export default {
  name: 'GoodsInfo',
  data () {
    return {
      id: this.$route.params.id,
      lunbotuData: [],
      lunbotu: [],
      goodsDetail: []
    }
  },
  components: {
    Swiper,
    NumberBox
  },
  created () {
    this.getGoodsInfo()
    this.getGoodsDetail()
  },
  methods: {
    getGoodsInfo () {
      let that = this
      this.$axios.get('/api/goods.json').then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          that.lunbotuData[i] = res.data.data[i].src
        }
        this.lunbotu = this.lunbotuData[parseInt(this.id)]
      }).catch(err => {
        console.log(err)
      })
    },
    getGoodsDetail () {
      this.$axios.get('/api/goodsdetail.json').then(res => {
        this.goodsDetail = res.data.data
        console.log(this.goodsDetail)
      })
    }
  }
}
</script>

<style scoped lang='stylus'>
.info-container
  background-color: #eee
  overflow: hidden
.mui-card-content-inner
  font-size: 16px
  .price
    height: 26px
    line-height: 26px
    margin-bottom: 5px
    .now_price
      font-weight: bold
      color: #e92322
  .number
    height: 33px
    line-height: 33px
    margin-bottom: 10px
.mui-card-content
  .goods-detail
    p
      font-size: 16px
      line-height: 26px
      height: 26px
.mui-card-footer
  display: block
  .mint-button
    margin-top: 10px
</style>
