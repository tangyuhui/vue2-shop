import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ConfigRouter from './router'
import store from './store'
Vue.use(VueRouter)

var router = new VueRouter(ConfigRouter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
