<script setup lang="ts">
import type { ComparisonRow } from '@/types/pricing'

interface Props {
  caption: string
  columns: string[]
  rows: ComparisonRow[]
  highlightIndex?: number
}

withDefaults(defineProps<Props>(), {
  highlightIndex: -1,
})
</script>

<template>
  <div class="comparison-table">
    <table class="comparison-table__table">
      <caption class="comparison-table__caption">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr class="comparison-table__head-row">
          <th class="comparison-table__head" scope="col">Возможности</th>
          <th
            v-for="(column, index) in columns"
            :key="column"
            class="comparison-table__head"
            :class="{ 'comparison-table__head--accent': index === highlightIndex }"
            scope="col"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.label">
          <th class="comparison-table__label" scope="row">{{ row.label }}</th>
          <td
            v-for="(value, index) in row.values"
            :key="index"
            class="comparison-table__cell"
            :class="{
              'comparison-table__cell--mono': row.mono,
              'comparison-table__cell--accent': index === highlightIndex,
            }"
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.comparison-table {
  overflow-x: auto;
  background-color: v.$card-color;
  border: 1px solid v.$border-color;
  border-radius: v.$border-radius-card;

  &__table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    text-align: left;
  }

  &__caption {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  &__head-row {
    background-color: v.$bg-color;
  }

  &__head,
  &__label,
  &__cell {
    padding: f.fluid(18px, 24px, 1440px, 1920px) f.fluid(20px, 32px, 1440px, 1920px);
    font-family: v.$font-main;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1.2;
    white-space: nowrap;

    @include m.mobile {
      padding: 16px 20px;
    }
  }

  &__head {
    font-weight: 600;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    color: v.$text-color;

    &:first-child {
      width: 38%;
      font-weight: 400;
      color: v.$muted-color;
    }

    &--accent {
      color: v.$accent-color;
    }
  }

  &__label {
    font-weight: 400;
    color: v.$muted-color;
  }

  &__cell {
    font-weight: 400;
    color: v.$text-color;

    &--mono {
      font-family: v.$font-mono;
      font-size: f.fluid(13px, 14px, 1440px, 1920px);
    }

    &--accent {
      color: v.$accent-color;
    }
  }
}
</style>
