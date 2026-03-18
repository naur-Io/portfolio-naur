<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  gallery: Array,
  scrollText: Array,
});

const emit = defineEmits(["open-lightbox"]);

const textObserver = ref(null);

const initObserver = () => {
  if (textObserver.value) textObserver.value.disconnect();

  // Note: We rely on the parent modal having an element with class .modal-scroll-content
  const scrollContainer = document.querySelector(".modal-scroll-content");

  const options = {
    root: scrollContainer || null,
    threshold: 0.5,
    rootMargin: "-10% 0px -10% 0px",
  };

  textObserver.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, options);

  const elements = document.querySelectorAll(".reveal-text");
  elements.forEach((el) => textObserver.value.observe(el));
};

onMounted(() => {
  // Small delay to ensure DOM is ready
  setTimeout(initObserver, 100);
});

onUnmounted(() => {
  if (textObserver.value) textObserver.value.disconnect();
});
</script>

<template>
  <div class="visual-gallery-layout">
    <div class="scroll-text-section">
      <p v-for="(text, index) in scrollText" :key="index" class="reveal-text">
        {{ text }}
      </p>
    </div>

    <div class="gallery-section-title">
      <h3>Recents Shoots</h3>
      <div class="divider"></div>
    </div>

    <div class="visual-grid">
      <div
        v-for="img in gallery"
        :key="img.id"
        class="visual-item"
        @click="emit('open-lightbox', img)"
      >
        <img :src="img.src" alt="Portfolio Work" />
        <div class="visual-overlay">
          <span>View Fullscreen</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visual-gallery-layout {
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 60px;
}

.scroll-text-section {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  font-size: 30px;
}

.reveal-text {
  transition: color 1.8s ease-out;
  margin: 0;
  letter-spacing: 1px;
  color: #333; /* Default hidden color or style */
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-body-md);
}

/* Override size for this specific section based on original */
.scroll-text-section .reveal-text {
  font-size: 40px;
  
}

.reveal-text.in-view {
  color: #fff;
}

.gallery-section-title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 60px 0 40px;
}

.gallery-section-title h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  font-size: var(--font-size-title-sm);
  font-weight: var(--font-weight-semibold);
}

.gallery-section-title .divider {
  height: 1px;
  background-color: #333;
  width: 100%;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  direction: rtl;
}

.visual-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #222;
}

.visual-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.visual-item:hover img {
  transform: scale(1.05);
}

.visual-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.visual-item:hover .visual-overlay {
  opacity: 1;
}

.visual-overlay span {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 50px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: var(--font-size-body-sm);
}

@media (max-width: 768px) {
  .scroll-text-section {
    font-size: 20px;
    padding: 40px 0;
    gap: 40px;
  }
  .scroll-text-section .reveal-text {
    font-size: 20px;
  }
}
</style>
