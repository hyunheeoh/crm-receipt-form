import { createRouter, createWebHistory } from 'vue-router'
import FormListApp from '@/apps/form-list/FormListApp.vue'
import FormApp from '@/apps/form/FormApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FormListApp',
      component: FormListApp
    },
    {
      path: '/form/:teamCode/:id',
      name: 'FormApp',
      component: FormApp
    }
  ]
})

export default router
