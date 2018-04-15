import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/auth'

// Pages
import HomePage from '@/components/pages/Home'
import AuthPage from '@/components/pages/auth/Auth'

// Global components
import Header from '@/components/Header'

// Register components
Vue.component('app-header', Header)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        header: Header
      },
      meta: { requiredAuth: true }
    },
    {
      path: '/login',
      name: 'Auth',
      component: AuthPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (Auth.default.user.authenticated) next()
    else router.push('/login')
  } else next()
})

export default router
