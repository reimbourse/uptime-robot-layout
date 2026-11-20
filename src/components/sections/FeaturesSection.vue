<script setup lang="ts">
import FeatureCard from '../ui/FeatureCard.vue'
import SectionHeader from '../ui/SectionHeader.vue'

interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Сайты и API',
    description: 'Проверяйте доступность страниц, API и нужный код ответа в одном месте.',
  },
  {
    title: 'Оповещения в Telegram',
    description: 'Узнавайте о сбоях и восстановлении там, где уже общаетесь с командой.',
  },
  {
    title: 'Понятная история',
    description: 'Смотрите время ответа и историю проверок, чтобы разбираться в причинах сбоев.',
  },
]
</script>

<template>
  <section id="features" class="features">
    <SectionHeader
      eyebrow="01 / Возможности"
      title="Спокойнее, когда всё под контролем"
      description="Не держите вкладку с сайтом открытой. Пульс проверит его за вас."
    />

    <ul class="features__list">
      <li v-for="feature in features" :key="feature.title">
        <FeatureCard v-bind="feature" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.features {
  background-color: v.$bg-color;
  padding-top: f.fluid(48px, 64px, 1440px, 1920px);
  padding-bottom: f.fluid(24px, 32px, 1440px, 1920px);
  @include m.container-padding;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    margin-top: f.fluid(40px, 56px, 1440px, 1920px);

    @include m.tablet {
      grid-template-columns: 1fr;
    }
  }
}
</style>
