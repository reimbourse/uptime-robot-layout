<script setup lang="ts">
import type { StatusType } from '@/types/status'

interface Props {
  type: StatusType
}

defineProps<Props>()
</script>

<template>
  <svg class="status-icon" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <circle v-if="type === 'success'" cx="6" cy="6" r="5" />
    <path v-else-if="type === 'warning'" d="M6 1 11.5 11h-11z" />
    <rect v-else x="1" y="1" width="10" height="10" rx="1" />
  </svg>
</template>

<style scoped lang="scss">
@use '@/assets/styles/functions' as f;

.status-icon {
  flex-shrink: 0;
  width: f.fluid(12px, 14px, 1440px, 1920px);
  height: auto;
  aspect-ratio: 1;
}
</style>
