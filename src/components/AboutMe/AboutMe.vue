<script setup>
import { ref } from "vue";

const props = defineProps({
  data: Object,
});

const contactMessage = ref("");

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("ruanrickelmeramos@gmail.com");
    contactMessage.value = "Email copied!";
    setTimeout(() => {
      contactMessage.value = "";
    }, 2000);
  } catch (err) {
    contactMessage.value = "Failed to copy";
    setTimeout(() => {
      contactMessage.value = "";
    }, 2000);
  }
};

const contactMe = () => {
  window.location.href = "mailto:[ruanrickelmeramos@gmail.com]";
};

const currentSkill = ref(0);
const currentAboutImage = ref(0);
const skillTransition = ref(false);
const imageTransition = ref(false);

const nextSkill = () => {
  if (!props.data?.skills) return;
  skillTransition.value = true;
  setTimeout(() => {
    currentSkill.value = (currentSkill.value + 1) % props.data.skills.length;
    setTimeout(() => {
      skillTransition.value = false;
    }, 50);
  }, 150);
};

const setSkill = (i) => {
  if (i === currentSkill.value) return;
  skillTransition.value = true;
  setTimeout(() => {
    currentSkill.value = i;
    setTimeout(() => {
      skillTransition.value = false;
    }, 50);
  }, 150);
};

const nextAboutImage = () => {
  if (!props.data?.gallery) return;
  imageTransition.value = true;
  setTimeout(() => {
    currentAboutImage.value =
      (currentAboutImage.value + 1) % props.data.gallery.length;
    setTimeout(() => {
      imageTransition.value = false;
    }, 50);
  }, 150);
};

const prevAboutImage = () => {
  if (!props.data?.gallery) return;
  imageTransition.value = true;
  setTimeout(() => {
    currentAboutImage.value =
      (currentAboutImage.value - 1 + props.data.gallery.length) %
      props.data.gallery.length;
    setTimeout(() => {
      imageTransition.value = false;
    }, 50);
  }, 150);
};

// Touch handling for skills carousel
const touchStartX = ref(0);
const touchEndX = ref(0);
const touchStartY = ref(0);
const touchEndY = ref(0);

const handleSkillTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
  touchStartY.value = e.touches[0].clientY;
};

const handleSkillTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
  touchEndY.value = e.touches[0].clientY;
};

const handleSkillTouchEnd = () => {
  if (!props.data?.skills) return;

  const minSwipeDistance = 50;
  const swipeDistanceX = touchEndX.value - touchStartX.value;
  const swipeDistanceY = touchEndY.value - touchStartY.value;

  // Check if horizontal swipe is more significant than vertical
  if (
    Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY) &&
    Math.abs(swipeDistanceX) > minSwipeDistance
  ) {
    skillTransition.value = true;

    setTimeout(() => {
      if (swipeDistanceX > 0) {
        // Swipe right - previous skill
        currentSkill.value =
          (currentSkill.value - 1 + props.data.skills.length) %
          props.data.skills.length;
      } else {
        // Swipe left - next skill
        currentSkill.value =
          (currentSkill.value + 1) % props.data.skills.length;
      }

      setTimeout(() => {
        skillTransition.value = false;
      }, 50);
    }, 150);
  }

  // Reset values
  touchStartX.value = 0;
  touchEndX.value = 0;
  touchStartY.value = 0;
  touchEndY.value = 0;
};

// Touch handling for image carousel
const imageTouchStartX = ref(0);
const imageTouchEndX = ref(0);
const imageTouchStartY = ref(0);
const imageTouchEndY = ref(0);

const handleImageTouchStart = (e) => {
  imageTouchStartX.value = e.touches[0].clientX;
  imageTouchStartY.value = e.touches[0].clientY;
};

const handleImageTouchMove = (e) => {
  imageTouchEndX.value = e.touches[0].clientX;
  imageTouchEndY.value = e.touches[0].clientY;
};

