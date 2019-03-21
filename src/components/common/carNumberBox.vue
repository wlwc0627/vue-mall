<template>
  <div class="number-container">
    <button class='number-reduce' @click='reduceNumber'>一</button>
    <input type="text" :value='goodsCount' ref='numberbox' class='number-value' @input='countChanged'/>
    <button class="number-add" @click='addNumber'>＋</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'NumberBox',
  props: {
    goodsCount: {
      type: [Number, String],
      default: null
    },
    goodsId: {
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      finalValue: ''
    }
  },
  methods: {
    reduceNumber () {
      if (this.$refs.numberbox.value > 1) {
        this.finalValue = parseInt(this.$refs.numberbox.value) - 1
        this.$refs.numberbox.value = this.finalValue
        this.$store.commit('updateGoodsCount', {
          id: this.goodsId,
          count: this.$refs.numberbox.value
        })
      } else {
        Toast('商品数量已达最小值')
      }
    },
    addNumber () {
      this.finalValue = parseInt(this.$refs.numberbox.value) + 1
      this.$refs.numberbox.value = this.finalValue
      this.$store.commit('updateGoodsCount', {
        id: this.goodsId,
        count: this.$refs.numberbox.value
      })
    },
    countChanged () {
      this.$store.commit('updateGoodsCount', {
        id: this.goodsId,
        count: this.$refs.numberbox.value
      })
    }
  }
}
</script>

<style scoped lang='stylus'>
.number-container
  display: inline-block
  height: 20px
  overflow: hidden
  .number-value
    background: none
    outline: none
    border-top: 1px solid #888
    border-bottom: 1px solid #888
    width: 40px
    height: 20px
    margin: 0
    padding: 2px 5px
    float: left
    text-align: center
    font-size: 16px
  button
    margin: 0
    padding: 0
    outline: none
    border: 1px solid #999
    width: 30px
    height: 20px
    line-height: 20px
    float: left
    &.number-add
      font-size: 22px
</style>
