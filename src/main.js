// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
//存放所有音乐
window.allsong = [];
window.songindex =0;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

