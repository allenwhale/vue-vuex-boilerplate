import App from 'src/App'
import router from 'src/router'
import store from 'src/vuex/store'
import { sync } from 'vuex-router-sync'
<<<<<<< 3ea7a0d2f838f7ad6775fbd6c33484caeb960b08
import Vue from 'vue'
import VueSideEffect from 'vue-side-effect'
=======
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
=======
require('es6-promise').polyfill()
>>>>>>> init commit
>>>>>>> init commit

window.Vue = Vue
Vue.use(VueSideEffect)
sync(store, router)

window.addEventListener('load', function () {
    new Vue(App).$mount('#Entry')
})
