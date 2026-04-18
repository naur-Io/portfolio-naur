<script setup>
import { ref } from "vue";
import { projectsData } from "../utils/projectsData";

// Components
import Lightbox from "../components/Lightbox/Lightbox.vue";
import ProjectModal from "../components/ProjectModal/ProjectModal.vue";
import ResourceModal from "../components/ResourceModal/ResourceModal.vue";
import ResourcePage from "../components/ResourcePage/ResourcePage.vue";
import SocialCard from "../components/SocialCard/SocialCard.vue";
import ResourcesTriggerCard from "../components/ResourcesTriggerCard/ResourcesTriggerCard.vue";
import ContactCard from "../components/ContactCard/ContactCard.vue";
import IntroCard from "../components/IntroCard/IntroCard.vue";
import ProfileCard from "../components/ProfileCard/ProfileCard.vue";
import AboutButtonCard from "../components/AboutButtonCard/AboutButtonCard.vue";
import NewsletterCard from "../components/NewsletterCard/NewsletterCard.vue";
import ProjectCard from "../components/ProjectCard/ProjectCard.vue";
import StackCard from "../components/StackCard/StackCard.vue";

// Assets
const beachGif = new URL("../assets/beach.gif", import.meta.url).href;
const blogGif = new URL("../assets/blog.gif", import.meta.url).href;
const projectGif = new URL("../assets/vd2.gif", import.meta.url).href;

// State
const isModalOpen = ref(false);
const activeProject = ref(null);

const isLightboxOpen = ref(false);
const currentLightboxImage = ref(null);

const isResourceModalOpen = ref(false);
const isResourcePageOpen = ref(false);
const activeResource = ref(null);

// Modal Logic
const openModal = (projectKey) => {
  if (projectsData[projectKey]) {
    activeProject.value = projectsData[projectKey];
    isModalOpen.value = true;
    document.body.style.overflow = "hidden";
  }
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    activeProject.value = null;
  }, 400);
  document.body.style.overflow = "";
};

