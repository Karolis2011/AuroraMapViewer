import Vue from 'vue'
import App from './App.vue'
import router from './router'

import panZoom from 'vue-panzoom'

Vue.use(panZoom);

Vue.config.productionTip = false

Vue.prototype.$log = console.log.bind(console)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
