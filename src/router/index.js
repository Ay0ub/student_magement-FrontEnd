import Vue from 'vue'
import VueRouter from 'vue-router'
import Note from '../components/Etudiant/notes.vue'
import serviceSent from '../components/Etudiant/service.vue'
import coursAdmin from '../components/Admin/cours.vue'
import register from '../components/register.vue'
import coursEtudiant from '../components/Etudiant/cours.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/notes',
    name: 'Note',
    component: Note,
  },
  {
    path: '/serviceSent',
    name: 'service',
    component: serviceSent,
  },
  {
    path: '/coursAdmin',
    name: 'cours',
    component: coursAdmin,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/coursEtudiant',
    name: 'cours',
    component: coursEtudiant,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
