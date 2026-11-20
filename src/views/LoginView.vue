<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const login = () => {
  authStore.login()
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <main class="login">
    <section class="login__card" aria-labelledby="login-title">
      <h1 id="login-title" class="login__title">С возвращением</h1>
      <p class="login__description">Войдите, чтобы узнать, как дела у ваших сервисов.</p>

      <form class="login__form" @submit.prevent="login">
        <div class="login__field">
          <label class="login__label" for="login-email">Электронная почта</label>
          <input
            id="login-email"
            class="login__input"
            name="email"
            type="email"
            placeholder="name@company.ru"
            autocomplete="email"
            required
          />
        </div>

        <div class="login__field">
          <label class="login__label" for="login-password">Пароль</label>
          <input
            id="login-password"
            class="login__input"
            name="password"
            type="password"
            placeholder="Введите пароль"
            autocomplete="current-password"
            required
          />
          <a class="login__forgot" href="#">Забыли пароль?</a>
        </div>

        <BaseButton class="login__submit" type="submit" block>Войти</BaseButton>
      </form>

      <p class="login__register">
        Нет аккаунта?
        <RouterLink :to="{ name: 'register' }">Зарегистрироваться</RouterLink>
      </p>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.login {
  display: flex;
  flex: 1;
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
    border-radius: 16px;
  }

  &__title {
    font-family: v.$font-head;
    font-weight: 600;
    font-size: f.fluid(24px, 26px, 1440px, 1920px);
    line-height: 1.3;
    color: v.$text-color;
  }

  &__description {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: v.$muted-color;
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
    border-radius: 10px;
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

  &__forgot {
    align-self: flex-end;
    margin-top: 2px;
    color: v.$accent-color;
    font-size: 13px;
    line-height: 1.4;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  &__submit {
    min-height: 46px;
    border-radius: 10px;
    font-size: 14px;
  }

  &__register {
    margin-top: 20px;
    color: v.$muted-color;
    font-size: 13px;
    line-height: 1.5;
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

  @include m.mobile {
    padding-inline: 20px;

    &__card {
      padding: 24px 20px;
    }
  }
}
</style>
