import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Реформер Пилатес Студио | Велина Реформер' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'Нашата Приказна | Велина Реформер' },
  },
  {
    path: '/reformer-pilates',
    name: 'reformer-pilates',
    component: () => import('../views/ReformerPilatesView.vue'),
    meta: { title: 'Реформер Пилатес | Велина Реформер' },
  },
  {
    path: '/instructors',
    name: 'instructors',
    component: () => import('../views/InstructorsView.vue'),
    meta: { title: 'Инструктори | Велина Реформер' },
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue'),
    meta: { title: 'Галерија | Велина Реформер' },
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: { title: 'Настани | Велина Реформер' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Контакт | Велина Реформер' },
  },
  {
    path: '/event1',
    name: 'event1',
    component: () => import('../views/Event1View.vue'),
    meta: { title: '[Placeholder] Настан | Велина Реформер' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// Basic SEO: keep the document title in sync with the active route.
// (Page views need nothing here — Umami tracks route changes on its own,
// see utils/analytics.js.)
router.afterEach((to) => {
  document.title = to.meta.title || 'Velina Reformer'
})

export default router
