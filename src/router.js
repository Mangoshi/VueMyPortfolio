import Vue from 'vue'
import VueRouter from 'vue-router'
// 'Page' Components //
import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import AllProjects from '@/pages/projects/AllProjects.vue'
// Projects //
import VueDo from '@/pages/projects/vue-do/App.vue'
import VueGifs from '@/pages/projects/vue-gifs/App.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/projects',
            name: 'projects',
            component: AllProjects
        },
        {
            path: '/demo/vue-do',
            name: 'vue-do',
            component: VueDo
        },
        {
            path: '/demo/vue-gifs',
            name: 'vue-gifs',
            component: VueGifs
        }
    ]
})