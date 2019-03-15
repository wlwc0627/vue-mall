<template>
  <div class="container">
    <div class="news-header">
      <p class="title">{{ newsInfoData[id].title }}</p>
      <div>
        <p class="left">{{ newsInfoData[id].time }}</p>
        <p class="right">{{ newsInfoData[id].source }}</p>
      </div>
    </div>
    <div class="content">
      {{ newsInfoData[id].content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsInfo',
  data () {
    return {
      id: this.$route.params.id,
      newsInfoData: []
    }
  },
  mounted () {
    this.$axios.get('/api/newsinfo.json').then(res => {
      this.newsInfoData = res.data.data
    })
  }
}
</script>

<style lang='stylus' scoped>
.news-header
  width: 100%
  padding-bottom: 10px
  margin-bottom: 10px
  .title
    width: 100%
    text-align: center
    font-size: 20px
    font-weight: bold
    line-height: 30px
    color: #000
    padding: 0 20px
.news-header
  div:after
    content: ""
    display: block
    clear: both
.news-header
  div
    p
      width: 50%
      height: 24px
      padding-left: 10px
      line-height: 24px
      font-size: 15px
.news-header
  div
    .left
      float: left
    .right
      float: right
      text-align: right
      padding-right: 14px
.container
  .content
    text-indent: 2em
    line-height: 24px
    padding: 0 10px
</style>
