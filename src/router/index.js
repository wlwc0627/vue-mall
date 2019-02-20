import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/demo01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
