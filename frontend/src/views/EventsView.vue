<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import EventCard from '../components/EventCard.vue'
import { events } from '../content/events'
</script>

<template>
  <DefaultLayout>
    <section class="section container">
      <SectionTitle
        title="Настани"
        subtitle="Настани и работилници организирани од Велина Реформер."
        align="center"
      />
      <div class="events-list">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.events-list {
  display: grid;
  gap: var(--space-lg);
  max-width: 900px;
  margin: 0 auto;
}
</style>
