<template>
  <div class="container">
    <Register />
    <p>已有账号？请&nbsp;<router-link to='/member/login'>登录</router-link></p>
  </div>
</template>

<script>
import Login from '@/components/member/Login'
import Register from '@/components/member/Register'
export default {
  name: 'MemberContainer',
  components: {
    Login,
    Register
  }
}
</script>

<style lang='stylus' scoped>
.container
  p
    text-align: right
    height: 30px
    line-height: 30px
    font-size: 14px
    padding-right: 10px
</style>
