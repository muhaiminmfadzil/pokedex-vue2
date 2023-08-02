import Vue from 'vue'
import App from './App.vue'
// Tailwind css
import './style.css'
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// Router
import router from './plugins/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
