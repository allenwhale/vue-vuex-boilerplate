import App from 'src/App'
import router from 'src/router'
import store from 'src/vuex/store'
import { sync } from 'vuex-router-sync'
require('es6-promise').polyfill()

sync(store, router)

window.addEventListener('load', function () {
    router.start(App, '#Entry')
})
