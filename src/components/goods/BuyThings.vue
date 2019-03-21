<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img src="http://imgservice.suning.cn/uimg1/b2c/image/aRCbov_5PyZRyIQFZ2FBdg.jpg_800w_800h_4e" alt="">
          <div>
            <p class="title">小米9 6GB+128GB 深空灰 移动联通电信全网通4G手机</p>
            <p class="price">￥2999×1</p>
            <p class="count">订单合计:￥2999</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-button type='primary' size='large' plain>支付</mt-button>
          <mt-button type='danger' size='large' plain>取消</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyThings'
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
