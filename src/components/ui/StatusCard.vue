<script setup lang="ts">
import type { StatusType } from '@/types/status'
import StatusIcon from './StatusIcon.vue'

interface Props {
  type: StatusType
  label: string
  description: string
  meta: string
}

defineProps<Props>()
</script>

<template>
  <article class="status-card" :class="`status-card--${type}`">
    <div class="status-card__badge">
      <StatusIcon :type="type" />
      <span class="status-card__label">{{ label }}</span>
    </div>

    <p class="status-card__description">{{ description }}</p>

    <p class="status-card__meta">{{ meta }}</p>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.status-card {
  --status-color: #{v.$accent-color};

  display: flex;
  flex-direction: column;
  padding: f.fluid(28px, 32px, 1440px, 1920px);
  background-color: v.$card-color;
  border: 1px solid v.$border-color;
  border-radius: v.$border-radius-card;

  &--warning {
    --status-color: #{v.$warning-color};
  }

  &--danger {
    --status-color: #{v.$danger-color};
  }

  &__badge {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--status-color);
  }

  &__label {
    font-family: v.$font-main;
    font-weight: 500;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1;
  }

  &__description {
    margin-top: f.fluid(24px, 28px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(16px, 18px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;
  }

  &__meta {
    margin-top: auto;
    padding-top: f.fluid(20px, 24px, 1440px, 1920px);
    font-family: v.$font-mono;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1;
    color: var(--status-color);

    @include m.mobile {
      font-size: 13px;
    }
  }
}
</style>
