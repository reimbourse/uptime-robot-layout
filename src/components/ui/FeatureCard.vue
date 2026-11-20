<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <article class="feature-card">
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__description">{{ description }}</p>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.feature-card {
  display: flex;
  flex-direction: column;
  padding: f.fluid(24px, 32px, 1440px, 1920px);
  background-color: v.$card-color;
  border: 1px solid v.$border-color;
  border-radius: 20px;

  &__title {
    font-family: v.$font-head;
    font-weight: 600;
    font-size: f.fluid(20px, 24px, 1440px, 1920px);
    line-height: 1.2;
    color: v.$text-color;

    @include m.mobile {
      font-size: 20px;
    }
  }

  &__description {
    margin-top: f.fluid(12px, 16px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;
  }
}
</style>
