import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: '首页'
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    }
  ],
  linkActiveClass: 'mui-active'
})
