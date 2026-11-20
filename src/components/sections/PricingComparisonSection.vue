<script setup lang="ts">
import type { ComparisonRow } from '@/types/pricing'
import ComparisonTable from '../ui/ComparisonTable.vue'
import SectionHeader from '../ui/SectionHeader.vue'

const columns: string[] = ['Старт', 'Команда', 'Бизнес']

const rows: ComparisonRow[] = [
  { label: 'Мониторы', values: ['5', '30', '100'], mono: true },
  { label: 'Интервал проверок', values: ['5 мин', '1 мин', '30 сек'], mono: true },
  { label: 'История проверок', values: ['7 дней', '30 дней', '90 дней'], mono: true },
  { label: 'Сайты и API', values: ['Включено', 'Включено', 'Включено'] },
  { label: 'Telegram-уведомления', values: ['Включено', 'Включено', 'Включено'] },
  { label: 'Оповещения о восстановлении', values: ['Включено', 'Включено', 'Включено'] },
]
</script>

<template>
  <section class="comparison">
    <div class="comparison__inner">
      <SectionHeader title="Что входит в тариф" />

      <ComparisonTable
        class="comparison__table"
        caption="Сравнение тарифов"
        :columns="columns"
        :rows="rows"
        :highlight-index="1"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.comparison {
  background-color: v.$bg-color;
  @include m.container-padding;

  &__inner {
    max-width: 1200px;
    margin-inline: auto;
  }

  &__table {
    margin-top: f.fluid(32px, 40px, 1440px, 1920px);
  }
}
</style>
