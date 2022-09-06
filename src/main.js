import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/plugins/axios'
import globalFunctions from '@/plugins/globalFunctions'
import vClickOutside from 'v-click-outside'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(axios)
Vue.use(globalFunctions)
Vue.use(vClickOutside)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
