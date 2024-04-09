import { createMemoryHistory, createRouter } from 'vue-router'

//Import the views from components
import HomeView from './App.vue'
import SkillsView from '../components/AppSkills.vue'
import ProjectView from '../components/AppProjects.vue'
import ContactView from '../components/AppContact.vue'

//mapping routes to components
const routes = [
  { path: '/', component: HomeView },
  { path: '/skills', component: SkillsView },
  { path: '/projects', component: ProjectView},
  { path: '/contact', component: ContactView },
]

//creating router
const router = createRouter({
  history: createMemoryHistory(),
  routes, 
})

export default router