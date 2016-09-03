require('es6-promise').polyfill()
import App from 'src/App'
import router from 'src/router'
import store from 'src/vuex/store'
import { sync } from 'vuex-router-sync'
<<<<<<< 97d5d9892de9ed07072ed1665da4fc74d78bd341
<<<<<<< 3ea7a0d2f838f7ad6775fbd6c33484caeb960b08
import Vue from 'vue'
import VueSideEffect from 'vue-side-effect'
=======
=======
<<<<<<< 8bc62cd343dc7408154b96a4d097e96a12165241
>>>>>>> use my own vuex-actions
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
=======
require('es6-promise').polyfill()
>>>>>>> init commit
<<<<<<< 97d5d9892de9ed07072ed1665da4fc74d78bd341
>>>>>>> init commit
=======
=======
>>>>>>> use my own vuex-actions
>>>>>>> use my own vuex-actions

window.Vue = Vue
Vue.use(VueSideEffect)
sync(store, router)

window.addEventListener('load', function () {
    new Vue(App).$mount('#Entry')
})
