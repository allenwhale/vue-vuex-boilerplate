import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'
import example from 'src/vuex/modules/Example'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.devtools = debug

export default new Vuex.Store({
    modules: {
        example
    },
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})
