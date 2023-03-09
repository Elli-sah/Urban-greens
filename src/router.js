import { createRouter, createWebHashHistory } from 'vue-router'

import ListView from './views/ListView.vue'
import PlantView from './views/PlantView.vue'
import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'
import LoginView from './views/LoginView.vue'
import GetStartedView from './views/GetStartedView.vue'
import GeneralAdviceView from './views/GeneralAdviceView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ListView,
      path: '/plantlist/:category'
    },
    {
      component: PlantView,
      path: '/plants/:name',
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
    },
    {
      component: GetStartedView,
      path: '/get_started'
    },
    {
      component: GeneralAdviceView,
      path: '/general_advice'
    }
  ]
})
