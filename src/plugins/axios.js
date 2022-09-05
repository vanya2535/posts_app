import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'

export default {
  install: (Vue) => {
    Vue.prototype.$axios = Axios
  }
}
