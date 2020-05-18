import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.prototype.$log = console.log.bind(console)

window.v = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
