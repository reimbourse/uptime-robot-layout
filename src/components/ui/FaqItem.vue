<script setup lang="ts">
import type { FaqItem } from '@/types/pricing'

interface Props {
  item: FaqItem
}

defineProps<Props>()
</script>

<template>
  <article class="faq-item">
    <h3 class="faq-item__question">{{ item.question }}</h3>
    <p class="faq-item__answer">{{ item.answer }}</p>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.faq-item {
  padding: f.fluid(24px, 32px, 1440px, 1920px);
  background-color: v.$card-color;
  border: 1px solid v.$border-color;
  border-radius: 20px;

  @include m.mobile {
    padding: 20px;
  }

  &__question {
    font-family: v.$font-main;
    font-weight: 600;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$text-color;
  }

  &__answer {
    margin-top: f.fluid(12px, 16px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;
  }
}
</style>
