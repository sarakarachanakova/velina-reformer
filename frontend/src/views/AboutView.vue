<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { pages } from '../content/pages'

const page = pages.about
</script>

<template>
  <DefaultLayout>
    <section class="section container" v-if="page">
      <SectionTitle :title="page.title" />

      <div class="row">
        <div class="col-lg-8">
          <div class="mb-4">
            <h3>Нашата приказна</h3>
            <p class="text-justify">{{ page.content.story }}</p>
          </div>

          <div class="mb-4">
            <h3>Нашата филозофија</h3>
            <p class="text-justify">{{ page.content.philosophy }}</p>
          </div>

          <div class="mb-4">
            <h3>Нашата мисија</h3>
            <p class="text-justify">{{ page.content.mission }}</p>
          </div>

          <div class="mb-4">
            <h3>Што нè прави различни</h3>
            <p class="text-justify">{{ page.content.difference }}</p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
/* Bootstrap 5 dropped .text-justify as a utility class, so this is the one
   rule we still need custom. */
.text-justify {
  text-align: justify;
}
</style>
