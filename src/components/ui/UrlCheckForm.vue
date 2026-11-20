<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const url = defineModel<string>({ default: '' })

const emit = defineEmits<{
  submit: [url: string]
}>()
</script>

<template>
  <form class="url-form" @submit.prevent="emit('submit', url)">
    <label class="url-form__label" for="url-form-input">Адрес сайта или API</label>
    <input
      id="url-form-input"
      v-model="url"
      class="url-form__input"
      type="url"
      name="url"
      placeholder="https://example.com"
      autocomplete="url"
    />
    <BaseButton type="submit">Проверить сайт</BaseButton>
  </form>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.url-form {
  display: flex;
  align-items: stretch;
  gap: f.fluid(12px, 16px, 1440px, 1920px);
  width: 100%;

  @include m.mobile {
    flex-direction: column;
  }

  &__label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  &__input {
    flex: 1;
    min-width: 0;
    padding-inline: f.fluid(20px, 24px, 1440px, 1920px);
    padding-block: f.fluid(16px, 16px, 1440px, 1920px);
    background-color: v.$bg-color;
    border: 1px solid v.$border-color;
     border-radius: v.$border-radius-button;
    outline: none;
    font-family: v.$font-mono;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    color: v.$text-color;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: v.$muted-color;
    }

    &:focus-visible {
      border-color: v.$accent-color;
    }
  }
}
</style>
