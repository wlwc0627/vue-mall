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
      <div class="mui-card-header">{{ goodsDetail.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span v-show='goodsDetail.oldprice'>市场价：</span><del v-show='goodsDetail.oldprice'>{{ goodsDetail.oldprice }}&nbsp;&nbsp;&nbsp;&nbsp;</del>
            销售价：<span class="now_price">{{ goodsDetail.newprice }}</span>
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
          <p>
            商品货号: {{ goodsDetail.goodsNum }}
          </p>
          <p>
            库存情况: 剩余{{ goodsDetail.remain }}件
          </p>
          <p>
            上架时间: {{ goodsDetail.year }}年{{ goodsDetail.month }}月
          </p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type='primary' size='large' plain @click='goDesc(id)'>图文介绍</mt-button>
        <mt-button type='danger' size='large' plain @click='goComment(id)'>商品评价</mt-button>
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
        this.goodsDetail = res.data.data[parseInt(this.id)]
      })
    },
    goDesc (id) {
      this.$router.push({name: 'DetailPage', params: { id }})
    },
    goComment (id) {
      this.$router.push({name: 'CommentPage', params: { id }})
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
