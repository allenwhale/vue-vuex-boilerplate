import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'
import actions from 'src/vuex/actions'
import modules from 'src/vuex/modules'
import getters from 'src/vuex/getters'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.devtools = debug

export default new Vuex.Store({
    modules,
    actions,
    getters,
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})
