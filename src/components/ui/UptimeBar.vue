<script setup lang="ts">
import type { StatusType } from '@/types/status'

interface Props {
  checks: StatusType[]
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: 'История последних проверок',
})
</script>

<template>
  <div class="uptime-bar" role="img" :aria-label="label">
    <span
      v-for="(check, index) in checks"
      :key="index"
      class="uptime-bar__item"
      :class="`uptime-bar__item--${check}`"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;

.uptime-bar {
  display: flex;
  gap: f.fluid(2px, 4px, 1440px, 1920px);
  height: 40px;

  &__item {
    flex: 1;
    min-width: 0;
    border-radius: v.$border-radius-indicator;

    &--success {
      background-color: v.$accent-color;
    }

    &--warning {
      background-color: v.$warning-color;
    }

    &--danger {
      background-color: v.$danger-color;
    }
  }
}
</style>
