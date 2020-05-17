import Vue from 'vue'
import App from './components/App'
import router from './router'

Vue.component('App', App)

/* eslint-disable no-new */
new Vue(
  { el: '#app', router }
)
