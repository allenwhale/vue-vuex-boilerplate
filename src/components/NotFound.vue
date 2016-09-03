<template>
    <div>
        <h1>404!</h1>
        <h2>{{ example.msg }}</h2>
    </div>
</template>

<script>
<<<<<<< 3ea7a0d2f838f7ad6775fbd6c33484caeb960b08
    import { mapActions, mapGetters } from 'vuex'
=======
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
    import { changeMsg } from 'src/vuex/actions/Example'
>>>>>>> init commit

    export default {
        computed: {
            ...mapGetters(['example'])
        },
        methods: {
            ...mapActions(['changeMsg'])
        },
        mounted () {
            this.changeMsg('not found')
        }
    }
=======
import { changeMsg } from 'src/vuex/actions/Example'

export default {
    vuex: {
        getters: {
            example: ({ example }) => example
        },
        actions: {
            changeMsg
        }
    },
    ready () {
        this.changeMsg('fuck you! 404')
    }
}
>>>>>>> init commit
</script>
