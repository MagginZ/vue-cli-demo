import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo01 from '@/components/Demo01/index'
import Demo02 from '@/components/Demo02/index'
import Demo03 from '@/components/Demo03/index'
import Demo04 from '@/components/Demo04/index'
import Demo05 from '@/components/Demo05/index'
import Demo06 from '@/components/Demo06/index'
// import User from '@/components/Demo06/user'
import CT from '@/views/index'

Vue.use(Router)

export const routerMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [
      {path: '/demo01', name: 'demo01', component: Demo01},
      {path: '/demo02', name: 'demo02', component: Demo02},
      {path: '/demo03', name: 'demo03', component: Demo03},
      {path: '/demo05', name: 'demo05', component: Demo05},
      {path: '/vuex', name: 'vuex', component: (resolve) => require(['../components/Demo07/vuex.vue'], resolve)}
    ]
  },
  {path: '/demo04', name: 'demo04', component: Demo04},
  {path: '/demo06', name: 'demo06', component: Demo06},
  {path: '/user/:id', name: 'user', component: (resolve) => require(['../components/Demo06/user.vue'], resolve)}, // 推荐使用
  {path: '/ct', name: 'ct', component: CT},
  {path: '/ct/zhihu', name: 'zhihu', component: (resolve) => require(['../views/zhihu/index.vue'], resolve)},
  {
    path: '/ct/shopping',
    name: 'shopping',
    title: '电商网站示例',
    component: (resolve) => require(['../views/shopping/index.vue'], resolve),
    children: [
      {path: 'list', name: 'shopping', meta: {title: '商品列表'}, component: (resolve) => require(['../views/shopping/views/list.vue'], resolve)},
      {path: 'product/:id', name: 'product', meta: {title: '商品详情'}, component: (resolve) => require(['../views/shopping/views/prodect.vue'], resolve)}
    ]}
]
const RouterConfig = {
  mode: 'history',
  routes: routerMap
}
const router = new Router(RouterConfig)
export default router
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