const handleImageTouchEnd = () => {
  if (!props.data?.gallery) return;

  const minSwipeDistance = 50;
  const swipeDistanceX = imageTouchEndX.value - imageTouchStartX.value;
  const swipeDistanceY = imageTouchEndY.value - imageTouchStartY.value;

  // Check if horizontal swipe is more significant than vertical
  if (
    Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY) &&
    Math.abs(swipeDistanceX) > minSwipeDistance
  ) {
    imageTransition.value = true;

    setTimeout(() => {
      if (swipeDistanceX > 0) {
        // Swipe right - previous image
        currentAboutImage.value =
          (currentAboutImage.value - 1 + props.data.gallery.length) %
          props.data.gallery.length;
      } else {
        // Swipe left - next image
        currentAboutImage.value =
          (currentAboutImage.value + 1) % props.data.gallery.length;
      }

      setTimeout(() => {
        imageTransition.value = false;
      }, 50);
    }, 150);
  }

  // Reset values
  imageTouchStartX.value = 0;
  imageTouchEndX.value = 0;
  imageTouchStartY.value = 0;
  imageTouchEndY.value = 0;
};
</script>

<template>
  <div class="about-me-container">
    <div class="about-grid">
      <!-- Left Col -->
      <div class="about-column-left">
        <!-- Story Card -->
        <div class="about-card story-card">
          <h2 class="about-title">Life is movement</h2>

          <div class="about-label">ABOUT ME</div>
          <p class="story-text">{{ data.story }}</p>

          <div class="about-label label-mt">WHAT I CURRENTLY DO</div>
          <p class="story-text">{{ data.current }}</p>
        </div>

        <!-- Experience Card -->
        <div class="about-card experience-card">
          <div class="about-label">Company Experince</div>

          <ul class="experience-list">
            <li
              v-for="(job, index) in data.experience"
              :key="index"
              class="job-item"
            >
              <div class="job-header">
                <span class="job-role">{{ job.role }}</span>
                <span class="job-at">at {{ job.company }}</span>
              </div>
              <div class="job-date">{{ job.date }}</div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Col -->
      <div class="about-column-right">
        <!-- What I Do Best -->
        <div class="about-card skills-card">
          <div class="about-label">O QUE FAÇO DE MELHOR</div>

          <div
            class="skills-carousel-content"
            @touchstart="handleSkillTouchStart"
            @touchmove="handleSkillTouchMove"
            @touchend="handleSkillTouchEnd"
          >
            <div
              class="carousel-slide"
              :class="{ 'slide-transition': skillTransition }"
            >
              <h3 class="skill-title">
                {{ data.skills[currentSkill].title }}
              </h3>
              <p class="skill-desc">
                {{ data.skills[currentSkill].desc }}
              </p>
            </div>
          </div>

          <div class="carousel-dots">
            <span
              v-for="(_, index) in data.skills"
              :key="index"
              class="dot"
              :class="{ active: index === currentSkill }"
              @click="setSkill(index)"
            ></span>
          </div>
        </div>

        <!-- Stack -->
        <div class="about-card stack-card">
          <h3 class="stack-title">Stack I use</h3>
          <div class="stack-icons-wrapper">
            <div
              class="stack-icon-box"
              v-for="tool in data.stack"
              :key="tool.name"
            >
              <img :src="tool.icon" :alt="tool.name" />
            </div>
          </div>
        </div>

        <!-- Bottom Split -->
        <div class="about-bottom-split">
          <!-- Image Slider -->
          <div
            class="about-card image-carousel-card"
            @touchstart="handleImageTouchStart"
            @touchmove="handleImageTouchMove"
            @touchend="handleImageTouchEnd"
          >
            <div
              class="image-slide"
              :class="{ 'image-transition': imageTransition }"
            >
              <img
                :src="data.gallery[currentAboutImage]"
                alt="Me"
                class="about-image-cover"
              />
            </div>

            <div class="image-nav-overlay">
              <button class="nav-btn prev" @click.stop="prevAboutImage">
                ‹
              </button>
              <div class="image-dots">
                <span
                  v-for="(_, idx) in data.gallery"
                  :key="idx"
                  class="dot-small"
                  :class="{ active: idx === currentAboutImage }"
                ></span>
              </div>
              <button class="nav-btn next" @click.stop="nextAboutImage">
                ›
              </button>
            </div>
          </div>

          <!-- Contact -->
          <div class="about-card contact-card">
            <h3 class="contact-title">Any ideas in mind ?</h3>
            <button class="copy-email-btn" @click="contactMe">
              <p>{{ contactMessage || "Contact Me" }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-me-container {
  width: 75%;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .about-me-container {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .about-me-container {
    width: 100%;
  }
}

.about-grid {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.about-column-left,
.about-column-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-column-left {
  flex: 1.5;
}

.about-column-right {
  flex: 0.8;
}

.about-card {
  background-color: #111;
  border: 1px solid #222;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.about-title {
  color: #fff;
  margin: 0 0 40px 0;
  font-size: var(--font-size-title-xl);
  font-weight: var(--font-weight-semibold);
}

.about-label {
  letter-spacing: 1.2px;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-bold);
}
.label-mt {
  margin-top: 24px;
}

.story-text {
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
  font-size: var(--font-size-body-md);
}

/* Experience List */
.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.experience-list li {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.job-header {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: baseline;
}
.job-role {
  color: #fff;
  font-size: var(--font-size-body-sm);
}
.job-at {
  color: #666;
  font-size: var(--font-size-body-sm);
}
.job-date {
  color: #444;
  font-size: var(--font-size-body-sm);
}

/* Skills Cards */
.skills-card {
  min-height: 220px;
  justify-content: space-between;
  position: relative;
}
.skills-carousel-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  overflow: hidden;
}
.skills-carousel-content:active {
  cursor: grabbing;
}
.carousel-slide {
  opacity: 1;
  transform: translateX(0);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.carousel-slide.slide-transition {
  opacity: 0;
  transform: translateX(-10px);
}
.skill-title {
  color: #fff;
  margin: 0 0 12px 0;
  font-size: var(--font-size-title-md);
}
.skill-desc {
  color: #999;
  line-height: 1.5;
  margin: 0;
  font-size: 18px;
}
.carousel-dots {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #333;
  cursor: pointer;
  transition: all 0.3s;
}
.dot.active {
  background: #fff;
  transform: scale(1.2);
}

/* Stack */
.stack-card {
  gap: 14px;
}
.stack-title {
  color: #fff;
  margin: 0;
  font-size: 24px;
  font-weight: var(--font-weight-medium);
}

.stack-icons-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.stack-icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2a2a2a;
}
.stack-icon-box img {
  width: 40px;
  height: 40px;
  padding: 2px;
  opacity: 0.8;
}

/* Bottom Split */
.about-bottom-split {
  display: flex;
  gap: 20px;
}
.about-bottom-split > * {
  flex: 0.7;
}

.image-carousel-card {
  padding: 0;
  overflow: hidden;
  position: relative;
  min-height: 200px;
  aspect-ratio: 1/1;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}
.image-carousel-card:active {
  cursor: grabbing;
}
.image-slide {
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: scale(1);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.image-slide.image-transition {
  opacity: 0;
  transform: scale(0.95);
}
.about-image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-nav-overlay {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 6px 12px;
  border-radius: 20px;
  pointer-events: auto;
}
.nav-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
  pointer-events: auto;
}
.image-dots {
  display: flex;
  gap: 4px;
}
.dot-small {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}
.dot-small.active {
  background: #fff;
}

.contact-card {
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  aspect-ratio: 1/1;
}
.contact-title {
  color: #fff;
  line-height: 1.3;
  font-size: var(--font-size-title-sm);
  width: 100%;
}

@media (max-width: 768px) {
  .contact-title {
    font-size: var(--font-size-title-sm);
    text-align: center;
  }
}

.copy-email-btn {
  background: #222;
  border: 1px solid #333;
  color: #aaa;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  font-size: var(--font-size-body-xs);
}
.copy-email-btn:hover {
  background: #333;
  color: #fff;
}

@media (max-width: 768px) {
  .about-grid {
    flex-direction: column;
  }
}
</style>
