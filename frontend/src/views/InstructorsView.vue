<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import InstructorCard from '../components/InstructorCard.vue'
import { instructors } from '../content/instructors'
</script>

<template>
  <DefaultLayout>
    <section class="section container">
      <SectionTitle title="Нашите Инструктори | Велина Реформер" align="left" />
      <div class="instructors-grid">
        <InstructorCard v-for="instructor in instructors" :key="instructor.id" :instructor="instructor" />
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.instructors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 360px));
  justify-content: center;
  gap: var(--space-md);
}

@media (max-width: 768px) {
  .instructors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
