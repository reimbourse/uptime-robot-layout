<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import HowItWorksSection from '@/components/sections/HowItWorksSection.vue'
import StatusesSection from '@/components/sections/StatusesSection.vue'
</script>

<template>
  <main>
    <HeroSection />

    <FeaturesSection />

    <HowItWorksSection />

    <StatusesSection />

    <CtaBanner
      title="Пусть у вашего сайта будет свой Пульс"
      description="Добавьте первый монитор и подключите Telegram."
    >
      <template #action>
        <BaseButton>Начать бесплатно</BaseButton>
      </template>
    </CtaBanner>
  </main>
</template>
