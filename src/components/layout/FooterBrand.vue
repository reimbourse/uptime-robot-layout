<script setup lang="ts"></script>

<template>
  <div class="footer-brand">
    <a href="/" class="footer-brand__logo">
      <img src="@/assets/icons/full-logo.svg" alt="Пульс" width="120" height="32" />
    </a>
    <p class="footer-brand__tagline">Мониторинг без лишнего шума</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.footer-brand {
  display: flex;
  align-items: center;
  gap: f.fluid(20px, 24px, 1440px, 1920px);

  &__logo {
    flex-shrink: 0;
  }

  &__tagline {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;
  }

  @include m.mobile {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
