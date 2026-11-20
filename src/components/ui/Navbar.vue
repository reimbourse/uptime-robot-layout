<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface NavLink {
  label: string
  to: RouteLocationRaw
  isPage?: boolean
}

const links: NavLink[] = [
  { label: 'Возможности', to: { name: 'home', hash: '#features' } },
  { label: 'Как это работает', to: { name: 'home', hash: '#how-it-works' } },
  { label: 'Тарифы', to: { name: 'pricing' }, isPage: true },
]
</script>

<template>
  <nav class="navbar" aria-label="Основная навигация">
    <RouterLink
      v-for="link in links"
      :key="link.label"
      :to="link.to"
      :active-class="link.isPage ? 'navbar__link--active' : ''"
      class="navbar__link"
    >
      {{ link.label }}
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;

.navbar {
  display: flex;
  align-items: center;
  gap: f.fluid(24px, 32px, 1440px, 1920px);
}

.navbar__link {
  display: inline-flex;
  align-items: center;
  font-family: v.$font-main;
  font-weight: 500;
  font-size: f.fluid(14px, 16px, 1440px, 1920px);
  line-height: 1;
  color: v.$muted-color;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover,
  &--active {
    color: v.$text-color;
  }
}
</style>
