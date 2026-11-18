<script setup lang="ts">
interface Props {
  href: string
  muted?: boolean
}

withDefaults(defineProps<Props>(), {
  muted: false,
})
</script>

<template>
  <a :href="href" class="footer-link" :class="{ 'footer-link--muted': muted }">
    <slot />
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;

.footer-link {
  display: inline-flex;
  align-items: center;
  font-family: v.$font-main;
  font-weight: 500;
  font-size: f.fluid(14px, 16px, 1440px, 1920px);
  line-height: 1;
  color: v.$text-color;
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: v.$accent-color;
  }

  &--muted {
    color: v.$muted-color;

    &:hover {
      color: v.$text-color;
    }
  }
}
</style>
