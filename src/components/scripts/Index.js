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
    props: {
    },
    data() {
        return {
            data1: 'this is data1'
        }
    },
    computed: {
        computedMsg () {
            return this.example.msg + ' computed!'
        }
    },
    methods: {
        onClick () {
            alert('On Click');
        }
    },
    // life cycle
    created () {
    },
    beforeCompile () {
    },
    compiled () {
    },
    ready () {
        this.changeMsg('hello! index')
        this.exampleGet().then(() => console.log('get done'));
    },
    beforeDestroy () {
    },
    destroyed () {
    },
}

