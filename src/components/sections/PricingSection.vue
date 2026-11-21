<script setup lang="ts">
import type { PricingPlan } from '@/types/pricing'
import PricingCard from '../ui/PricingCard.vue'
import SectionHeader from '../ui/SectionHeader.vue'

const plans: PricingPlan[] = [
  {
    id: 'start',
    audience: 'Для ваших задач',
    name: 'Старт',
    description: 'Для личного сайта и первых проектов',
    price: '0 ₽',
    period: 'Бесплатно, без ограничения по времени',
    limits: ['5 мониторов', 'Интервал 5 минут', 'История 7 дней'],
    features: ['Уведомления в Telegram'],
    cta: 'Начать бесплатно',
  },
  {
    id: 'team',
    audience: 'Рекомендуем',
    name: 'Команда',
    description: 'Для сервисов, которыми пользуются каждый день',
    price: '490 ₽',
    period: 'в месяц',
    limits: ['30 мониторов', 'Интервал 1 минута', 'История 30 дней'],
    features: ['Уведомления в Telegram'],
    cta: 'Выбрать «Команда»',
    recommended: true,
  },
  {
    id: 'business',
    audience: 'Для ваших задач',
    name: 'Бизнес',
    description: 'Для нескольких продуктов и инфраструктуры',
    price: '1 490 ₽',
    period: 'в месяц',
    limits: ['100 мониторов', 'Интервал 30 секунд', 'История 90 дней'],
    features: ['Уведомления в Telegram'],
    cta: 'Выбрать «Бизнес»',
  },
]

const description =
  'От личного проекта до рабочих сервисов.\nВо всех тарифах — проверки сайтов и API, уведомления в Telegram.'
</script>

<template>
  <section id="pricing" class="pricing">
    <SectionHeader
      eyebrow="Тарифы"
      title="Выберите свой ритм"
      :description="description"
      title-tag="h1"
      size="lg"
      centered
    />

    <p class="pricing__note">Оплата помесячно · без обязательств на год</p>

    <ul class="pricing__list">
      <li v-for="plan in plans" :key="plan.id" class="pricing__item">
        <PricingCard :plan="plan" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: v.$bg-color;
  padding-top: f.fluid(48px, 64px, 1440px, 1920px);
  padding-bottom: f.fluid(64px, 96px, 1440px, 1920px);
  @include m.container-padding;
  
  @include m.tablet {
    gap: f.fluid(12px, 16px, 375px, 960px)
  }

  &__note {
    margin-top: f.fluid(20px, 24px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: f.fluid(16px, 24px, 1440px, 1920px);
    width: 100%;
    max-width: 1200px;
    margin-top: f.fluid(40px, 48px, 1440px, 1920px);

    @include m.tablet {
      grid-template-columns: 1fr;
      max-width: 480px;
      gap: f.fluid(12px, 16px, 375px, 960px)
    }
  }

  &__item {
    display: flex;

    > * {
      flex: 1;
    }
  }
}
</style>
