<script setup lang="ts">
import type { PricingPlan } from '@/types/pricing'
import BaseButton from './BaseButton.vue'

interface Props {
  plan: PricingPlan
}

defineProps<Props>()
</script>

<template>
  <article class="pricing-card" :class="{ 'pricing-card--recommended': plan.recommended }">
    <p class="pricing-card__audience">{{ plan.audience }}</p>
    <h2 class="pricing-card__name">{{ plan.name }}</h2>
    <p class="pricing-card__description">{{ plan.description }}</p>

    <p class="pricing-card__price">{{ plan.price }}</p>
    <p class="pricing-card__period">{{ plan.period }}</p>

    <ul class="pricing-card__list">
      <li v-for="limit in plan.limits" :key="limit" class="pricing-card__limit">
        {{ limit }}
      </li>
      <li v-for="feature in plan.features" :key="feature" class="pricing-card__feature">
        {{ feature }}
      </li>
    </ul>

    <BaseButton
      class="pricing-card__cta"
      :variant="plan.recommended ? 'primary' : 'secondary'"
      block
    >
      {{ plan.cta }}
    </BaseButton>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.pricing-card {
  display: flex;
  flex-direction: column;
  padding: f.fluid(24px, 32px, 1440px, 1920px);
  background-color: v.$card-color;
  border: 1px solid v.$border-color;
  border-radius: 20px;

  @include m.mobile {
    padding: 24px 20px;
  }

  &--recommended {
    border-color: v.$accent-color;
  }

  &__audience {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(11px, 12px, 1440px, 1920px);
    line-height: 1;
    text-transform: uppercase;
    color: v.$muted-color;

    .pricing-card--recommended & {
      color: v.$accent-color;
    }
  }

  &__name {
    margin-top: f.fluid(20px, 24px, 1440px, 1920px);
    font-family: v.$font-head;
    font-weight: 600;
    font-size: f.fluid(24px, 28px, 1440px, 1920px);
    line-height: 1.2;
    color: v.$text-color;
  }

  &__description {
    // резервируем две строки, чтобы цены в карточках выстраивались в одну линию
    min-height: 3em;
    margin-top: f.fluid(16px, 20px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;
  }

  &__price {
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
    font-family: v.$font-mono;
    font-weight: 500;
    font-size: f.fluid(28px, 32px, 1440px, 1920px);
    line-height: 1;
    color: v.$text-color;
  }

  &__period {
    margin-top: f.fluid(16px, 20px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: f.fluid(16px, 20px, 1440px, 1920px);
    margin-top: f.fluid(20px, 24px, 1440px, 1920px);
    margin-bottom: f.fluid(24px, 32px, 1440px, 1920px);
  }

  &__limit {
    font-family: v.$font-mono;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1;
    color: v.$text-color;
  }

  &__feature {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1;
    color: v.$text-color;
  }

  &__cta {
    margin-top: auto;
  }
}
</style>
