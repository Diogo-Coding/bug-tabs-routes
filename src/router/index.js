import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'
import Tab1Page from '@/views/Tab1Page.vue';
import Tab2Page from '@/views/Tab2Page.vue';
import Tab3Page from '@/views/Tab3Page.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        name: 'tab1',
        component: Tab1Page
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: Tab2Page
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: Tab3Page
      }
    ]
  },
  {
    path: '/random',
    component: () => import('../views/RandomView.vue')
  },
  {
    path: '/another-random',
    component: () => import('../views/AnotherRandomView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
