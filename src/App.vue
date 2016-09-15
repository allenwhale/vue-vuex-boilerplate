<template>
    <router-view></router-view>
</template>

<script>
    import store from 'src/vuex/store'
    import router from 'src/router'

    export default {
        store,
        router,
        route: {
            canReuse: false
        }
    }
</script>

<style>
</style>
