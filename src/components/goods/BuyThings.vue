<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img :src="goodsData.img">
          <div>
            <p class="title">{{ goodsData.title }}</p>
            <p class="price">￥{{ goodsData.newprice }}×{{ count }}</p>
            <p class="count">订单合计:￥{{ totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-button type='primary' size='large' plain @click='payment'>支付</mt-button>
          <mt-button type='danger' size='large' plain @click='cancel'>取消</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'BuyThings',
  data () {
    return {
      id: this.$store.state.paymoney[0].id,
      count: this.$store.state.paymoney[0].count,
      goodsData: [],
      totalPrice: ''
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$axios.get('/api/shopcarlist.json').then(res => {
        for (let i=0; i< res.data.data.length; i++) {
          if (i === parseInt(this.id)) {
            this.goodsData = res.data.data[i]
          }
        }
        this.totalPrice = parseInt(this.goodsData.newprice) * parseInt(this.count)
      })
    },
    payment () {
      Toast('支付成功！')
    },
    cancel () {
      this.$router.go(-1)
      this.$store.commit('cancelPayment')
    }
  }
}
</script>

<style lang='stylus' scoped>
.mui-card-content-inner
  display: flex
  justify-content: space-between
  align-items: center
  div
    margin-left: 10px
    p
      line-height: 18px
      &.title
        font-size: 16px
        color: #000
        font-weight: bold
      &.price
        font-size: 14px
        color: #666
        text-align: right
        line-height: 22px
      &.count
        font-size: 16px
        font-weight: bold
        color: #e92322
        line-height: 24px
        text-align: right
  img
    width: 60px
    height: 60px
  .mint-button--danger
    margin-left: 20px
</style>
