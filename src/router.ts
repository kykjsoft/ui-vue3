import {createRouter,createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[] = [
  { path: '/', redirect:'/index'},
  { path: '/index', component: ()=>import('@/view/Index.vue')},
  { path: '/about', component: ()=>import('@/view/About.vue') },
  { path: '/select', component: ()=>import('@/view/ProSelect.vue') },
  { path: '/data', component: ()=>import('@/view/ProData.vue') },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})


export default router;