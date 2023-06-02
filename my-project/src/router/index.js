import { createRouter, createWebHistory } from 'vue-router'
import MyLogin from '../components/MyLogin.vue'
import MyRegister from '../components/MyRegister.vue'
import MyLogout from '../components/MyLogout.vue'
import MyCreate from '../components/MyCreate.vue'
import MyRead from '../components/MyRead.vue'
import MyUpdate from '../components/MyUpdate.vue'
import MyDelete from '../components/MyDelete.vue'

const routes = [
  { path: '/', component: MyLogin },
  { path: '/register', component: MyRegister },
  { path: '/logout', component: MyLogout },
  { path: '/create', component: MyCreate },
  { path: '/read', component: MyRead },
  { path: '/update', component: MyUpdate },
  { path: '/delete', component: MyDelete },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
