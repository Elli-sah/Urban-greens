import { createRouter, createWebHashHistory } from 'vue-router'

import ListView from './views/ListView.vue'
import PlantView from './views/PlantView.vue'
import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/ProfileView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ListView,
      path: '/plantlist/:category'
    },
    {
      component: PlantView,
      path: '/plant/:plantId'
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
