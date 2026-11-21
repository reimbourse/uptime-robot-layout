<script setup lang="ts">
import SectionHeader from '../ui/SectionHeader.vue'
import StepItem from '../ui/StepItem.vue'

interface Step {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Добавьте адрес',
    description: 'Укажите URL сайта или API, выберите интервал и ожидаемый ответ.',
  },
  {
    title: 'Подключите Telegram',
    description: 'Свяжите аккаунт с ботом и выберите чат для уведомлений.',
  },
  {
    title: 'Занимайтесь своим делом',
    description: 'Пульс сообщит о проблеме и напишет, когда сервис снова заработает.',
  },
]

const formatNumber = (index: number): string => String(index + 1).padStart(2, '0')
</script>

<template>
  <section id="how-it-works" class="how-it-works">
    <SectionHeader
      eyebrow="02 / Как это работает"
      title="От адреса до первого уведомления"
      description="Три шага — и вам не придётся проверять сайт вручную."
    />

    <ol class="how-it-works__list">
      <li v-for="(step, index) in steps" :key="step.title">
        <StepItem :number="formatNumber(index)" v-bind="step" />
      </li>
    </ol>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.how-it-works {
  background-color: v.$bg-color;
  padding-top: f.fluid(48px, 64px, 1440px, 1920px);
  padding-bottom: f.fluid(48px, 64px, 1440px, 1920px);
  @include m.container-padding;

  @include m.tablet {
    padding-top: f.fluid(18px, 48px, 480px, 1440px)
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: f.fluid(32px, 48px, 1440px, 1920px);
    margin-top: f.fluid(40px, 56px, 1440px, 1920px);

    @include m.tablet {
      grid-template-columns: 1fr;
      gap: 32px;
      padding-top: f.fluid(32px, 48px, 480px, 1440px)

    }
  }
}
</style>
