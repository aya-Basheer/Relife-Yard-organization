// import { createRouter, createWebHistory } from 'vue-router'

// import Dashboard from '../pages/Dashboard.vue' // 🟢 استيراد الصفحة

// const routes = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/dashboard', name: 'Dashboard', component: Dashboard }, // 🟢 إضافة الصفحة
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import AboutUs from '@/pages/AboutUs.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact },
  
  {path: '/dashboard', component:Dashboard},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
