import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import FastClick from 'fastclick'

Vue.component(Header.name, Header)
Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
