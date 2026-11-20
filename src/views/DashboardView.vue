<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import StatusIcon from '@/components/ui/StatusIcon.vue'
import type { StatusType } from '@/types/status'

interface Monitor {
  name: string
  url: string
  status: StatusType
  label: string
  response: string
  uptime: string
  points: string
}

const monitors: Monitor[] = [
  {
    name: 'Основной сайт',
    url: 'https://example.com',
    status: 'success',
    label: 'Работает',
    response: '284 мс',
    uptime: '99.9%',
    points: '0 16 24 12 34 10 44 17 56 8 68 13 80 7 92 12 104 9 116 14',
  },
  {
    name: 'API приложения',
    url: 'https://api.example.com/health',
    status: 'success',
    label: 'Работает',
    response: '96 мс',
    uptime: '99.8%',
    points: '0 18 12 13 24 16 36 9 48 14 60 11 72 15 84 8 96 12 108 10 120 14',
  },
  {
    name: 'API оплаты',
    url: 'https://pay.example.com/health',
    status: 'danger',
    label: 'Не отвечает',
    response: '—',
    uptime: '58%',
    points: '0 14 12 15 24 13 36 16 48 14 60 17 72 16 84 16 96 17 108 17 120 17',
  },
  {
    name: 'Личный кабинет',
    url: 'https://app.example.com',
    status: 'warning',
    label: 'Замедление',
    response: '2 148 мс',
    uptime: '99.4%',
    points: '0 19 12 18 24 17 36 18 48 14 60 15 72 11 84 12 96 7 108 8 120 6',
  },
  {
    name: 'Документация',
    url: 'https://docs.example.com',
    status: 'success',
    label: 'Работает',
    response: '342 мс',
    uptime: '99.9%',
    points: '0 17 12 13 24 15 36 10 48 13 60 9 72 14 84 11 96 13 108 8 120 12',
  },
  {
    name: 'Страница статуса',
    url: 'https://status.example.com',
    status: 'success',
    label: 'Работает',
    response: '118 мс',
    uptime: '99.9%',
    points: '0 18 12 13 24 15 36 11 48 14 60 10 72 12 84 8 96 12 108 9 120 11',
  },
]

const statusCards = [
  { label: 'Всего мониторов', value: '6', modifier: '' },
  { label: 'Работают', value: '4', modifier: 'success' },
  { label: 'Замедление', value: '1', modifier: 'warning' },
  { label: 'Не отвечает', value: '1', modifier: 'danger' },
]
</script>

