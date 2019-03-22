<template>
  <div class="container">
    <div class="search">
      <input type="text" placeholder="单击输入内容">
      <mt-button type='primary' plain>搜索</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchContainer'
}
</script>

<style scoped lang='stylus'>
.container
  .search
    margin: 10px 20px
    display: flex
    justify-content: space-around
    align-items: center
    input
      padding: 0 0 0 10px
      margin: 0 10px 0 0
      color: #222
      font-size: 14px
</style>