// Resource Logic
const openResourceModal = () => {
  isResourceModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeResourceModal = () => {
  isResourceModalOpen.value = false;
  document.body.style.overflow = "";
};

const openResourcePage = (resource) => {
  activeResource.value = resource;
  isResourcePageOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeResourcePage = () => {
  isResourcePageOpen.value = false;
  setTimeout(() => {
    activeResource.value = null;
  }, 400);
  document.body.style.overflow = "";
};

// Lightbox Logic
const openLightbox = (imgData) => {
  currentLightboxImage.value = imgData;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  setTimeout(() => {
    currentLightboxImage.value = null;
  }, 300);
};
</script>

<template>
  <div class="noise-overlay"></div>

  <!-- Global Modals -->
  <Lightbox
    :isOpen="isLightboxOpen"
    :image="currentLightboxImage"
    @close="closeLightbox"
  />

  <ProjectModal
    :isOpen="isModalOpen"
    :project="activeProject"
    @close="closeModal"
    @open-lightbox="openLightbox"
  />

  <ResourceModal
    :isOpen="isResourceModalOpen"
    @close="closeResourceModal"
    @open-resource="openResourcePage"
  />

  <ResourcePage
    :isOpen="isResourcePageOpen"
    :resource="activeResource"
    @close="closeResourcePage"
  />

  <!-- Main Grid -->
  <div class="bento-container">
    <div class="bento-wrapper">
      <!-- Col 1: Social, Resources, Contact -->
      <div class="main-col flex-[0.9] social-col">
        <SocialCard />

        <ResourcesTriggerCard @click="openResourceModal" />

        <div class="card contact interactive-card card-contact">
          <ContactCard />
        </div>
      </div>

      <!-- Col 2: Intro, Profile, About, Newsletter -->
      <div class="main-col flex-[1.8]">
        <div class="card intro interactive-card">
          <IntroCard />
        </div>

        <div class="row-flex flex-[1]">
          <div class="card profile card-profile">
            <ProfileCard />
          </div>
          <AboutButtonCard @click="openModal('about')" />
        </div>

        <div class="card newsletter interactive-card card-newsletter">
          <NewsletterCard />
        </div>
      </div>

      <!-- Col 3: Projects, Stack -->
      <div class="main-col flex-[1.7]">
        <div class="row-flex flex-[0.6]">
          <ProjectCard
            title="Content Creator"
            :bgImage="projectGif"
            customClass="card project-mobile interactive-card card-cashless"
            @click="openModal('mobile1')"
          />

          <ProjectCard
            title="Blogs"
            :bgImage="blogGif"
            customClass="card project-mobile interactive-card card-blogs"
            @click="openModal('blogs')"
          />
        </div>

        <ProjectCard
          title="Visual Portfolio"
          :bgImage="beachGif"
          customClass="card project-laptop flex-[0.6] interactive-card card-portfolio"
          @click="openModal('laptop')"
        />

        <!-- Stack e Toggle -->
        <div class="row-flex flex-[0.6] stack-toggle-container">
          <div class="card stack flex-[2] interactive-card card-stack">
            <StackCard />
          </div>

          <div class="card toggle flex-[1.5] card-toggle">
            New feature in development
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* CONFIGURAÇÃO ESTRUTURAL MANTIDA */
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap");

/* GLOBAL TYPOGRAPHY VARS */
:root {
  --font-size-title-xl: 42px;
  --font-size-title-lg: 32px;
  --font-size-title-md: 24px;
  --font-size-title-sm: 20px;
  --font-size-title-xs: 18px;

  --font-size-body-lg: 18px;
  --font-size-body-md: 16px;
  --font-size-body-sm: 15px;
  --font-size-body-xs: 14px;
  --font-size-body-xxs: 13px;
  --font-size-body-micro: 12px;
  --font-size-body-nano: 11px;

  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;

  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.8;
}

@media (max-width: 1024px) {
  :root {
    --font-size-title-xl: 36px;
    --font-size-title-lg: 28px;
  }
}

@media (max-width: 768px) {
  :root {
    --font-size-title-xl: 28px;
    --font-size-title-lg: 24px;
  }

  .bento-container {
    flex-direction: column;
    padding: 4px;
  }

  .bento-wrapper {
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    flex-direction: column;
  }

  .main-col {
    flex-direction: column;
    gap: 8px;
    height: auto;
  }

  .row-flex {
    flex-direction: column;
    gap: 8px;
  }

  .card {
    padding: 12px;
  }
}
</style>

<style scoped>
/* MAIN LAYOUT STRUCTURE */
.bento-container {
  display: flex;
  flex-direction: row;
  padding: 8px;
  background-color: #090909;
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.bento-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 16px;
  border: 1px solid #333;
  border-radius: 32px;
  overflow: visible;
  padding: 12px;
  overflow-x: hidden;
}

.main-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  min-width: 0;
}

.row-flex {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

/* CARD BASE STYLE */
.card {
  border: 1px dashed #333; /* Default dashed for empty spots, overridden by components typically */
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a949e;
  padding: 20px;
  overflow: hidden;
  background-color: #141414;
  position: relative;
  transition: background-color 0.3s ease;
}

.card:hover {
  background-color: #1f1f1f;
  transition: background-color 0.4s ease;
}

.card-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

/* INTERACTIVE CARD UTILITY (Shared) */
.interactive-card {
  cursor: pointer;
  border: 1px solid #333;
  position: relative;
  transition: border-color 0.4s ease;
}

/* CARD SIZING (FLEX) - MATCHING ORIGINAL ID/CLASSES */
.intro {
  flex: 1.5;
}
.profile {
  flex: 1;
  aspect-ratio: 1/1;
}
.about {
  flex: 2;
  color: #fff;
}
.newsletter {
  flex: 1.2;
}
.project-mobile {
  flex: 1;
}
.project-laptop {
  flex: 0.6;
} /* Originally flex-[0.6] */
.resources {
  flex: 1.3;
}
.contact {
  flex: 0.9;
}
.stack {
  flex: 2;
}
.toggle {
  flex: 1.5;
}

/* NOISE OVERLAY */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png");
  opacity: 0.05;
  pointer-events: none;
  z-index: 99999;
  background-repeat: repeat;
  animation: noise-animation 0.1s infinite;
}

/* RESPONSIVE LAYOUT */
@media (min-width: 1201px) {
  .bento-wrapper {
    display: flex;
    flex-direction: row;
  }
  .main-col {
    display: flex;
  }
  .row-flex {
    display: flex;
  }
}

@media (max-width: 1200px) {
  .bento-container {
    height: auto;
    overflow-y: auto;
    padding: 0;
    border: none;
  }
  .bento-wrapper {
    flex-direction: column;
    height: auto;
    overflow: visible;
    gap: 16px;
    border: none;
  }

  .main-col,
  .row-flex {
    display: contents;
  }

  .card {
    width: 100%;
    min-height: 200px;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* ORDERING */
  .card-social {
    order: 2;
  }
  .card-about {
    order: 3;
  }
  .card-profile {
    order: 7;
    aspect-ratio: auto;
    height: 250px;
  }
  .card-cashless {
    order: 2;
    min-height: 270px;


  }
  .card-blogs {
    order: 5;
    min-height: 180px;
  }
  .card-portfolio {
    order: 4;
  }
  .card-resources {
    order: 5;
  }

  .stack-toggle-container {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    order: 8;
  }
  .stack-toggle-container .card {
    flex: 1;
    min-height: 180px;
  }
  .card-stack {
    order: 1;
  }
  .card-toggle {
    order: 2;
  }

  .card-newsletter {
    order: 9;
  }
  .card-contact {
    order: 10;
  }
}
</style>
