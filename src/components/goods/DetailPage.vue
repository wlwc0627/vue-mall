<template>
  <div class="container">
    <img :src="imgData.pic1" alt="">
    <img :src="imgData.pic2" alt="">
    <img :src="imgData.pic3" alt="">
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data () {
    return {
      id: this.$route.params.id,
      imgData: {}
    }
  },
  mounted () {
    this.getImg()
  },
  methods: {
    getImg () {
      this.$axios.get('/api/detailpage.json').then(res => {
        this.imgData = res.data.data[parseInt(this.id)]
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.container
  width: 100%
  img
    width: 100%
</style>
