import Vue from 'vue'
import App from './App.vue'
import router from './router'

import call from './call'

Vue.prototype.call = call

window.vue = new Vue()

Vue.config.productionTip = false
Vue.use(require('vue-shortkey'))


window.vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')