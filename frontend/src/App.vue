<script setup>
// Root component: routing decides which view (and layout) renders here.
// Every view builds its own Navbar/Footer via DefaultLayout (see
// layouts/DefaultLayout.vue), so a route change unmounts and remounts the
// whole page — this <transition> cross-fades that swap instead of it
// snapping instantly from one page to the next.
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>
