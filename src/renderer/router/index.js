import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/log-table'
    },
    {
      path: '/hello',
      name: 'hello',
      component: require('@/components/hello')
    },
    {
      path: '/log-table',
      name: 'log-table',
      component: require('@/components/LogTable')
    }
  ]
})
