<script setup lang="ts">
import MonitorPreview from '../ui/MonitorPreview.vue'
import StatusIcon from '../ui/StatusIcon.vue'
import UrlCheckForm from '../ui/UrlCheckForm.vue'
</script>

<template>
  <section class="hero">
    <p class="hero__badge">
      <span class="hero__status">
        <StatusIcon type="success" />
        Работает
      </span>
      Мониторинг сайтов и API
    </p>

    <h1 class="hero__title">Узнайте о падении раньше пользователей</h1>

    <p class="hero__description">
      Пульс проверяет доступность сайтов и API и пишет в Telegram, когда что-то идёт не так. Вы
      занимаетесь продуктом — мы следим за ним.
    </p>

    <UrlCheckForm class="hero__form" />

    <p class="hero__note">Начните бесплатно. Банковская карта не нужна.</p>

    <MonitorPreview class="hero__preview" />
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: v.$bg-color;
  padding-top: f.fluid(48px, 64px, 1440px, 1920px);
  padding-bottom: f.fluid(48px, 64px, 1440px, 1920px);
  text-align: center;
  @include m.container-padding;

  &__badge {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(11px, 12px, 1440px, 1920px);
    line-height: 1;
    text-transform: uppercase;
    color: v.$muted-color;
  }

  &__status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    text-transform: none;
    color: v.$accent-color;
  }

  &__title {
    max-width: 16ch;
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
    font-family: v.$font-head;
    font-weight: 700;
    font-size: f.fluid(48px, 64px, 1440px, 1920px);
    line-height: 1.2;
    color: v.$text-color;
    text-wrap: balance;

    @include m.tablet {
      font-size: 40px;
    }

    @include m.mobile {
      font-size: 32px;
    }
  }

  &__description {
    max-width: 60ch;
    margin-top: f.fluid(24px, 32px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(16px, 20px, 1440px, 1920px);
    line-height: 1.5;
    color: v.$muted-color;
    text-wrap: balance;

    @include m.mobile {
      font-size: 16px;
    }
  }

  &__form {
    max-width: f.fluid(640px, 720px, 1440px, 1920px);
    margin-top: f.fluid(32px, 40px, 1440px, 1920px);
  }

  &__note {
    margin-top: f.fluid(20px, 24px, 1440px, 1920px);
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(13px, 14px, 1440px, 1920px);
    line-height: 1.4;
    color: v.$muted-color;
  }

  &__preview {
    width: 100%;
    max-width: f.fluid(880px, 1040px, 1440px, 1920px);
    margin-top: f.fluid(40px, 56px, 1440px, 1920px);
  }
}
</style>
