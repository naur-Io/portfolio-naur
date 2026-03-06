<script setup>
import { resourcesData } from "../../utils/resourcesData";

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close", "open-resource"]);
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

        <div class="modal-scroll-content">
          <div class="modal-header">
            <h2>Projetos</h2>
            <span>Sites & Sistemas Desenvolvidos Recentemente</span>
          </div>

          <div class="blog-grid-container">
            <div
              class="blog-card interactive-card"
              v-for="resource in resourcesData"
              :key="resource.id"
              @click="emit('open-resource', resource)"
            >
              <div class="blog-thumb">
                <img :src="resource.image" :alt="resource.title" />
              </div>
              <div class="blog-content">
                <span class="blog-price">{{ resource.price }}</span>
                <span class="blog-price">{{ resource.area }}</span>
                <h3>{{ resource.title }}</h3>
                <p>{{ resource.subtitle }}</p>
                <a
                  href="#"
                  class="read-more"
                  @click.prevent="emit('open-resource', resource)"
                >
                  Saiba Mais <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
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

.modal-header {
  max-width: 900px;
  margin: 0 auto 30px;
}
.modal-header h2 {
  color: #fff;
  margin: 0;
  font-size: var(--font-size-title-xl);
}
.modal-header span {
  color: #666;
  display: block;
  margin-top: 8px;
  font-size: var(--font-size-body-sm);
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

.blog-grid-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* ← 4 COLUNAS FIXAS */
  gap: 24px;
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-card {
  background-color: #111;
  border: 1px solid #222;
  border-radius: 20px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 450px;
}

.blog-card:hover {
  transform: translateY(-4px);
  border-color: #444;
}

.blog-thumb {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.blog-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-thumb img {
  transform: scale(1.05);
}

.blog-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-price {
  color: #fff;
  background: #333;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
  width: fit-content;
  font-size: var(--font-size-body-micro);
  font-weight: var(--font-weight-bold);
}

.blog-content h3 {
  color: #fff;
  margin: 0 0 10px 0;
  line-height: 1.4;
  font-size: var(--font-size-title-sm);
  font-weight: var(--font-weight-semibold);
}

.blog-content p {
  color: #aaa;
  line-height: 1.6;
  margin: 0 0 20px 0;
  flex: 1;
  font-size: var(--font-size-body-sm);
}

.read-more {
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s ease;
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
  padding: 10px;
  border-radius: 32px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid #333;
}

.read-more:hover {
  gap: 10px;
  color: #ccc;
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
  .blog-grid-container {
    grid-template-columns: 1fr;
  }
  .modal-card-frame {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
}
</style>
