import Vue from 'vue'
import Router from 'vue-router'
import Star from '@/views/Star'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Star',
      component: Star
    }
  ]
})
