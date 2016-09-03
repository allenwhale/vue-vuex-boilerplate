<template>
    <h1>404!</h1>
    <h2>{{ example.msg }}</h2>
</template>

<script>
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
</script>
