import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '@/components/photo/PhotoList'
import GoodList from '@/components/goods/GoodList'
import GoodsInfo from '@/components/goods/GoodsInfo'
import DetailPage from '@/components/goods/DetailPage'
import CommentPage from '@/components/goods/CommentPage'
import BuyThings from '@/components/goods/BuyThings'
import Login from '@/components/member/Login'
import Register from '@/components/member/Register'

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
    },
    {
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      name: 'PhotoList',
      component: PhotoList
    },
    {
      path: '/home/goodlist',
      name: 'GoodList',
      component: GoodList
    },
    {
      path: '/home/goodinfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/home/detailpage/:id',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/home/commentpage/:id',
      name: 'CommentPage',
      component: CommentPage
    },
    {
      path: '/home/buythings/:id',
      name: 'BuyThings',
      component: BuyThings
    },
    {
      path: '/member/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/member/register',
      name: 'Register',
      component: Register
    }
  ],
  linkActiveClass: 'mui-active'
})
