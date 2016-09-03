import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from 'src/components/Index'
import NotFound from 'src/components/NotFound'

Vue.use(VueRouter)

var router = new VueRouter({
    saveScrollPosition: true,
    history: true,
    hashbang: false
})

router.map({
    '/index': {
        component: Index,
        name: 'index'
    },
    '*': {
        component: NotFound
    }
})

export default router
