<template>
  <div class="goods-list">
    <router-link tag="div" :to="{name:'GoodsInfo',params:{ id: item.id}}" class="goods-item" v-for='(item,index) in goodsData' :key='index'>
      <img :src="item.img" alt="">
      <p class="title">{{ item.title }}</p>
      <div class="info">
        <p class="price">
          <span class="new">￥{{ item.newprice }}</span>
          <span v-show='item.oldprice' class='old'>￥{{ item.oldprice }}</span>
        </p>
        <p class="sell">
          <span>剩余{{ item.remain }}件</span>
          <span class="hot">{{ item.state }}</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size='large' @click='getMoreGoods'>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'GoodList',
  data () {
    return {
      goodsData: []
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      this.$axios.get('api/goods.json').then(res => {
        this.goodsData = this.goodsData.concat(res.data.data)
      })
    },
    getMoreGoods () {
      this.getGoods()
    }
  }
}
</script>

<style lang='stylus' scoped>
.goods-list
  display: flex
  flex-wrap: wrap
  padding: 5px 10px
  justify-content: space-between
  .goods-item
    width: 49%
    border: 1px solid #ccc
    box-shadow: 0 0 8px #ccc
    margin-bottom: 5px
    padding: 3px
    display: flex
    flex-direction: column
    justify-content: space-between
    img
      width: 100%
    .title
      margin-top: 3px
      font-size: 14px
      font-weight: bold
      color: #000
      line-height: 18px
    .info
      background: #eee
      .price
        height: 24px
        line-height: 24px
        .new
          font-size: 16px
          font-weight: bold
          color: red
        .old
          font-size: 12px
          text-decoration: line-through
          margin-left: 10px
      .sell
        display: flex
        justify-content: space-between
        padding: 5px
        font-size: 12px
        line-height: 14px
        margin: 0
        .hot
          color: #e32922
</style>
