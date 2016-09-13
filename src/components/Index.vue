<template>
    <h1>this is /index!</h1>
    <h2>{{ example.msg }}</h2>
    <h2>{{ computedMsg }}</h2>
    <h2>{{ data1 }}</h2>
    <button @click="onClick">Click Me</button>

</template>
<script>
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
        data () {
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
                alert('On Click')
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
            this.exampleGet().then(() => console.log('get done'))
        },
        beforeDestroy () {
        },
        destroyed () {
        }
    }

</script>
<style scoped lang="sass">
    h1
        color: red
</style>
