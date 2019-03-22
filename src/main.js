import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import { Header, Swipe, SwipeItem, Button, Switch, Field } from 'mint-ui'
import Axios from 'axios'
import '@/assets/style/reset.css'

Vue.component(Field.name, Field)
Vue.component(Switch.name, Switch)
Vue.component(Header.name, Header)
Vue.config.productionTip = false
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.prototype.$axios = Axios
Vue.use(Vuex)

let car = JSON.parse(localStorage.getItem('car') || '[]')

let store = new Vuex.Store({
  state: {
    car: car,
    paymoney: []
  },
  mutations: {
    addToCar (state, goodsinfo) {
      let flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += goodsinfo.count
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsCount (state, goodsinfo) {
      state.car.some(item => {
        if (parseInt(item.id) === parseInt(goodsinfo.id)) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar (state, id) {
      state.car.some((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    switchChanged (state, info) {
      state.car.some(item => {
        if (item.id === info.id) {
          item.selected = info.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    payFinalMoney (state, info) {
      state.paymoney.push(info)
    },
    cancelPayment (state) {
      state.paymoney = []
    }
  },
  getters: {
    getAllCount (state) {
      let c = 0
      state.car.forEach(item => {
        c += parseInt(item.count)
      })
      return c
    },
    getGoodsCount (state) {
      let goodsCount = {}
      state.car.forEach(item => {
        goodsCount[item.id] = item.count
      })
      return goodsCount
    },
    getGoodsSelected (state) {
      let o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndPrice (state) {
      const o = {
        count: 0,
        price: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.price += item.count * item.price
        }
      })
      return o
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
