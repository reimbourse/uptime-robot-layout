<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { StatusType } from '@/types/status'
import UptimeBar from './UptimeBar.vue'

interface Column {
  label: string
  value: string
  accent?: boolean
}

const columns: Column[] = [
  { label: 'Сайт', value: 'example.com' },
  { label: 'Статус', value: 'Работает', accent: true },
  { label: 'Ответ сервера', value: '200 OK' },
  { label: 'Время ответа', value: '184 мс' },
]

const TABLET_QUERY = '(max-width: 960px)'
const CHECKS_DESKTOP = 60
const CHECKS_MOBILE = 25

const isCompact = ref(false)
let mql: MediaQueryList | null = null

const onChange = (e: MediaQueryListEvent) => {
  isCompact.value = e.matches
}

onMounted(() => {
  mql = window.matchMedia(TABLET_QUERY)
  isCompact.value = mql.matches
  mql.addEventListener('change', onChange)
})

onBeforeUnmount(() => {
  mql?.removeEventListener('change', onChange)
})

const checks = computed<StatusType[]>(() =>
  Array.from({ length: isCompact.value ? CHECKS_MOBILE : CHECKS_DESKTOP }, () => 'success'),
)
</script>

<template>
  <div class="monitor-preview">
    <div class="monitor-preview__head">
      <p class="monitor-preview__title">Всё важное — на одном экране</p>
      <span class="monitor-preview__tag">Демо панели</span>
    </div>

    <dl class="monitor-preview__table">
      <div v-for="column in columns" :key="column.label" class="monitor-preview__cell">
        <dt class="monitor-preview__label">{{ column.label }}</dt>
        <dd
          class="monitor-preview__value"
          :class="{ 'monitor-preview__value--accent': column.accent }"
        >
          {{ column.value }}
        </dd>
      </div>
    </dl>

    <UptimeBar class="monitor-preview__bar" :checks="checks" />

    <div class="monitor-preview__foot">
      <span>Последние проверки</span>
      <span>Обновлено только что</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.monitor-preview {
  padding: f.fluid(24px, 32px, 1440px, 1920px);
  background-color: v.$card-color;
  border: 1px solid v.$border-color;
  border-radius: v.$border-radius-card;
  text-align: left;

  @include m.mobile {
    padding: 20px;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  &__title {
    font-family: v.$font-main;
    font-weight: 600;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.2;
    color: v.$text-color;
  }

  &__tag {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(11px, 12px, 1440px, 1920px);
    line-height: 1;
    text-transform: uppercase;
    color: v.$muted-color;
    white-space: nowrap;

    @include m.mobile {
      display: none;
    }
  }

  &__table {
    display: flex;
    flex-wrap: wrap;
    gap: 16px f.fluid(32px, 40px, 1440px, 1920px);
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
  }

  &__cell {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__label {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(12px, 13px, 1440px, 1920px);
    line-height: 1;
    color: v.$muted-color;
  }

  &__value {
    font-family: v.$font-mono;
    font-weight: 400;
    font-size: f.fluid(12px, 13px, 1440px, 1920px);
    line-height: 1;
    color: v.$text-color;

    &--accent {
      font-family: v.$font-main;
      color: v.$accent-color;
    }
  }

  &__bar {
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
  }

  &__foot {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: f.fluid(16px, 20px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(12px, 13px, 1440px, 1920px);
    line-height: 1;
    color: v.$muted-color;
  }
}

.uptime-bar {
  display: flex;
  gap: 4px;
  width: 100%;

  @media (max-width: 960px) {
    gap: 2px;
  }

  &__item {
    flex: 1 1 0;
    min-width: 0;
  }
}
</style>
