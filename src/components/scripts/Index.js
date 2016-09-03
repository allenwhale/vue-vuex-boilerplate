import { changeMsg, exampleGet } from 'src/vuex/actions/Example'

export default {
    vuex: {
        getters: {
            example: ({ example }) => example
        },
        actions: {
            changeMsg,
            exampleGet
        }
    },
    ready () {
        this.changeMsg('hello! index')
        this.exampleGet();
    }
}

