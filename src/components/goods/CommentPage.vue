<template>
  <div class="container">
    <textarea name="" id="" cols="30" rows="6" ref='textValue' placeholder='单击输入评论'></textarea>
    <mt-button type='primary' size='large' @click='getValue'>提交</mt-button>
    <div v-show='commentList' class="comment-list">
      <p class="oldcomment">评论列表</p>
      <div class="comment-item" v-for='(item, index) in commentList' :key='index'>
        <p class="name">
          第{{ index+1 }}楼&nbsp;&nbsp;&nbsp;&nbsp;***g
        </p>
        <p class="content">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentPage',
  props: {
    id: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      commentList: ['商品不错', '下次还会关顾']
    }
  },
  methods: {
    getValue () {
      this.commentList.unshift(this.$refs.textValue.value)
    }
  }
}
</script>

<style lang='stylus' scoped>
.container
  padding: 5px 10px
  background-color: #eee
  textarea
    margin: 0 0 10px 0
    padding: 5px
  .comment-list
    margin-top: 20px
    .oldcomment
      height: 24px
      line-height: 24px
      background-color: #ccc
      font-size: 15px
    .comment-item
      .name
        height: 30px
        line-height: 30px
        margin-bottom: 5px
        padding-left: 8px
      .content
        height: 30px
        line-height: 30px
        text-indent: 1em
        background-color: #fff
</style>
