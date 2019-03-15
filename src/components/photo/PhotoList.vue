<template>
  <router-link tag="div" to='/' class="container">
    <div class="content">
      <p class="top">暂无图片</p>
      <p class="bottom">单击返回首页</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PhotoList'
}
</script>

<style lang='stylus' scoped>
.container
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: rgba(0,0,0, .19)
  .content
    width: 200px
    height: 100px
    position: absolute
    top: 50%
    left: 50%
    margin-left: -100px
    margin-top: -50px
    background-color: #fff
    border: 1px solid #888
    border-radius: 20px
    text-align: center
    .top
      font-size: 24px
      margin-top: 20px
      color: #000
    .bottom
      font-size: 14px
      margin-top: 20px
</style>
