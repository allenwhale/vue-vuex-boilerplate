import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from 'src/components/Index'
import NotFound from 'src/components/NotFound'

Vue.use(VueRouter)

var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/index',
            component: Index,
            name: 'index'
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

export default router
