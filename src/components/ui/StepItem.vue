<script setup lang="ts">
interface Props {
  number: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <article class="step-item">
    <p class="step-item__number">{{ number }}</p>
    <h3 class="step-item__title">{{ title }}</h3>
    <p class="step-item__description">{{ description }}</p>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.step-item {
  display: flex;
  flex-direction: column;

  &__number {
    font-family: v.$font-mono;
    font-weight: 400;
    font-size: f.fluid(28px, 32px, 1440px, 1920px);
    line-height: 1;
    color: v.$accent-color;
  }

  &__title {
    margin-top: f.fluid(16px, 20px, 1440px, 1920px);
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
    max-width: 36ch;
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;
  }
}
</style>
