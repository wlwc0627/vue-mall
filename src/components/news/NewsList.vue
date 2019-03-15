<template>
  <div class="wrapper">
    <ul class="content">
      <router-link tag='li' :to="'/home/newsinfo/'+index" v-for='(item,index) in newsData' :key='index' class="item-list">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="news-info">
          <p class='left'>
            {{ item.source }}
          </p>
          <p class='right'>
            {{ item.ptime }}
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'NewsList',
  data () {
    return {
      newsData: {}
    }
  },
  mounted () {
    this.$axios.get('/api/news.json').then(res => {
      this.newsData = res.data.data.toutiao
    }).catch(err => {
      console.log(err)
      Toast('获取新闻资讯列表失败')
    })
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  width: 100%
  .content
    .item-list
      width: 100%
      height: 60px
      .title
        height: 36px
        line-height: 36px
        padding: 0 4px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        font-size: 16px
.news-info
  padding: 0 8px
  height: 24px
  line-height: 24px
  box-sizing: border-box
  border-bottom: 1px solid #ddd
  font-size: 13px
  .left
    float: left
  .right
    float: right
.news-info:after
  content: ""
  display: block
  clear: both
</style>
