import Vue from 'vue'
import VueRouter from 'vue-router'

import coursAdmin from '../components/Admin/cours.vue'
import serviceAdmin from '../components/Admin/service.vue'
import Admin from '../components/Admin/accueil.vue'

import Enseignant from '../components/Enseignant/accueil.vue'

import serviceEtudiant from '../components/Etudiant/service.vue'
import Note from '../components/Etudiant/notes.vue'
import coursEtudiant from '../components/Etudiant/cours.vue'
import Absence from '../components/Etudiant/absence.vue'
import Etudiant from '../components/Etudiant/accueil.vue'

import register from '../components/register.vue'
import Login from '../components/login.vue'

import Emplois from '../components/emploiTemps.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/notes',
    name: 'Note',
    component: Note,
  },
  {
    path: '/serviceEtudiant',
    name: 'service',
    component: serviceEtudiant,
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
  {
    path: '/absence',
    name: 'absence',
    component: Absence,
  },
  {
    path: '/etudiant',
    name: 'etudiant',
    component: Etudiant,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/serviceAdmin',
    name: 'serviceAdmin',
    component: serviceAdmin,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/enseignant',
    name: 'enseignant',
    component: Enseignant,
  },
  {
    path: '/emploiT',
    name: 'emploiTemps',
    component: Emplois,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
