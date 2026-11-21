<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <section class="cta-banner">
    <div class="cta-banner__card">
      <div class="cta-banner__content">
        <h2 class="cta-banner__title">{{ title }}</h2>
        <p v-if="description" class="cta-banner__description">
          {{ description }}
        </p>
      </div>

      <div class="cta-banner__action">
        <slot name="action" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.cta-banner {
  background-color: v.$bg-color;
  padding-top: f.fluid(40px, 48px, 1440px, 1920px);
  padding-bottom: f.fluid(40px, 48px, 1440px, 1920px);
  @include m.container-padding;

  &__card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    padding: f.fluid(40px, 56px, 1440px, 1920px);
    background-color: v.$card-color;
    border: 1px solid v.$border-color;
    border-radius: v.$border-radius-card;

    @include m.tablet {
      padding: 32px;
    }

    @include m.mobile {
      flex-direction: column;
      align-items: flex-start;
      padding: 24px 20px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: f.fluid(16px, 20px, 1440px, 1920px);
    min-width: 0;
  }

  &__title {
    max-width: 20ch;
    font-family: v.$font-head;
    font-weight: 600;
    font-size: f.fluid(32px, 40px, 1440px, 1920px);
    line-height: 1.2;
    color: v.$text-color;
    text-wrap: balance;

    @include m.tablet {
      font-size: 28px;
    }

    @include m.mobile {
      font-size: 24px;
    }
  }

  &__description {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;
  }

  &__action {
    flex-shrink: 0;

    @include m.mobile {
      width: 100%;

      :deep(.button) {
        width: 100%;
      }
    }
  }
}
</style>
