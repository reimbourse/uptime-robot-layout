<script setup lang="ts">
import type { FaqItem } from '@/types/pricing'
import FaqItemCard from '../ui/FaqItem.vue'
import SectionHeader from '../ui/SectionHeader.vue'

const items: FaqItem[] = [
  {
    question: 'Нужна ли карта для бесплатного тарифа?',
    answer: 'Нет. Создайте аккаунт, добавьте адрес и подключите Telegram. Данные карты не нужны.',
  },
  {
    question: 'Что считается монитором?',
    answer:
      'Один адрес сайта или API с собственным интервалом проверки, ожидаемым кодом ответа и порогом замедления.',
  },
  {
    question: 'Как подключить Telegram?',
    answer:
      'В панели откройте раздел «Уведомления» и перейдите к боту. После подтверждения выберите личный чат или чат команды.',
  },
  {
    question: 'Можно ли сменить тариф?',
    answer:
      'Да. Вы можете сменить тариф в настройках оплаты. Перед переходом на меньший тариф сократите количество мониторов до его лимита.',
  },
]
</script>

<template>
  <section class="faq">
    <div class="faq__inner">
      <SectionHeader title="Частые вопросы" />

      <ul class="faq__list">
        <li v-for="item in items" :key="item.question">
          <FaqItemCard :item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.faq {
  background-color: v.$bg-color;
  padding-top: f.fluid(80px, 128px, 1440px, 1920px);
  padding-bottom: f.fluid(48px, 64px, 1440px, 1920px);
  @include m.container-padding;

  &__inner {
    max-width: 1200px;
    margin-inline: auto;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    margin-top: f.fluid(32px, 40px, 1440px, 1920px);
  }
}
</style>
