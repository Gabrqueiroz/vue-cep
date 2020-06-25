import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import ViaCep from 'vue-viacep'
Vue.use(ViaCep);


new Vue({
  el: '#app',
  render: h => h(App)
})
