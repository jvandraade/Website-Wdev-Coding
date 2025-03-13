import Vue from 'vue'
import App from './App.vue'
import rotas from '../src/routes/rotas.js'

Vue.config.productionTip = false

new Vue({
  rotas,
  render: h => h(App),
}).$mount('#app')
