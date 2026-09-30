<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const email = ref("");
const isSubscribing = ref(false);
const subscriptionMessage = ref("");

const subscribeNewsletter = async () => {
  if (!email.value) return;

  isSubscribing.value = true;
  subscriptionMessage.value = "";

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email.value.includes("@")) {
    subscriptionMessage.value = t("newsletter.successMsg");
    email.value = "";

    setTimeout(() => {
      subscriptionMessage.value = "";
    }, 5000);
  } else {
    subscriptionMessage.value = t("newsletter.invalidMsg");
  }

  isSubscribing.value = false;
};
</script>

<template>
  <div class="newsletter-content">
    <h3 class="newsletter-description">
      {{ $t("newsletter.description") }}
    </h3>

    <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
      <div class="form-group">
        <input
          type="email"
          v-model="email"
          :placeholder="$t('newsletter.emailPlaceholder')"
          required
          class="email-input"
        />
        <button type="submit" class="subscribe-btn" :disabled="isSubscribing">
          {{ isSubscribing ? $t("newsletter.subscribing") : $t("newsletter.subscribe") }}
        </button>
      </div>

      <div class="form-message" v-if="subscriptionMessage">
        {{ subscriptionMessage }}
      </div>
    </form>
  </div>
</template>

<style scoped>
.newsletter-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.newsletter-description {
  padding-top: 25px;
  color: #aaa;
  flex: 1;
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}

.newsletter-form {
  width: 100%;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;
}

.email-input {
  flex: 1;
  background: transparent;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 14px 16px;
  color: #fff;
  font-family: inherit;
  transition: all 0.3s ease;
}

.email-input::placeholder {
  color: #666;
}

.email-input:focus {
  outline: none;
  border-color: #555;
  background: rgba(255, 255, 255, 0.05);
}

.subscribe-btn {
  background: #fff;
  color: #000;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
}

.subscribe-btn:hover {
  background: #e0e0e0;
  transform: translateY(-1px);
}

.subscribe-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-message {
  color: #4caf50;
  margin: 8px 0;
  padding: 8px 12px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  animation: fadeIn 0.3s ease;
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .form-message {
    font-size: var(--font-size-body-nano);
  }
  .newsletter-description {
    font-size: var(--font-size-body-sm);
    padding: 5px;
    text-align: center;
  }
  .form-group {
    flex-direction: column;
  }
  .email-input {
    font-size: var(--font-size-body-nano);
  }
  .subscribe-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
  }
}
</style>
