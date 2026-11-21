<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <main class="register">
    <section class="register__card" aria-labelledby="register-title">
      <h1 id="register-title" class="register__title">Начнём с аккаунта</h1>
      <p class="register__description">Создайте аккаунт и добавьте первый монитор.</p>

      <form class="register__form" @submit.prevent>
        <div class="register__field">
          <label class="register__label" for="register-email">Электронная почта</label>
          <input
            id="register-email"
            class="register__input"
            name="email"
            type="email"
            placeholder="name@company.ru"
            autocomplete="email"
            required
          />
        </div>

        <div class="register__field">
          <label class="register__label" for="register-password">Пароль</label>
          <input
            id="register-password"
            class="register__input"
            name="password"
            type="password"
            placeholder="Введите пароль"
            autocomplete="new-password"
            required
          />
          <p class="register__hint">Не менее восьми символов. Используйте буквы и цифры.</p>
        </div>

        <BaseButton class="register__submit" type="submit" block>Создать аккаунт</BaseButton>
      </form>

      <p class="register__consent">
        Создавая аккаунт, вы принимаете
        <a href="#">условия использования</a> и <a href="#">политику конфиденциальности</a>.
      </p>

      <p class="register__login">
        Уже есть аккаунт?
        <RouterLink :to="{ name: 'login' }">Войти</RouterLink>
      </p>
    </section>

    <p class="register__note">Бесплатный тариф · Без банковской карты</p>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.register {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: f.fluid(32px, 48px, 1440px, 1920px) 24px;
  background-color: v.$bg-color;

  &__card {
    width: 100%;
    max-width: 512px;
    padding: f.fluid(28px, 32px, 1440px, 1920px);
    background-color: v.$card-color;
    border: 1px solid v.$border-color;
    border-radius: v.$border-radius-card;
  }

  &__title {
    font-family: v.$font-head;
    font-weight: 600;
    font-size: f.fluid(24px, 26px, 1440px, 1920px);
    line-height: 1.3;
    color: v.$text-color;
  }

  &__description,
  &__consent,
  &__hint,
  &__login,
  &__note {
    font-size: 13px;
    line-height: 1.5;
    color: v.$muted-color;
  }

  &__description {
    margin-top: 16px;
    font-size: 14px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: v.$text-color;
  }

  &__input {
    width: 100%;
    min-height: 46px;
    padding: 0 14px;
    border: 1px solid v.$border-color;
    border-radius: v.$border-radius-button;
    outline: none;
    background-color: v.$bg-color;
    color: v.$text-color;
    font-size: 14px;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: v.$muted-color;
    }

    &:focus {
      border-color: v.$accent-color;
    }
  }

  &__hint {
    margin-top: -2px;
    font-size: 11px;
  }

  &__submit {
    min-height: 46px;
    border-radius: v.$border-radius-button;
    font-size: 14px;
  }

  &__consent {
    margin-top: 16px;
    font-size: 11px;

    a {
      color: v.$accent-color;
    }
  }

  &__login {
    margin-top: 18px;
    text-align: center;

    a {
      margin-left: 4px;
      color: v.$accent-color;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &__note {
    margin-top: 12px;
    font-size: 12px;
  }

  @include m.mobile {
    padding-inline: 20px;

    &__card {
      padding: 24px 20px;
    }
  }
}
</style>
