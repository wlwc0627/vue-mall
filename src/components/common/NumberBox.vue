<template>
  <div class="number-container">
    <button class='number-reduce' @click='reduceNumber'>一</button>
    <input type="text" value='1' ref='numberbox' class='number-value' @input='countChanged'/>
    <button class="number-add" @click='addNumber'>＋</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'NumberBox',
  props: {
    remain: {
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
        this.$emit('getNum', this.$refs.numberbox.value)
      } else {
        Toast('商品数量已达最小值')
      }
    },
    addNumber () {
      if (this.$refs.numberbox.value < parseInt(this.remain)) {
        this.finalValue = parseInt(this.$refs.numberbox.value) + 1
        this.$refs.numberbox.value = this.finalValue
        this.$emit('getNum', this.$refs.numberbox.value)
      } else {
        Toast('库存不足')
      }
    },
    countChanged () {
      if (this.$refs.numberbox.value < parseInt(this.remain)+1) {
        this.$emit('getNum', this.$refs.numberbox.value)
      } else {
        Toast('库存不足')
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.number-container
  display: inline-block
  height: 30px
  overflow: hidden
  .number-value
    background: none
    outline: none
    border-top: 1px solid #888
    border-bottom: 1px solid #888
    width: 60px
    height: 30px
    margin: 0
    padding: 2px 5px
    float: left
    text-align: center
  button
    margin: 0
    padding: 0
    outline: none
    border: 1px solid #999
    width: 50px
    height: 30px
    line-height: 30px
    float: left
    &.number-add
      font-size: 24px
</style>
