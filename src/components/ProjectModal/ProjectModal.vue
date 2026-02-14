<script setup>
import AboutMe from "../AboutMe/AboutMe.vue";
import BlogList from "../BlogList/BlogList.vue";
import VisualGallery from "../VisualGallery/VisualGallery.vue";
import ProjectDetail from "../ProjectDetail/ProjectDetail.vue";

defineProps({
  isOpen: Boolean,
  project: Object,
});

const emit = defineEmits(["close", "open-lightbox"]);
</script>

<template>
  <Transition name="modal-fade-up">
    <div v-if="isOpen && project" class="modal-wrapper-fixed">
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
          <!-- About Me Bento Layout -->
          <div v-if="project.type === 'about-me'" class="about-me-container">
            <AboutMe :data="project" />
          </div>

          <!-- Other Layouts -->
          <div v-else class="standard-content-wrapper">
            <!-- Header for non-about-me projects -->
            <div class="modal-header" v-if="project.type !== 'about-me'">
              <h2>{{ project.title }}</h2>
              <span>{{ project.subtitle }}</span>
            </div>

            <!-- Blog List -->
            <div
              v-if="project.type === 'blog-list'"
              class="blog-grid-container"
            >
              <BlogList :posts="project.posts" />
            </div>

            <!-- Visual Gallery -->
            <div
              v-else-if="project.type === 'visual-gallery'"
              class="visual-gallery-layout"
            >
              <VisualGallery
                :gallery="project.gallery"
                :scrollText="project.scrollText"
                @open-lightbox="(img) => emit('open-lightbox', img)"
              />
            </div>

            <!-- Default Project Detail -->
            <div v-else class="project-detail-layout">
              <ProjectDetail :project="project" />
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
  padding: 90px 10px 10px 10px;
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

.modal-header {
  max-width: 900px;
  margin: 0 auto 30px;
}
.modal-header h2 {
  color: #fff;
  margin: 0;
  font-size: var(--font-size-title-xl);
  font-weight: var(--font-weight-medium);
}
.modal-header span {
  color: #666;
  display: block;
  margin-top: 8px;
  font-size: var(--font-size-body-sm);
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
  .modal-card-frame {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
}
</style>
