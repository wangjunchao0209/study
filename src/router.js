import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash', //history
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      redirect: '/home/music-control',
      component: ()=> import('@/components/home'),
      // component: r => require.ensure([], ()=>r(require('@/components/home.vue')), '/home')
      // component: component: resolve => require(['@/components/home.vue'], resolve)
      children: [
        {
          path: 'music-control',
          component: ()=> import('@/components/childPage/musicMag'),
        },
        {
          path: 'catch-data',
          component: ()=> import('@/components/childPage/catchData'),
        },
        {
          path: 'save-data',
          component: ()=> import('@/components/childPage/saveData'),
        },
        {
          path: 'mocha-check',
          component: ()=> import('@/components/childPage/mochaCheck'),
        },
        {
          path: 'music-test',
          component: ()=> import('@/components/childPage/musicTest'),
        },
      ]
    },
   
  ]
})