<template>
  <main class="dashboard">
    <aside class="dashboard__sidebar">
      <RouterLink to="/" class="dashboard__brand">
        <img src="@/assets/icons/full-logo.svg" alt="Пульс" width="120" height="32" />
      </RouterLink>

      <div class="dashboard__workspace">
        <strong>Моё пространство</strong>
        <span>Личный аккаунт</span>
      </div>

      <nav class="dashboard__nav" aria-label="Навигация в панели управления">
        <a class="dashboard__nav-link dashboard__nav-link--active" href="#monitors">Мониторы</a>
        <a class="dashboard__nav-link" href="#notifications">Уведомления</a>
        <a class="dashboard__nav-link" href="#billing">Тариф и оплата</a>
        <a class="dashboard__nav-link" href="#settings">Настройки</a>
      </nav>

      <div class="dashboard__help">
        <strong>Нужна помощь?</strong>
        <a href="#">Написать в Telegram</a>
      </div>

      <div class="dashboard__account">
        <span>name@company.ru</span>
        <RouterLink to="/login">Выйти</RouterLink>
      </div>
    </aside>

    <section class="dashboard__content" id="monitors">
      <header class="dashboard__topbar">
        <p>Моё пространство / Мониторы</p>
        <div>
          <span>Тариф «Бесплатный»</span>
          <BaseButton text="Настройки" variant="secondary" />
        </div>
      </header>

      <div class="dashboard__heading">
        <div>
          <h1>Мониторы</h1>
          <p>Данные мониторинга сайтов и API</p>
        </div>
        <BaseButton text="＋ Добавить монитор" />
      </div>

      <div class="dashboard__stats">
        <article v-for="card in statusCards" :key="card.label" class="dashboard__stat" :class="`dashboard__stat--${card.modifier}`">
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
        <input type="search" placeholder="Найти по названию или адресу" aria-label="Поиск мониторів" />
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
              <th>Последняя проверка</th>
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
              <td :class="`dashboard__status dashboard__status--${monitor.status}`">{{ monitor.response }}</td>
              <td>
                <svg class="dashboard__sparkline" viewBox="0 0 120 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline :points="monitor.points" />
                </svg>
              </td>
              <td :class="`dashboard__status dashboard__status--${monitor.status}`">{{ monitor.uptime }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dashboard__table-meta">
        <span>Показаны все мониторы</span>
        <span>График: последние проверки</span>
      </div>

      <article class="dashboard__telegram" id="notifications">
        <div>
          <strong>Telegram подключен</strong>
          <p>В этом примере уведомления приходят в чат «Команда продукта».</p>
        </div>
        <BaseButton text="Настроить оповещения" variant="secondary" />
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.dashboard {
  display: flex;
  min-height: 100vh;
  color: v.$text-color;
  font-size: 13px;

  &__sidebar {
    position: sticky;
    top: 0;
    display: flex;
    flex: 0 0 250px;
    flex-direction: column;
    min-height: 100vh;
    padding: 24px 20px;
    background-color: #111c19;
    border-right: 1px solid v.$border-color;
  }

  &__brand {
    margin-bottom: 28px;
  }

  &__workspace {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px;
    background-color: v.$bg-color;
    border: 1px solid v.$border-color;
    border-radius: 8px;

    strong { font-size: 13px; }
    span { color: v.$muted-color; font-size: 11px; }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 28px;
  }

  &__nav-link {
    padding: 12px 14px;
    border-radius: 8px;
    color: v.$muted-color;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover, &--active {
      background-color: v.$bg-color;
      color: v.$accent-color;
    }
  }

  &__help {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: auto;
    padding-bottom: 28px;

    strong { font-size: 12px; }
    a { color: v.$accent-color; font-size: 12px; }
  }

  &__account {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: v.$muted-color;
    font-size: 11px;

    a { color: v.$text-color; }
  }

  &__content {
    width: min(100%, 1260px);
    padding: 28px 48px 48px;
  }

  &__topbar,
  &__topbar > div,
  &__heading,
  &__heading > div,
  &__alert,
  &__telegram,
  &__table-meta {
    display: flex;
    align-items: center;
  }

  &__topbar {
    justify-content: space-between;
    color: v.$muted-color;
    font-size: 11px;

    > div { gap: 20px; }
  }

  &__heading {
    justify-content: space-between;
    gap: 24px;
    margin-top: 38px;

    h1 {
      font-family: v.$font-head;
      font-size: 28px;
      font-weight: 600;
    }

    p { margin-top: 8px; color: v.$muted-color; }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-top: 28px;
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 20px;
    background-color: v.$card-color;
    border: 1px solid v.$border-color;
    border-radius: 12px;

    span { color: v.$muted-color; font-size: 11px; }
    strong { font-size: 22px; font-weight: 500; }
    &--success strong { color: v.$accent-color; }
    &--warning strong { color: v.$warning-color; }
    &--danger strong { color: v.$danger-color; }
  }

  &__alert,
  &__telegram {
    justify-content: space-between;
    gap: 20px;
    padding: 18px 20px;
    border: 1px solid v.$danger-color;
    border-radius: 10px;
  }

  &__alert { margin-top: 20px; }
  &__alert strong { font-size: 12px; }
  &__alert p, &__telegram p { margin-top: 7px; color: v.$muted-color; font-size: 11px; }

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    margin-top: 18px;

    input, button {
      min-height: 40px;
      padding: 0 14px;
      border: 1px solid v.$border-color;
      border-radius: 8px;
      background-color: transparent;
      color: v.$text-color;
      font: inherit;
      font-size: 11px;
    }

    input::placeholder { color: v.$muted-color; }
    button:hover { border-color: v.$accent-color; }
  }

  &__table-wrap {
    overflow-x: auto;
    margin-top: 18px;
    background-color: v.$card-color;
    border: 1px solid v.$border-color;
    border-radius: 12px;
  }

  &__table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
    text-align: left;

    th, td { padding: 16px 14px; }
    th { color: v.$muted-color; font-size: 10px; font-weight: 400; }
    td { border-top: 1px solid rgba(38, 51, 46, 0.55); font-size: 11px; }
    td:first-child { width: 32%; }
    td:first-child strong, td:first-child span { display: block; }
    td:first-child span { margin-top: 6px; color: v.$muted-color; font-family: v.$font-mono; font-size: 10px; }
  }

  &__status {
    white-space: nowrap;
    &--success { color: v.$accent-color; }
    &--warning { color: v.$warning-color; }
    &--danger { color: v.$danger-color; }
    .status-icon { display: inline-block; margin-right: 7px; vertical-align: -2px; }
  }

  &__sparkline {
    width: 120px;
    height: 24px;
    overflow: visible;
    polyline { fill: none; stroke: v.$accent-color; stroke-width: 1.5; }
  }

  &__table-meta {
    justify-content: space-between;
    margin-top: 14px;
    color: v.$muted-color;
    font-size: 11px;
  }

  &__telegram {
    margin-top: 24px;
    border-color: v.$border-color;
    background-color: v.$card-color;
    strong { color: v.$accent-color; font-size: 12px; }
  }

  @include m.tablet {
    &__sidebar { flex-basis: 210px; padding-inline: 14px; }
    &__content { padding-inline: 28px; }
    &__stats { grid-template-columns: repeat(2, 1fr); }
  }

  @include m.mobile {
    display: block;

    &__sidebar {
      position: static;
      min-height: auto;
      padding: 16px;
    }

    &__brand { margin-bottom: 16px; }
    &__workspace, &__help, &__account { display: none; }
    &__nav { flex-direction: row; overflow-x: auto; margin-top: 0; }
    &__nav-link { flex-shrink: 0; padding: 10px; font-size: 11px; }
    &__content { padding: 24px 16px 32px; }
    &__topbar > p, &__topbar > div > span { display: none; }
    &__topbar { justify-content: flex-end; }
    &__heading { align-items: flex-start; flex-direction: column; }
    &__heading .button { width: 100%; }
    &__stats { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    &__stat { padding: 14px; gap: 12px; }
    &__alert, &__telegram { align-items: flex-start; flex-direction: column; }
    &__alert .button, &__telegram .button { width: 100%; }
    &__filters { grid-template-columns: 1fr 1fr; }
    &__filters input { grid-column: 1 / -1; }
    &__table-meta { gap: 12px; flex-direction: column; align-items: flex-start; }
  }
}
</style>
