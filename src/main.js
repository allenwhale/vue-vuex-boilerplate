import App from 'src/App'
import router from 'src/router'
import store from 'src/vuex/store'
import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import VueSideEffect from 'vue-side-effect'

window.Vue = Vue
Vue.use(VueSideEffect)
sync(store, router)

window.addEventListener('load', function () {
    new Vue(App).$mount('#Entry')
})
