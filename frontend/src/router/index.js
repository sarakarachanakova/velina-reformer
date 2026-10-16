import { createRouter, createWebHistory } from 'vue-router'
import { trackPageView } from '../utils/analytics'

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
// Also reports the navigation to GA4 as a page_view — gtag's own automatic
// page_view (fired once, on initial script load) is disabled in
// initAnalytics() specifically so this is the only source of page_view
// events, covering every route change including the first.
router.afterEach((to) => {
  document.title = to.meta.title || 'Velina Reformer'
  trackPageView(to.fullPath, to.meta.title)
})

export default router
