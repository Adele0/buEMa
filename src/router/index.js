import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/Home')), 'home')
const login = r => require.ensure([], () => r(require('../pages/login/Login')), 'login')

export default [{
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [
        //地址为空时跳转home页面
        {
          path: '',
          redirect:'/home'
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/login',
          component: login
        }
      ]
}]
