<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import InstructorCard from '../components/InstructorCard.vue'
import { instructors } from '../content/instructors'
</script>

<template>
  <DefaultLayout>
    <section class="section container px-5">
      <SectionTitle title="Нашите Инструктори | Велина Реформер" align="left" v-reveal />
      <div class="row g-4">
        <div
          v-for="(instructor, index) in instructors"
          :key="instructor.id"
          class="col-12 col-sm-6 col-lg-4"
        >
          <InstructorCard :instructor="instructor" :reveal-delay="index * 80" />
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
