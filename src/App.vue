<template>
    <router-view></router-view>
</template>

<script>
import store from 'src/vuex/store'

export default {
    store,
    route: {
        canReuse: false
    }
}
</script>

<style>
</style>
