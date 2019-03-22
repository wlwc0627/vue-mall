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
      <div class="item-wrapper">
        <span>手机号</span>
        <input type="tel" placeholder="请输入手机号" required>
      </div>
      <div class="item-wrapper">
        <span>邮&nbsp;&nbsp;箱</span>
        <input type="email" placeholder="请输入邮箱" required>
      </div>
      <mt-button type='primary' plain size='large'>注册</mt-button>
    </form>
  </div>
</template>

<script>
import '@/assets/member.styl'
export default {
  name: 'Register'
}
</script>

<style scoped lang='stylus'>
</style>
