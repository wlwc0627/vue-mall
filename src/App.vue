<template>
  <div id="app">
    <mt-header fixed title="VUE商城">
      <span slot="left" v-show='isShow' @click='goBack'>
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <transition>
      <router-view/>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="shopcar">{{ $store.getters.getAllCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isShow: false
    }
  },
  watch: {
    '$route.path': function (nowVal) {
      if (nowVal === '/home') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  created () {
    this.isShow = this.$route.path === '/home' ? false : true
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='stylus'>
  #app
    padding-top: 40px
    padding-bottom: 50px
    overflow-x: hidden
    .back-icon
      position: fixed
      width: 40px
      height: 40px
      top: 0
      left: 0
      z-index: 9
      font-size: 38px
      color: #fff
  .v-enter
    opacity: 0
    transform: translateX(100%)
  .v-leave-to
    opacity: 0
    transform: translateX(-100%)
    position: absolute
  .v-enter-active, .v-leave-active
    transition: all .5s ease
</style>
