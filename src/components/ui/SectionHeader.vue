<script setup lang="ts">
interface Props {
  title: string
  eyebrow?: string
  description?: string
  titleTag?: 'h1' | 'h2'
  size?: 'md' | 'lg'
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  titleTag: 'h2',
  size: 'md',
  centered: false,
})
</script>

<template>
  <header class="section-header" :class="{ 'section-header--centered': centered }">
    <p v-if="eyebrow" class="section-header__eyebrow">{{ eyebrow }}</p>
    <component
      :is="titleTag"
      class="section-header__title"
      :class="`section-header__title--${size}`"
    >
      {{ title }}
    </component>
    <p v-if="description" class="section-header__description">
      {{ description }}
    </p>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.section-header {

  display: flex;
  flex-direction: column;

  @include m.tablet {
    margin-top: 36px;
  }

  &--centered {
    align-items: center;
    text-align: center;
  }

  &__eyebrow {
    font-family: v.$font-main;
    font-weight: 500;
    font-size: f.fluid(12px, 14px, 1440px, 1920px);
    line-height: 1;
    text-transform: uppercase;
    color: v.$accent-color;
  }

  &__eyebrow + &__title {
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
  }

  &__title {
    font-family: v.$font-head;
    font-weight: 600;
    font-size: f.fluid(32px, 40px, 1440px, 1920px);
    line-height: 1.2;
    color: v.$text-color;
    text-wrap: balance;

    @include m.mobile {
      font-size: 24px;
    }

    &--lg {
      font-size: f.fluid(44px, 56px, 1440px, 1920px);

      @include m.tablet {
        font-size: 40px;
      }

      @include m.mobile {
        font-size: 32px;
      }
    }
  }

  &__description {
    white-space: pre-line;
    margin-top: f.fluid(20px, 24px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(16px, 20px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;

    @include m.mobile {
      font-size: 16px;
    }
  }
}
</style>
