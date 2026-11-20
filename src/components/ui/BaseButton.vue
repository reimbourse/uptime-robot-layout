<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  text?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  block?: boolean
  disabled?: boolean
  to?: RouteLocationRaw
}

withDefaults(defineProps<Props>(), {
  text: 'A',
  type: 'button',
  variant: 'primary',
  block: false,
  disabled: false,
  to: undefined,
})
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="button"
    :class="[`button--${variant}`, { 'button--block': block }]"
  >
    <slot>{{ text }}</slot>
  </RouterLink>
  <button
    v-else
    class="button"
    :class="[`button--${variant}`, { 'button--block': block }]"
    :type="type"
    :disabled="disabled"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.button {
  font-family: v.$font-main;
  font-weight: 600;
  font-size: f.fluid(16px, 16px, 1440px, 1920px);
  padding-inline: f.fluid(24px, 24px, 1440px, 1920px);
  padding-top: f.fluid(16px, 16px, 1440px, 1920px);
  padding-bottom: f.fluid(16px, 16px, 1440px, 1920px);
   border-radius: v.$border-radius-button;
  white-space: nowrap;
  transition:
    opacity 0.2s ease,
    border-color 0.2s ease;

  &--primary {
    background-color: v.$accent-color;
    color: v.$bg-color;
  }

  &--secondary {
    background-color: v.$bg-color;
    border: 1px solid v.$border-color;
    color: v.$text-color;

    &:hover:not(:disabled) {
      border-color: v.$accent-color;
      opacity: 1;
    }
  }

  &--block {
    width: 100%;
  }

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
