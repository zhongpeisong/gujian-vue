import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: require('@/pages/Login').default
    }, {
      path: '/menu',
      name: '菜单',
      component: require('@/pages/Menu').default,
      children: [
        {
          path:'/menu/main',
          name:'主页',
          component:require('@/pages/Main').default,
        },
        {
          path:'/menu/sketchManage',
          name:'素质拓展管理',
          component:require('@/sketch/SketchManage').default,
        },
        {
          path:'/menu/sketch',
          name:'素质拓展',
          component:require('@/sketch/Sketch').default,
        }
      ]
    }
  ]
})
