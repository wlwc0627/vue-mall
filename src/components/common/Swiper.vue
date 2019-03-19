<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key='index'>
        <img :src="item.imgUrl">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import '@/assets/swiper.styl'
export default {
  name: 'Swiper',
  props: {
    lunbotuList: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang='stylus' scoped>
</style>
