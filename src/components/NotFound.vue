<template>
    <div>
        <h1>404!</h1>
        <h2>{{ example.msg }}</h2>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

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
</script>
