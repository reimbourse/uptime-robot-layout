<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import StatusIcon from '@/components/ui/StatusIcon.vue'
import dangerPath from '@/assets/images/danger-path.svg'
import successPath from '@/assets/images/succes-path.svg'
import warningPath from '@/assets/images/warning-path.svg'
import { useAuthStore } from '@/stores/auth'
import type { StatusType } from '@/types/status'

const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
}

interface Monitor {
  name: string
  url: string
  status: StatusType
  label: string
  response: string
  uptime: string
}

const monitors: Monitor[] = [
  {
    name: 'Основной сайт',
    url: 'https://example.com',
    status: 'success',
    label: 'Работает',
    response: '184 мс',
    uptime: '200',
  },
  {
    name: 'API приложения',
    url: 'https://api.example.com/health',
    status: 'success',
    label: 'Работает',
    response: '96 мс',
    uptime: '200',
  },
  {
    name: 'API оплаты',
    url: 'https://pay.example.com/health',
    status: 'danger',
    label: 'Не отвечает',
    response: '—',
    uptime: '503',
  },
  {
    name: 'Личный кабинет',
    url: 'https://app.example.com',
    status: 'warning',
    label: 'Замедление',
    response: '2 148 мс',
    uptime: '200',
  },
  {
    name: 'Документация',
    url: 'https://docs.example.com',
    status: 'success',
    label: 'Работает',
    response: '142 мс',
    uptime: '200',
  },
  {
    name: 'Страница статуса',
    url: 'https://status.example.com',
    status: 'success',
    label: 'Работает',
    response: '118 мс',
    uptime: '200',
  },
]

const statusCards = [
  { label: 'Всего мониторов', value: '6', modifier: '' },
  { label: 'Работают', value: '4', modifier: 'success' },
  { label: 'Замедление', value: '1', modifier: 'warning' },
  { label: 'Не отвечает', value: '1', modifier: 'danger' },
]

const statusPaths: Record<StatusType, string> = {
  success: successPath,
  warning: warningPath,
  danger: dangerPath,
}
</script>

