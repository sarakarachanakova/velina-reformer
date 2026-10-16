<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import EventCard from '../components/EventCard.vue'
import { events } from '../content/events'
</script>

<template>
  <DefaultLayout>
    <section class="section container px-5">
      <SectionTitle
        title="Настани"
        subtitle="Настани и работилници организирани од Велина Реформер."
        align="center"
        v-reveal
      />
      <div class="row g-4 justify-content-center">
        <div v-for="(event, index) in events" :key="event.id" class="col-12 col-lg-10 col-xl-8">
          <EventCard :event="event" :reveal-delay="index * 80" />
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
