<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SectionTitle from '../components/SectionTitle.vue'
import { pages } from '../content/pages'
import { trackPhoneClick, trackInstagramClick, trackContactClick, trackMapsClick } from '../utils/analytics'

const page = pages.contact
const defaultMapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.5066918898415!2d22.64795187652673!3d41.43616377129373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a9ff1c522bccf7%3A0x34cd157fbfea2bd!2sVelina%20Reformer%20Pilates!5e1!3m2!1sen!2smk!4v1787604228375!5m2!1sen!2smk'
</script>

<template>
  <DefaultLayout>
    <section class="section container" v-if="page">
      <SectionTitle title="Контакт | Велина Реформер" align="left" />

      <div class="contact-grid">
        <dl class="contact-details">
          <div class="contact-details__row">
            <dt>Телефон</dt>
            <dd>
              <a :href="`tel:${page.content.phone.replace(/[^+\d]/g, '')}`" @click="trackPhoneClick('contact_page')">{{ page.content.phone }}</a>
            </dd>
          </div>
          <div class="contact-details__row">
            <dt>Е-пошта</dt>
            <dd>
              <a :href="`mailto:${page.content.email}`" @click="trackContactClick('contact_page_email')">{{ page.content.email }}</a>
            </dd>
          </div>
          <div class="contact-details__row">
            <dt>Адреса</dt>
            <dd>
              {{ page.content.address }}
              <template v-if="page.content.mapsUrl">
                ·
                <a :href="page.content.mapsUrl" target="_blank" rel="noopener" @click="trackMapsClick('contact_page')"
                  >Отвори во Google Maps</a
                >
              </template>
            </dd>
          </div>
          <div v-if="page.content.instagram" class="contact-details__row">
            <dt>Instagram</dt>
            <dd>
              <a :href="page.content.instagram" target="_blank" rel="noopener" @click="trackInstagramClick('contact_page')"
                >instagram.com/velinareformer</a
              >
            </dd>
          </div>
          <div v-if="page.content.facebook" class="contact-details__row">
            <dt>Facebook</dt>
            <dd><a :href="page.content.facebook" target="_blank" rel="noopener">facebook.com/velinareformer</a></dd>
          </div>
          <div v-if="page.content.tiktok" class="contact-details__row">
            <dt>TikTok</dt>
            <dd><a :href="page.content.tiktok" target="_blank" rel="noopener">tiktok.com/@velinareformer</a></dd>
          </div>
        </dl>

        <div class="contact-map">
          <iframe
            :src="page.content.mapEmbedUrl || defaultMapEmbedUrl"
            width="100%"
            height="320"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Studio location on Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.contact-details__row {
  margin-bottom: var(--space-sm);
}

.contact-details__row dt {
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.15rem;
}

.contact-details__label-icon {
  display: flex;
  align-items: center;
}

.contact-details__label-icon svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.contact-details__row dd {
  font-size: 1.05rem;
}

.contact-details__row a:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
