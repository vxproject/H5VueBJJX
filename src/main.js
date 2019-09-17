// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import router from './router.js'
import axios from 'axios'
Vue.prototype.Http = 'http://ddz.hxtapp.com/v1/';
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})
require('./assets/styleAll/styleAll.min.css')
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
