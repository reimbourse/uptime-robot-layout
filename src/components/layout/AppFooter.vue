<script setup lang="ts">
import FooterBrand from './FooterBrand.vue'
import FooterLink from '../ui/FooterLink.vue'

interface Props {
  showTariffs?: boolean
  showTelegram?: boolean
}

withDefaults(defineProps<Props>(), {
  showTariffs: true,
  showTelegram: true,
})
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <FooterBrand />
      <nav class="footer__nav" aria-label="Навигация в подвале">
        <FooterLink v-if="showTariffs" href="#pricing">Тарифы</FooterLink>
        <FooterLink v-if="showTelegram" href="#">Поддержка в Telegram</FooterLink>
      </nav>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright">© Пульс, 2026</p>
      <nav class="footer__legal" aria-label="Правовая информация">
        <FooterLink href="#" muted>Политика конфиденциальности</FooterLink>
        <FooterLink href="#" muted>Условия использования</FooterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as v;
@use '@/assets/styles/functions' as f;
@use '@/assets/styles/mixins' as m;

.footer {
  background-color: v.$bg-color;
  padding-top: f.fluid(40px, 48px, 1440px, 1920px);
  padding-bottom: f.fluid(32px, 32px, 1440px, 1920px);
  @include m.container-padding;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    flex-wrap: wrap;

    @include m.mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: f.fluid(24px, 32px, 1440px, 1920px);

    @include m.mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: f.fluid(40px, 48px, 1440px, 1920px);
    gap: f.fluid(24px, 32px, 1440px, 1920px);
    flex-wrap: wrap;

    @include m.mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  &__copyright {
    font-family: v.$font-main;
    font-weight: 400;
    font-size: f.fluid(14px, 16px, 1440px, 1920px);
    line-height: 1;
    color: v.$muted-color;
    white-space: nowrap;
  }

  &__legal {
    display: flex;
    align-items: center;
    gap: f.fluid(24px, 32px, 1440px, 1920px);

    @include m.mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }
}
</style>
