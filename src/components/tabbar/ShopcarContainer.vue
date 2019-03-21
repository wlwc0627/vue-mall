<template>
  <div class="shopcar-container">
    <div class="mui-card" v-for='(item, index) in itemArr' :key='index'>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" >
          <mt-switch
            v-model="$store.getters.getGoodsSelected[item.id]"
            @change='handleChange(item.id, $store.getters.getGoodsSelected[item.id])'
          ></mt-switch>
          <img :src="item.img">
          <div class="info">
          <p class="title">{{ item.title }}</p>
            <div class="operate">
              <p class="price">{{ item.newprice }}</p>
              <carNumberBox :goodsCount='$store.getters.getGoodsCount[item.id]' :goodsId="item.id" />
              <p class="delete" @click='remove(item.id, index)'>删除</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <p class="header">总计(不含运费):</p>
            <p class="content">
              已勾选商品 
              <span>{{ $store.getters.getGoodsCountAndPrice.count }}</span>
               件，
              总价 
              <span>￥{{ $store.getters.getGoodsCountAndPrice.price }}</span>
               元
            </p>
          </div>
          <mt-button type='danger'>去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carNumberBox from '@/components/common/carNumberBox'
export default {
  name: 'ShopcarContainer',
  data () {
    return {
      idArr: [],
      itemArr: []
    }
  },
  components: {
    carNumberBox
  },
  mounted () {
    this.getCarList()
  },
  methods: {
    getCarList () {
      this.$store.state.car.forEach(item => {
        this.idArr.push(item.id)
      })
      this.$axios.get('/api/shopcarlist.json').then(res => {
        for (let i=0; i<this.idArr.length; i++) {
          this.itemArr.push(res.data.data[this.idArr[i]])
        }
      })
    },
    remove (id, index) {
      this.itemArr.splice(parseInt(index), 1)
      this.$store.commit('removeFromCar', id)
    },
    handleChange (id, val) {
      this.$store.commit('switchChanged', {
        id,
        selected: val
      })
    }
  }
}
</script>

<style scoped lang='stylus'>
.mui-card-content-inner
  padding: 15px 20px
  display: flex
  justify-content: space-around
  align-items: center
  img
    width: 60px
    height: 60px
    margin-left: 6px
  .info
    padding: 5px 10px
    margin-left: 6px
    .title
      font-size: 14px
      color: #000
      font-weight: bold
      line-height: 16px
    .operate
      display: flex
      justify-content: space-around
      align-items: center
      margin-top: 10px
      p
        height: 30px
        line-height: 30px
        &.price
          color: #e93322
          font-weight: bold
        &.delete
          font-size: 13px
          color: rgb(0, 191, 255)
.left
  .header
    font-size: 18px
    color: #000
    line-height: 30px
    font-weight: bold
  .content
    font-size: 15px
    color: #333
    line-height: 20px
    span
      color: #e92322
      font-size: 24px
      font-weight: bold
</style>
