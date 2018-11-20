// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import {VueGoodTable} from 'vue-good-table'
import vModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-good-table/dist/vue-good-table.css'

library.add(faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueGoodTable)
Vue.use(vModal)

Vue.filter('timeFormat', (time) => {
  if (time) {
    return moment(time).format('DD/MM/YYYY HH:mm:ss')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
