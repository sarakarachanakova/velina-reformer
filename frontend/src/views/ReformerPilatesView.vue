<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { pages } from '../content/pages'

const page = pages['reformer-pilates']
</script>

<template>
  <DefaultLayout>
    <section class="section container" v-if="page">
      <SectionTitle :title="page.title" />

      <div class="row">
        <div class="col-lg-8">
          <div class="mb-4">
            <h3>Што е Реформер Пилатес?</h3>
            <p class="text-justify">{{ page.content.whatIsIt }}</p>
          </div>

          <div class="mb-4">
            <h3>Придобивки</h3>
            <p class="text-justify">{{ page.content.benefits }}</p>
          </div>

          <div class="mb-4">
            <h3>За кого е погоден</h3>
            <p class="text-justify">{{ page.content.suitableFor }}</p>
          </div>

          <div class="mb-4">
            <h3>Типичен час</h3>
            <p class="text-justify">{{ page.content.typicalSession }}</p>
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
