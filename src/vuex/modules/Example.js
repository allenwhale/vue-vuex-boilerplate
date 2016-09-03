import { handleMutations } from 'src/vuex-actions'
import { CHANGE_MSG, EXAMPLE_GET } from 'src/vuex/mutation-types'

const state = {
    msg: 'hello index!'
}

const mutations = handleMutations({
    [CHANGE_MSG]: (state, msg) => {
        state.msg = msg
    },
    [EXAMPLE_GET]: {
        success (state, payload) {
            console.log('success', payload)
        },
        pending (state, payload) {
            console.log('pending', payload)
        },
        error (state, payload) {
            console.log('error', payload)
        }
    }
})

export default {
    state,
    mutations
}
