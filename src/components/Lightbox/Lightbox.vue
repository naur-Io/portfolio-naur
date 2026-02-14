<script setup>
defineProps({
  isOpen: Boolean,
  image: Object,
});

defineEmits(["close"]);
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="lightbox-overlay" @click="$emit('close')">
      <button class="lightbox-close">✕</button>
      <div class="lightbox-content" @click.stop>
        <img :src="image.src" alt="Expanded View" />
        <a
          v-if="image.behanceUrl"
          :href="image.behanceUrl"
          target="_blank"
          class="lightbox-link-btn"
        >
          View Project <span>↗</span>
        </a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
}

.lightbox-close {
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  z-index: 100000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  display: block;
}

.lightbox-link-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #fff;
  color: #000;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;
}

.lightbox-link-btn:hover {
  transform: scale(1.05);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
