import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import auth from './auth'

Vue.use(VueRouter)
Vue.config.productionTip = false

window.Popper = require('popper.js').default
window.$ = window.jQuery = require('jquery')
require('bootstrap')

// note ya, we use shorthand for routes: routes
const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.isLoggedIn()) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (auth.isLoggedIn()) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

new Vue({
  // note ya, we use shorthand for router: router
  router: router,
  render: h => h(App),
}).$mount('#app')
