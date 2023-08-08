import Vue from 'vue'
import App from './App.vue'
// Tailwind css
import './style.css'
// Axios
import './plugins/axios'
// Router
import router from './router'
// Store
import store from './store'
// Apex Chart
import './plugins/apex-chart'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
