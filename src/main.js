import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import FastClick from 'fastclick'
import Axios from 'axios'
import '@/assets/style/reset.css'

Vue.component(Header.name, Header)
Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
FastClick.attach(document.body)
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
