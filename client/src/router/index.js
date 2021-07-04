import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: Experience,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({ 
  history: createWebHistory(),
  routes 
})

export default router