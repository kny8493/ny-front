import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  // url에서 # 없앰
  mode: 'history',
  routes
})

export default router
