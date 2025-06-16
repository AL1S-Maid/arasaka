import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import Services from '@/views/Services/index.vue'
import News from '@/views/News/index.vue'
import About from '@/views/About/index.vue'
import CSR from '@/views/CSR/index.vue'
import Contact from '@/views/Contact/index.vue'
import Admin from '@/views/Admin/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/csr',
      name: '/csr',
      component: CSR,
    },
    {
      path: '/contact',
      name: '/contact',
      component: Contact,
    },
    {
      path: '/admin',
      name: '/admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        adminOnly: true
      }
    }
    
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isLoggedIn = !!userStore.user?.email
  const isAdmin = userStore.user?.isAdmin

  if (to.meta.requiresAuth && !isLoggedIn) {
    // 需要登录但未登录
    next({ path: '/login' })
  } else if (to.meta.adminOnly && !isAdmin) {
    // 仅管理员可访问但不是管理员
    next({ path: '/' }) // 可改为 403 页面
  } else {
    next()
  }
})

export default router
