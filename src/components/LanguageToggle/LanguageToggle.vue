<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const setLanguage = (lang: 'en' | 'pt-BR') => {
  locale.value = lang
}
</script>

<template>
  <div class="language-toggle-card">
    <div class="toggle-header">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="globe-icon"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <span class="toggle-title">{{ t('language.label') }}</span>
    </div>

    <div class="toggle-buttons">
      <button
        type="button"
        class="lang-btn"
        :class="{ active: locale === 'en' }"
        @click="setLanguage('en')"
        aria-label="Switch language to English"
      >
        🇺🇸 EN
      </button>
      <button
        type="button"
        class="lang-btn"
        :class="{ active: locale === 'pt-BR' }"
        @click="setLanguage('pt-BR')"
        aria-label="Switch language to Portuguese"
      >
        🇧🇷 PT-BR
      </button>
    </div>
  </div>
</template>

<style scoped>
.language-toggle-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  box-sizing: border-box;
}

.toggle-header {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #8a949e;
  font-size: var(--font-size-body-xs, 14px);
  font-weight: 500;
}

.globe-icon {
  color: #666;
}

.toggle-buttons {
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 20px;
  padding: 3px;
  gap: 4px;
}

.lang-btn {
  background: transparent;
  border: none;
  color: #888;
  font-size: var(--font-size-body-micro, 12px);
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.lang-btn:hover {
  color: #fff;
}

.lang-btn.active {
  background: #ffffff1f;
  color: #fff;
  border: 1px solid #555;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style>
