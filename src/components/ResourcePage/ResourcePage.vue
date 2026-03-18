<script setup>
defineProps({
  isOpen: Boolean,
  resource: Object,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <Transition name="modal-fade-up">
    <div v-if="isOpen" class="modal-wrapper-fixed">
      <div class="modal-backdrop-bg" @click="emit('close')"></div>

      <div class="modal-card-frame">
        <button class="close-btn" @click="emit('close')">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="modal-scroll-content" v-if="resource">
          <div class="resource-page-container">
            <div class="resource-header">
              <h2>{{ resource.title }}</h2>
              <span>{{ resource.subtitle }}</span>
              <div class="resource-price">{{ resource.price }}</div>
            </div>

            <div class="resource-content-grid">
              <div class="resource-col-left">
                <div class="resource-image-container">
                  <img :src="resource.image" :alt="resource.title" />
                </div>

                <div class="resource-actions">
                  <a
                    :href="resource.getUrl"
                    class="check-app-btn"
                    target="_blank"
                  >
                    See in Github <span>↗</span>
                  </a>
                  <a
                    :href="resource.previewUrl"
                    class="github-btn"
                    target="_blank"
                  >
                    Live Deploy
                  </a>
                </div>
              </div>

              <div class="resource-col-right">
                <div class="resource-description">
                  <h3>Description</h3>
                  <p>{{ resource.description }}</p>
                </div>

                <div class="resource-features">
                  <h3>Features</h3>
                  <ul class="features-list">
                    <li
                      v-for="(feature, index) in resource.features"
                      :key="index"
                    >
                      {{ feature }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Modal Shell (Duplicated) */
.modal-wrapper-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9990;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.modal-backdrop-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.modal-card-frame {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: #090909;
  border: 1px solid #333;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-scroll-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 90px 40px 40px 40px;
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.modal-scroll-content::-webkit-scrollbar {
  display: none;
}

.close-btn {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #333;
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 50;
  backdrop-filter: blur(4px);
}
.close-btn:hover {
  background: #fff;
  color: #000;
  transform: translateX(-50%) rotate(90deg);
}

/* Resource Page Specific */
.resource-page-container {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.resource-header {
  margin-bottom: 40px;
}

.resource-header h2 {
  color: #fff;
  margin: 0 0 8px 0;
  font-size: var(--font-size-title-xl);
}

.resource-header span {
  color: #666;
  display: block;
  margin-bottom: 16px;
  font-size: var(--font-size-body-sm);
}

.resource-price {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: var(--font-size-body-micro);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
}

.resource-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.resource-col-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.resource-image-container {
  width: 100%;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #333;
}

.resource-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.resource-actions {
  display: flex;
  gap: 16px;
}

.resource-col-right {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.resource-description h3,
.resource-features h3 {
  color: #fff;
  margin: 0 0 16px 0;
  font-size: var(--font-size-title-sm);
  font-weight: var(--font-weight-semibold);
}

.resource-description p {
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
  font-size: var(--font-size-body-md);
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.features-list li {
  color: #ddd;
  padding-left: 24px;
  position: relative;
  font-size: var(--font-size-body-sm);
}

.features-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #666;
}

/* Helper for Buttons */
.check-app-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 50px;
  width: fit-content;
  transition: 0.3s;
  border: 1px solid transparent;
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
  justify-content: center;
}
.check-app-btn:hover {
  background: #e0e0e0;
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  width: fit-content;
  transition: 0.3s;
  border: 1px solid #333;
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
  justify-content: center;
}

@media (max-width: 768px) {
  .github-btn {
    padding: 12px 20px;
    font-size: 12px;
    gap: 8px;
    text-align: center;
  }

  .check-app-btn {
    padding: 12px 20px;
    font-size: 12px;
    gap: 8px;
    text-align: center;
  }
}

.github-btn:hover {
  background: #333;
  border-color: #555;
}

/* Transitions */
.modal-fade-up-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-fade-up-leave-active {
  transition: all 0.4s ease;
}
.modal-fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.modal-fade-up-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.modal-fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-fade-up-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

@media (max-width: 900px) {
  .resource-content-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .modal-card-frame {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
}
</style>
