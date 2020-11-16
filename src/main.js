// main.js

import Vue from 'vue'
import App from './App.vue'

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";


Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  // data () {
  //   return {
  //     info: null
  //   }
  // },
  // mounted () {
  //   axios
  //     .get('http://localhost/usuarios/')
  //     .then(response => (this.info = response))
  // }
}).$mount('#app')