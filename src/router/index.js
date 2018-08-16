import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../pages/home/Home')), 'home')
const login = r => require.ensure([], () => r(require('../pages/login/Login')), 'login')

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/login',
    component: login,
  }
]

export default new Router({
   routes,
})
