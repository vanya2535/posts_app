import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/pages/Index'
import PostCreate from '@/views/pages/post/PostCreate'
import PostInfo from '@/views/pages/post/PostInfo'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'PostCreate',
    path: '/post/create',
    component: PostCreate
  },
  {
    name: 'PostInfo',
    path: '/post/:id',
    component: PostInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
