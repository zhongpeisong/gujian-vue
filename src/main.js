import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = axios;
Vue.use(Antd,VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


function getToken(next) {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  next();
}

router.beforeEach((to, from, next) => {
  next()
})
