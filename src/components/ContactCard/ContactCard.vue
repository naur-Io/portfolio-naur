<script setup>
import { ref } from "vue";

const contactMessage = ref("");

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("ruanrickelmeramos@gmail.com");
    contactMessage.value = "Email copied to clipboard!";

    setTimeout(() => {
      contactMessage.value = "";
    }, 2000);
  } catch (err) {
    contactMessage.value = "Failed to copy email";

    setTimeout(() => {
      contactMessage.value = "";
    }, 2000);
  }
};
</script>

<template>
  <div class="contact-content">
    <div class="contact-text">
      <h3 class="contact-title">Tem algum projeto em mente?</h3>
      <p class="contact-subtitle">Vamos criar algo incrível em parceria.</p>
      <div class="contact-actions">
        <div class="contact-link" @click="copyEmail">
          <span>ruanrickelmeramos@gmail.com</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="copy-icon"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="contact-message" v-if="contactMessage">
      {{ contactMessage }}
    </div>
  </div>
</template>

<style scoped>
.contact-content {
  
}

.contact-text {
  flex: 1;
}

.contact-title {
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.3;
  letter-spacing: -0.2px;
  font-size: var(--font-size-title-xs);
  font-weight: var(--font-weight-semibold);
}

.contact-subtitle {
  line-height: 1.5;
  color: #888;
  margin: 0;
  max-width: 90%;
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  padding-top: 10px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  cursor: pointer;
  padding: 12px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.03);
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
}

.contact-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.03);
  border-color: #333;
}

.contact-link .copy-icon {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.contact-link:hover .copy-icon {
  opacity: 1;
  color: #fff;
}

.contact-message {
  color: white;
  margin-top: 8px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: fadeIn 0.3s ease;
  text-align: center;
  backdrop-filter: blur(2px);
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

@media (max-width: 1200px) {
  .contact-title {
    font-size: var(--font-size-title-sm);
  }
  .contact-subtitle {
    font-size: var(--font-size-body-xs);
  }
}

@media (max-width: 768px) {
  .contact-content {
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact-title {
    font-size: var(--font-size-title-xs);
    text-align: center;
  }
  .contact-subtitle {
    font-size: var(--font-size-body-xxs);
    max-width: 100%;
    text-align: center;
  }
  .contact-link {
    font-size: var(--font-size-body-xs);
  }
  .contact-message {
    font-size: 10px;
    padding: 3px 6px;
    margin-top: 3px;
  }
}
</style>
