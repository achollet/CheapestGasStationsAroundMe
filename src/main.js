import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAVQqgfPAvDMoa9SSUyQzQqA2nMNgeZlkA',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
