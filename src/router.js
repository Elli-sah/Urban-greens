import { createRouter, createWebHashHistory } from 'vue-router'

import ListView from './views/ListView.vue'
import PlantView from './views/PlantView.vue'
import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/LoginView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ListView,
      path: '/plantlist'
    },
    {
      component: PlantView,
      path: '/plant/:name',
      props: true
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ProfileView,
      path: '/profile/:UserName'
    },
    {
      component: LoginView,
      path: '/login'
    }
  ]
})
