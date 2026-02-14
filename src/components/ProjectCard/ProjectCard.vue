<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  bgImage: String,
  customClass: String, // e.g. 'card-cashless'
});

const isTouchActive = ref(false);

const handleTouchStart = () => {
  isTouchActive.value = true;
};

const handleTouchEnd = () => {
  setTimeout(() => {
    isTouchActive.value = false;
  }, 150);
};

const handleTouchCancel = () => {
  isTouchActive.value = false;
};
</script>

<template>
  <div
    class="card project-card interactive-card"
    :class="[customClass, { 'touch-active': isTouchActive }]"
    @click="$emit('click')"
    @touchstart.passive="handleTouchStart"
    @touchend.passive="handleTouchEnd"
    @touchcancel.passive="handleTouchCancel"
  >
    <div class="card-bg" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div class="card-overlay-gradient"></div>

    <div class="hover-footer-info">
      <span class="hover-title">{{ title }}</span>
      <span class="hover-arrow">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #333;
  transition: border-color 0.4s ease;
  /* Parent controls flex size via classes passed in or wrapper */
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 1;
  transition:
    opacity 0.5s ease,
    transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  transform: scale(1.05);
  z-index: 1;
}

.interactive-card:hover .card-bg {
  opacity: 2; /* As in original, though 2 is same as 1 usually, maybe logic was 0.x before */
  transform: scale(1);
}

.card-overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
  opacity: 0.6;
  z-index: 2;
  transition: opacity 0.5s ease;
}

.interactive-card:hover .card-overlay-gradient {
  opacity: 1;
}

.hover-footer-info {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.interactive-card:hover .hover-footer-info {
  opacity: 1;
  transform: translateY(0);
}

.hover-title {
  color: #fff;
  font-size: var(--font-size-title-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

.hover-arrow {
  color: #fff;
  display: flex;
  align-items: center;
}

/* Touch Active (Mobile) Logic integrated */
.touch-active {
  transform: scale(0.98);
  transition: transform 0.2s ease;
}

.touch-active .card-bg {
  transform: scale(1);
}

/* Mobile responsive styles for permanent hover effect */
@media (max-width: 1200px) {
  .hover-footer-info {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  .card-overlay-gradient {
    opacity: 0.8;
  }
}
</style>
