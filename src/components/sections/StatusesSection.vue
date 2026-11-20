<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import StatusCard from '../ui/StatusCard.vue'
import type { StatusType } from '@/types/status'

interface StatusItem {
  type: StatusType
  label: string
  description: string
  meta: string
}

const statuses: StatusItem[] = [
  {
    type: 'success',
    label: 'Работает',
    description: 'Сервис доступен и отвечает в пределах заданного времени.',
    meta: 'HTTP 200 · 184 мс',
  },
  {
    type: 'warning',
    label: 'Замедление',
    description: 'Сервис отвечает, но медленнее установленного порога.',
    meta: 'HTTP 200 · 2 148 мс',
  },
  {
    type: 'danger',
    label: 'Не отвечает',
    description: 'Не удалось получить ожидаемый ответ от сервера.',
    meta: 'HTTP 503 · ошибка',
  },
]
</script>

<template>
  <section class="statuses">
    <SectionHeader
      eyebrow="03 / Статусы"
      title="Не просто «работает» или «нет»"
      description="Цвет и форма помогают понять состояние с первого взгляда."
    />

    <ul class="statuses__list">
      <li v-for="status in statuses" :key="status.type" class="statuses__item">
        <StatusCard v-bind="status" />
      </li>
    </ul>

    <p class="statuses__note">
      Примеры состояний. Порог замедления задаётся в настройках монитора.
    </p>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.statuses {
  background-color: v.$bg-color;
  padding-top: f.fluid(48px, 64px, 1440px, 1920px);
  padding-bottom: f.fluid(40px, 48px, 1440px, 1920px);
  @include m.container-padding;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    margin-top: f.fluid(40px, 56px, 1440px, 1920px);

    @include m.tablet {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    display: flex;

    > * {
      flex: 1;
    }
  }

  &__note {
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;
  }
}
</style>
