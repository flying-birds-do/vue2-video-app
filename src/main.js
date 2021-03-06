// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import mSwiper from 'vue-m-swipers'
Vue.use(mSwiper)
Vue.use(Vuex)

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueResource)

// let store = new Vuex.Store({
// 	state: {
// 		user_name: ''
// 	},
// 	mutations: {
// 		showUserName (state) {
// 			alert(state.user_name)
// 		}
// 	}
// })

// const history = window.sessionStorage
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0
// history.setItem('/', 0)

// router.beforeEach(function (to, from, next) {
//   store.commit('updateLoadingStatus', {isLoading: true})

//   const toIndex = history.getItem(to.path)
//   const fromIndex = history.getItem(from.path)

//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       store.commit('updateDirection', {direction: 'forward'})
//     } else {
//       store.commit('updateDirection', {direction: 'reverse'})
//     }
//   } else {
//     ++historyCount
//     history.setItem('count', historyCount)
//     to.path !== '/' && history.setItem(to.path, historyCount)
//     store.commit('updateDirection', {direction: 'forward'})
//   }

//   if (/\/http/.test(to.path)) {
//     let url = to.path.split('http')[1]
//     window.location.href = `http${url}`
//   } else {
//     next()
//   }
// })

// router.afterEach(function (to) {
//   store.commit('updateLoadingStatus', {isLoading: false})
//   // if (process.env.NODE_ENV === 'production') {
//   //   ga && ga('set', 'page', to.fullPath)
//   //   ga && ga('send', 'pageview')
//   // }
// })
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    console.log(el)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