<template>
  <main class="dashboard">
    <header class="dashboard__header">
      <div class="dashboard__header-inner">
        <div class="dashboard__brand-group">
          <RouterLink to="/" class="dashboard__brand">
            <img src="@/assets/icons/full-logo.svg" alt="Пульс" width="120" height="32" />
          </RouterLink>
          <RouterLink to="/" class="dashboard__home-link">← На главную</RouterLink>
        </div>
        <RouterLink to="/login" class="dashboard__logout" @click="logout">Выйти</RouterLink>
      </div>
    </header>

    <section class="dashboard__content" id="monitors">
      <div class="dashboard__account-bar">
        <span>Тариф «Команда»</span>
        <a href="#billing">Все тарифы</a>
      </div>

      <div class="dashboard__heading">
        <div>
          <h1>Мониторы</h1>
          <p>Демоданные: пример состояния сайтов и API</p>
        </div>
        <BaseButton text="＋ Добавить монитор" />
      </div>

      <div class="dashboard__stats">
        <article
          v-for="card in statusCards"
          :key="card.label"
          class="dashboard__stat"
          :class="`dashboard__stat--${card.modifier}`"
        >
          <span>{{ card.label }}</span>
          <strong>{{ card.value }}</strong>
        </article>
      </div>

      <article class="dashboard__alert">
        <div>
          <strong>API оплаты не отвечает</strong>
          <p>HTTP 503 · Уведомление отправлено в Telegram</p>
        </div>
        <BaseButton text="Открыть монитор" variant="secondary" />
      </article>

      <div class="dashboard__filters">
        <input type="search" placeholder="Найти по названию или адресу" aria-label="Поиск мониторов" />
        <button type="button">Все статусы</button>
        <button type="button">Обновить</button>
      </div>

      <div class="dashboard__table-wrap">
        <table class="dashboard__table">
          <thead>
            <tr>
              <th>Монитор</th>
              <th>Статус</th>
              <th>Ответ</th>
              <th>Последние проверки</th>
              <th>Код</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="monitor in monitors" :key="monitor.name">
              <td>
                <strong>{{ monitor.name }}</strong>
                <span>{{ monitor.url }}</span>
              </td>
              <td :class="`dashboard__status dashboard__status--${monitor.status}`">
                <StatusIcon :type="monitor.status" />{{ monitor.label }}
              </td>
              <td :class="`dashboard__status dashboard__status--${monitor.status}`">
                {{ monitor.response }}
              </td>
              <td>
                <img
                  class="dashboard__sparkline"
                  :src="statusPaths[monitor.status]"
                  alt=""
                  aria-hidden="true"
                />
              </td>
              <td :class="`dashboard__status dashboard__status--${monitor.status}`">
                {{ monitor.uptime }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dashboard__table-meta">
        <span>Показаны все мониторы</span>
        <span>Графики: последние проверки</span>
      </div>

      <article class="dashboard__telegram" id="notifications">
        <strong>Telegram подключён</strong>
        <p>В этом примере уведомления приходят в чат «Команда продукта».</p>
      </article>

      <a class="dashboard__support" href="#">Поддержка в Telegram</a>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.dashboard {
  min-height: 100vh;
  color: v.$text-color;
  background-color: v.$bg-color;

  &__header {
    border-bottom: 1px solid rgba(38, 51, 46, 0.55);
  }

  &__header-inner,
  &__content {
    width: calc(100% - 48px);
    max-width: 960px;
    margin-inline: auto;
  }

  &__header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 72px;
  }

  &__brand-group {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  &__brand {
    flex-shrink: 0;

    img {
      display: block;
    }
  }

  &__home-link,
  &__logout {
    color: v.$text-color;
    font-size: 13px;
    transition: color 0.2s ease;

    &:hover {
      color: v.$accent-color;
    }
  }

  &__content {
    padding-top: 42px;
    padding-bottom: 48px;
  }

  &__account-bar {
    display: flex;
    gap: 24px;
    color: v.$muted-color;
    font-size: 13px;

    a {
      color: v.$text-color;

      &:hover {
        color: v.$accent-color;
      }
    }
  }

  &__heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-top: 34px;

    h1 {
      font-family: v.$font-head;
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
    }

    p {
      margin-top: 8px;
      color: v.$muted-color;
      font-size: 13px;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 28px;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-height: 98px;
    padding: 20px;
    background-color: v.$card-color;
    border: 1px solid v.$border-color;
    border-radius: 12px;

    span {
      color: v.$muted-color;
      font-size: 12px;
    }

    strong {
      font-size: 25px;
      font-weight: 500;
    }

    &--success strong { color: v.$accent-color; }
    &--warning strong { color: v.$warning-color; }
    &--danger strong { color: v.$danger-color; }
  }

  &__alert,
  &__telegram {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 18px;
    border-radius: 10px;
  }

  &__alert {
    margin-top: 22px;
    border: 1px solid v.$danger-color;
  }

  &__alert strong,
  &__telegram strong {
    font-size: 13px;
  }

  &__alert p,
  &__telegram p {
    margin-top: 8px;
    color: v.$muted-color;
    font-family: v.$font-mono;
    font-size: 12px;
  }

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    margin-top: 24px;

    input,
    button {
      min-height: 44px;
      padding: 0 14px;
      border: 1px solid v.$border-color;
      border-radius: 9px;
      outline: none;
      background: transparent;
      color: v.$text-color;
      font: inherit;
      font-size: 12px;
    }

    input:focus { border-color: v.$accent-color; }
    input::placeholder { color: v.$muted-color; }
    button:hover { border-color: v.$accent-color; }
  }

  &__table-wrap {
    overflow-x: auto;
    margin-top: 24px;
    background-color: v.$card-color;
    border: 1px solid v.$border-color;
    border-radius: 12px;
  }

  &__table {
    width: 100%;
    min-width: 760px;
    border-collapse: collapse;
    text-align: left;

    th,
    td {
      padding: 18px;
    }

    th {
      color: v.$muted-color;
      font-size: 11px;
      font-weight: 400;
      background-color: rgba(14, 21, 19, 0.55);
    }

    td {
      border-top: 1px solid rgba(38, 51, 46, 0.5);
      font-size: 12px;
    }

    td:first-child {
      width: 32%;

      strong,
      span {
        display: block;
      }

      span {
        margin-top: 8px;
        color: v.$muted-color;
        font-family: v.$font-mono;
        font-size: 11px;
      }
    }
  }

  &__status {
    white-space: nowrap;

    &--success { color: v.$accent-color; }
    &--warning { color: v.$warning-color; }
    &--danger { color: v.$danger-color; }

    .status-icon {
      display: inline-block;
      margin-right: 8px;
      vertical-align: -2px;
    }
  }

  &__sparkline {
    width: 154px;
    height: auto;
  }

  &__table-meta {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    color: v.$muted-color;
    font-size: 12px;
  }

  &__telegram {
    display: block;
    margin-top: 28px;
    border: 1px solid v.$border-color;
    background-color: v.$card-color;

    strong { color: v.$accent-color; }
  }

  &__support {
    display: inline-flex;
    margin-top: 28px;
    color: v.$text-color;
    font-size: 13px;

    &:hover { color: v.$accent-color; }
  }

  @include m.tablet {
    &__content,
    &__header-inner {
      width: calc(100% - 48px);
      max-width: 760px;
    }

    &__stats {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @include m.mobile {
    &__content,
    &__header-inner {
      width: calc(100% - 32px);
      max-width: 512px;
    }

    &__header-inner {
      min-height: 64px;
    }

    &__brand-group {
      gap: 14px;
    }

    &__brand img {
      width: 96px;
    }

    &__home-link,
    &__logout {
      font-size: 11px;
    }

    &__content {
      padding-top: 28px;
    }

    &__heading {
      align-items: flex-start;
      flex-direction: column;

      .button {
        width: 100%;
      }
    }

    &__stats {
      gap: 8px;
    }

    &__stat {
      min-height: 88px;
      padding: 14px;
    }

    &__alert,
    &__telegram {
      align-items: flex-start;
      flex-direction: column;
    }

    &__alert .button {
      width: 100%;
    }

    &__filters {
      grid-template-columns: 1fr 1fr;

      input { grid-column: 1 / -1; }
    }

    &__table-meta {
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>
