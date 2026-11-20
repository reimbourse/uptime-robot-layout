<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
import Navbar from '../ui/Navbar.vue'

interface Props {
  showNavbar?: boolean
}

withDefaults(defineProps<Props>(), {
  showNavbar: true,
})
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__logo">
      <img src="@/assets/icons/full-logo.svg" alt="Пульс" width="120" height="32" />
    </RouterLink>
    <Navbar v-if="showNavbar" />
    <p v-else class="header__tagline">Мониторинг сайтов и API</p>
    <div class="header__actions">
      <RouterLink :to="{ name: 'login' }" class="header__login">Войти</RouterLink>
      <BaseButton text="Создать аккаунт" :to="{ name: 'register' }" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.header {
  display: flex;
  align-items: center;
  gap: f.fluid(32px, 48px, 1440px, 1920px);
  background-color: v.$bg-color;
  padding-top: f.fluid(24px, 24px, 1440px, 1920px);
  padding-bottom: f.fluid(24px, 24px, 1440px, 1920px);
  @include m.container-padding;

  &__logo {
    flex-shrink: 0;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    margin-left: auto;
  }

  &__tagline {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(12px, 14px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;

    @include m.tablet {
      display: none;
    }
  }

  &__login {
    display: inline-flex;
    align-items: center;
    font-family: v.$font-main;
    font-weight: 600;
    font-size: f.fluid(16px, 16px, 1440px, 1920px);
    line-height: 1;
    color: v.$text-color;
    white-space: nowrap;
    transition: color 0.2s ease;

    &:hover {
      color: v.$accent-color;
    }
  }

  @include m.mobile {
    gap: 12px;

    &__actions {
      gap: 12px;

      :deep(.button) {
        padding: 12px;
        font-size: 12px;
      }
    }

    &__login {
      font-size: 12px;
    }
  }
}
</style>
