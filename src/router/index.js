import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/pages/Index'
import PostCreate from '@/views/pages/post/PostCreate'
import PostInfo from '@/views/pages/post/PostInfo'
import ErrorPage from '@/views/pages/ErrorPage'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'ErrorPage',
    path: '/404',
    component: ErrorPage
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

router.beforeEach((to, from, next) => {
  if (routes.map(({ name }) => name).includes(to.name)) {
    next()
  } else {
    next('/404')
  }
})
