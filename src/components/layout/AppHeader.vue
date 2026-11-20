<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import Navbar from '../ui/Navbar.vue'

interface Props {
  showNavbar?: boolean
  authenticated?: boolean
}

withDefaults(defineProps<Props>(), {
  showNavbar: true,
  authenticated: false,
})

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="header"
    :class="{ 'header--menu-open': menuOpen, 'header--has-navbar': showNavbar }"
  >
    <RouterLink to="/" class="header__logo">
      <img src="@/assets/icons/full-logo.svg" alt="Пульс" width="120" height="32" />
    </RouterLink>
    <Navbar v-if="showNavbar" />
    <p v-else class="header__tagline">Мониторинг сайтов и API</p>
    <div class="header__actions">
      <RouterLink v-if="authenticated" :to="{ name: 'pricing' }" class="header__plan">
        Тарифы
      </RouterLink>
      <BaseButton v-if="authenticated" text="В панель" :to="{ name: 'dashboard' }" />
      <template v-else>
        <RouterLink :to="{ name: 'login' }" class="header__login">Войти</RouterLink>
        <BaseButton class="header__signup" text="Создать аккаунт" :to="{ name: 'register' }" />
        <button
          v-if="showNavbar"
          class="header__menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          @click="menuOpen = !menuOpen"
        >
          <span />
          <span />
        </button>
      </template>
    </div>

    <button
      v-if="menuOpen"
      class="header__backdrop"
      type="button"
      aria-label="Закрыть меню"
      @click="closeMenu"
    />
    <div v-if="menuOpen && showNavbar && !authenticated" class="header__menu">
      <Navbar class="header__menu-nav" @click="closeMenu" />
      <BaseButton
        class="header__menu-signup"
        text="Создать аккаунт"
        :to="{ name: 'register' }"
        block
        @click="closeMenu"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.header {
  position: relative;
  z-index: 1;
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

  &__menu-toggle,
  &__backdrop,
  &__menu {
    display: none;
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

  &__plan {
    display: inline-flex;
    align-items: center;
    color: v.$muted-color;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    white-space: nowrap;
    transition: color 0.2s ease;

    &:hover {
      color: v.$text-color;
    }
  }

  @include m.tablet {
    z-index: 20;
    padding-top: 16px;
    padding-bottom: 16px;
    gap: 16px;

    :deep(.navbar) {
      display: none;
    }

    &__logo img {
      width: f.fluid(96px, 120px, 480px, 960px);
    }

    &__actions {
      gap: 16px;
    }

    &__plan,
    &__login {
      font-size: 12px;
    }

    :deep(.button) {
      padding: 12px 16px;
      font-size: 12px;
    }

    &--has-navbar {
      .header__signup {
        display: none;
      }

      .header__menu-toggle {
        display: inline-flex;
      }
    }

    &__menu-toggle {
      position: relative;
      z-index: 2;
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px;
      height: 36px;
      padding: 8px;
      border-radius: v.$border-radius-button;
      color: v.$text-color;

      span {
        display: block;
        width: 20px;
        height: 2px;
        border-radius: v.$border-radius-indicator;
        background-color: currentColor;
        transition: transform 0.2s ease;
      }
    }

    &--menu-open {
      .header__menu-toggle {
        gap: 0;
      }

      .header__menu-toggle span:first-child {
        transform: translateY(1px) rotate(45deg);
      }

      .header__menu-toggle span:last-child {
        transform: translateY(-1px) rotate(-45deg);
      }
    }

    &__backdrop {
      position: fixed;
      z-index: -1;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.62);
    }

    &__menu {
      position: absolute;
      z-index: 1;
      top: 100%;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 8px f.fluid(30px, 39px, 480px, 960px) 24px;
      background-color: v.$bg-color;
    }

    &__menu-nav {
      display: flex !important;
      flex-direction: column;
      align-items: stretch;
      gap: 0;

      :deep(.navbar__link) {
        min-height: 44px;
        color: v.$muted-color;
        font-size: 16px;
      }

      :deep(.navbar__link:last-child) {
        color: v.$text-color;
      }
    }

    &__menu-signup {
      :deep(.button) {
        min-height: 60px;
        font-size: 16px;
      }
    }
  }

  @include m.mobile {
    gap: 12px;

    &__logo img {
      width: 96px;
    }

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

    &__menu {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
}
</style>
