<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from './components/layout/AppHeader.vue'
import Footer from './components/layout/AppFooter.vue'

const route = useRoute()
</script>

<template>
  <div class="app" :class="{ 'app--dashboard': route.name === 'dashboard' }">
    <template v-if="route.name !== 'dashboard'">
      <Header :show-navbar="!['login', 'register'].includes(String(route.name))" />
      <router-view />
      <Footer
        :show-tariffs="!['login', 'register'].includes(String(route.name))"
        :show-telegram="!['login', 'register'].includes(String(route.name))"
      />
    </template>
    <router-view v-else />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;
}

.app--dashboard {
  min-height: 100vh;
  background-color: #0a110f;
}
</style>
