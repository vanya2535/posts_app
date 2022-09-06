const getLayout = (text) => {
  return text.replaceAll('\n', '<br />')
}

export default {
  install(Vue) {
    Vue.prototype.$getLayout = getLayout
  }
}
