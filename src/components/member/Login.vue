<template>
  <div class="container">
    <h3>用户注册</h3>
    <form action="#">
      <div class="item-wrapper">
        <span>用户名</span>
        <input type="text" placeholder="请输入用户名" required>
      </div>
      <div class="item-wrapper">
        <span>密&nbsp;&nbsp;码</span>
        <input type="password" placeholder="请输入密码" required>
      </div>
      <mt-button type='primary' plain size='large'>登录</mt-button>
    </form>
    <p>忘记密码？找回&nbsp;<router-link to='#'>密码</router-link></p>
  </div>
</template>

<script>
import '@/assets/member.styl'
export default {
  name: 'Login'
}
</script>

<style scoped lang='stylus'>
.container
  p
    height: 28px
    line-height: 28px
    font-size: 13px
    text-align: right
    padding-right: 10px
</style>
