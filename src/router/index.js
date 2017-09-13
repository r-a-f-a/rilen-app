import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home/Index.vue'

Vue.use(Router)
console.log(Home)
/*
function requireAuth (to, from, next) {
  if (!localStorage.getItem('jwt-token')) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
}
*/
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        home: true
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
