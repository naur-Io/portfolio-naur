<script setup>
import { ref, nextTick, watch, onUnmounted } from "vue";
const beachGif = new URL('../assets/beach.gif', import.meta.url).href
const blog = new URL('../assets/blog.gif', import.meta.url).href
const projectgif = new URL('../assets/projectgif.gif', import.meta.url).href



const isModalOpen = ref(false);
const activeProject = ref(null);

// Variáveis para o Lightbox (Imagem Expandida)
const isLightboxOpen = ref(false);
const currentLightboxImage = ref(null);

// VARIÁVEIS NOVAS PARA RESOURCES
const isResourceModalOpen = ref(false);
const isResourcePageOpen = ref(false);
const activeResource = ref(null);

// Referências para o Observer de Texto
const textObserver = ref(null);

// =========================================
// VARIÁVEIS PROJETO ABOUT (Bento Grid)
// =========================================
const currentSkill = ref(0);
const currentAboutImage = ref(0);

const nextSkill = () => {
  if (!activeProject.value?.skills) return;
  currentSkill.value =
    (currentSkill.value + 1) % activeProject.value.skills.length;
};
const setSkill = (i) => {
  currentSkill.value = i;
};

const nextAboutImage = () => {
  if (!activeProject.value?.gallery) return;
  currentAboutImage.value =
    (currentAboutImage.value + 1) % activeProject.value.gallery.length;
};
const prevAboutImage = () => {
  if (!activeProject.value?.gallery) return;
  currentAboutImage.value =
    (currentAboutImage.value - 1 + activeProject.value.gallery.length) %
    activeProject.value.gallery.length;
};

// =========================================
// DADOS DOS PROJETOS (INCLUINDO RESOURCES)
// =========================================
const projectsData = {
  about: {
    id: "about",
    type: "about-me",
    title: "About Me",
    subtitle: "Software Developer",
    story:
      "I was born and raised in Cairo, Egypt. Ever since I was a child, I have had a passion for art and design. I was captivated by the vibrant colors and intricate details of the things around me, which inspired me to learn web design, where I delved deeper into the world of UX and product design.",
    current:
      "Today I'm a Design Lead at mano improving the daily process of ordering groceries.",
    experience: [
      { role: "Design Lead", company: "Mano", date: "Current" },
      { role: "Senior Designer", company: "Shopify", date: "2021 – 2022" },
      { role: "Product Designer", company: "OLX", date: "2020 – 2021" },
      { role: "UX/UI Designer", company: "Shrink", date: "2019 – 2020" },
    ],
    skills: [
      {
        title: "Digital Design",
        desc: "Providing innovative problem-solving methods and impactful solutions to ensure a better experience.",
      },
      {
        title: "Frontend Development",
        desc: "Building responsive, accessible, and performant web applications using modern technologies.",
      },
      {
        title: "Micro-Interactions",
        desc: "Adding subtle animations and interactions to delight users.",
      },
    ],
    stack: [
      {
        name: "Framer",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Framer_logo.svg",
      },
      {
        name: "Figma",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
      {
        name: "Notion",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      },
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Vue",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "Node",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  mobile1: {
    id: "mobile1",
    type: "case-study",
    title: "Cashless",
    subtitle: "Mobile App",
    company: "Shrink",
    role: "Design Lead",
    tools: ["Figma", "Framer", "Arc", "Notion"],
    timeline: "2020 — 2021",
    description:
      "Managing finances with tools for tracking expenses and budgeting.",
    context:
      "An app that is a powerful tool designed to help users manage their financial responsibilities effectively. The app offers a range of features, including credit card tracking.",
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1000&auto=format&fit=crop",
  },
  blogs: {
    id: "blogs",
    type: "blog-list",
    title: "Writing",
    subtitle: "Thoughts, tutorials & insights",
    thumb:
      "https://images.pexels.com/photos/5951544/pexels-photo-5951544.jpeg?_gl=1*8vy6cx*_ga*MTc1OTQzMDY0Ny4xNzQ3OTk5OTU1*_ga_8JE65Q40S6*czE3NzAxNDMyOTIkbzEwJGcxJHQxNzcwMTQzMzMwJGoyMiRsMCRoMA..",
    posts: [
      {
        id: 1,
        title: "The Future of UI Design",
        desc: "Exploring how AI and spatial computing are reshaping interface design patterns.",
        date: "Oct 12, 2025",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Mastering CSS Grid",
        desc: "A comprehensive guide to building complex layouts with few lines of code.",
        date: "Sep 28, 2025",
        image:
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Vue 3 Composition API",
        desc: "Why I switched from Options API and how it improved my code reusability.",
        date: "Aug 15, 2025",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Minimalism in 2026",
        desc: "Is the bento-grid trend here to stay? Analyzing modern web trends.",
        date: "Jul 03, 2025",
        image:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  laptop: {
    id: "laptop",
    type: "visual-gallery",
    title: "Visual Portfolio",
    subtitle: "Photography & Audiovisual Direction",
    scrollText: [
      "I'm Tamer, a multi-disciplinary creator specializing in capturing immersive and engaging visual experiences.",
      "My work is characterized by a commitment to clarity, emotion, and attention to detail, ensuring that every frame resonates authentically with its audience.",
      "I have a deep appreciation for lighting and composition. Driven by the desire to innovate and push creative boundaries in the audiovisual industry.",
    ],
    gallery: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project1",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project2",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project3",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project4",
      },
    ],
    thumb:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
};

// =========================================
// DADOS DOS RESOURCES
// =========================================
const resourcesData = [
  {
    id: 1,
    title: "Crystal – Portfolio Template",
    subtitle: "Framer Template",
    price: "Free",
    description:
      "Crysta is a modern, glass-inspired template designed for creators who want to showcase their work with clarity and style.",
    features: [
      "Dark & Light Modes",
      "Elegant Glass Style & Animations",
      "Page Transitions",
      "Fully Responsive",
    ],
    previewUrl: "#",
    getUrl: "#",
    image:
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Klear – Portfolio Template",
    subtitle: "Framer Template",
    price: "Free",
    description:
      "A clean and minimal portfolio template for designers and creatives.",
    features: [
      "Minimal Design",
      "Easy Customization",
      "Responsive Layout",
      "Fast Performance",
    ],
    previewUrl: "#",
    getUrl: "#",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bolder – Portfolio Template",
    subtitle: "Framer Template",
    price: "Free",
    description: "Bold and expressive template for creative professionals.",
    features: [
      "Bold Typography",
      "Interactive Elements",
      "Modern Layout",
      "SEO Optimized",
    ],
    previewUrl: "#",
    getUrl: "#",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sharm – Personal Template",
    subtitle: "Framer Template",
    price: "$49",
    description:
      "Premium personal template with advanced customization options.",
    features: [
      "Premium Design",
      "Advanced Animations",
      "Multiple Layouts",
      "Lifetime Updates",
    ],
    previewUrl: "#",
    getUrl: "#",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Sharm – Personal Template",
    subtitle: "Framer Template",
    price: "$49",
    description:
      "Premium personal template with advanced customization options.",
    features: [
      "Premium Design",
      "Advanced Animations",
      "Multiple Layouts",
      "Lifetime Updates",
    ],
    previewUrl: "#",
    getUrl: "#",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Sharm – Personal Template",
    subtitle: "Framer Template",
    price: "$49",
    description:
      "Premium personal template with advanced customization options.",
    features: [
      "Premium Design",
      "Advanced Animations",
      "Multiple Layouts",
      "Lifetime Updates",
    ],
    previewUrl: "#",
    getUrl: "#",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
  },
];

const openModal = (projectKey) => {
  activeProject.value = projectsData[projectKey];
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";

  // Resets
  currentSkill.value = 0;
  currentAboutImage.value = 0;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    activeProject.value = null;
  }, 400);
  document.body.style.overflow = "";
};

// =========================================
// FUNÇÕES PARA RESOURCES
// =========================================
const openResourceModal = () => {
  isResourceModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeResourceModal = () => {
  isResourceModalOpen.value = false;
  setTimeout(() => {
    activeResource.value = null;
  }, 400);
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

const initObserver = () => {
  if (textObserver.value) textObserver.value.disconnect();

  const options = {
    root: document.querySelector(".modal-scroll-content"),
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

watch(
  () => activeProject.value,
  async (newVal) => {
    if (newVal && newVal.type === "visual-gallery") {
      await nextTick();
      initObserver();
    }
  },
);

onUnmounted(() => {
  if (textObserver.value) textObserver.value.disconnect();
});

const email = ref("");
const isSubscribing = ref(false);
const subscriptionMessage = ref("");

const subscribeNewsletter = async () => {
  if (!email.value) return;

  isSubscribing.value = true;
  subscriptionMessage.value = "";

  // Simulação de chamada API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email.value.includes("@")) {
    subscriptionMessage.value = "🎉 Thank you! Check your email to confirm.";
    email.value = "";

    // Limpa a mensagem após 5 segundos
    setTimeout(() => {
      subscriptionMessage.value = "";
    }, 5000);
  } else {
    subscriptionMessage.value = "Please enter a valid email address.";
  }

  isSubscribing.value = false;
};

// =========================================
// VARIÁVEIS E FUNÇÕES PARA CONTACT CARD
// =========================================
const contactMessage = ref("");

const openContactModal = () => {
  // Aqui você pode implementar a lógica para abrir um modal de contato
  // Por enquanto, apenas mostra uma mensagem
  contactMessage.value = "📧 Opening contact form...";

  setTimeout(() => {
    contactMessage.value = "";
  }, 3000);

  // Simulação de abertura de modal
  console.log("Opening contact modal");
};

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

// =========================================
// MOBILE: FEEDBACK DE TOQUE PARA CARDS
// =========================================

// Detecta mobile por media query
const isMobile = window.matchMedia("(max-width: 1200px)").matches;

if (isMobile) {
  // Seleciona os cards de projeto
  const projectCards = [
    ".card-cashless",
    ".card-blogs", 
    ".card-portfolio"
  ];
  
  // Adiciona feedback de toque
  projectCards.forEach(selector => {
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => {
      // Toque iniciado
      card.addEventListener("touchstart", () => {
        card.classList.add("touch-active");
      }, { passive: true });
      
      // Toque finalizado
      card.addEventListener("touchend", () => {
        card.classList.remove("touch-active");
        
        // Pequeno delay para feedback visual antes do modal abrir
        setTimeout(() => {
          card.classList.remove("touch-active");
        }, 150);
      }, { passive: true });
      
      // Cancelar se o toque for movido para fora
      card.addEventListener("touchcancel", () => {
        card.classList.remove("touch-active");
      }, { passive: true });
    });
  });
}

// =========================================
// DADOS E FUNÇÕES PARA CARROSSEL DE STACK (BENTO GRID)
// =========================================

// Dados das tecnologias (já existente, mas movido para reutilização)
const bentoStackTech = [
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
];

// Duplicamos para efeito de loop infinito
const bentoInfiniteTech = [...bentoStackTech, ...bentoStackTech];
</script>

<template>
  <div class="noise-overlay"></div>

  <!-- Lightbox -->
  <Transition name="fade">
    <div v-if="isLightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <button class="lightbox-close">✕</button>
      <div class="lightbox-content" @click.stop>
        <img :src="currentLightboxImage.src" alt="Expanded View" />
        <a
          :href="currentLightboxImage.behanceUrl"
          target="_blank"
          class="lightbox-link-btn"
        >
          View Project <span>↗</span>
        </a>
      </div>
    </div>
  </Transition>

  <!-- Modal Principal -->
  <Transition name="modal-fade-up">
    <div v-if="isModalOpen" class="modal-wrapper-fixed">
      <div class="modal-backdrop-bg"></div>

      <div class="modal-card-frame">
        <button class="close-btn" @click="closeModal">
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
          <!-- NEW: About Me Bento Layout -->
          <div
            v-if="activeProject.type === 'about-me'"
            class="about-me-container"
          >
            <div class="about-grid">
              <!-- Left Col -->
              <div class="about-column-left">
                <!-- Story Card -->
                <div class="about-card story-card">
                  <h2 class="about-title">What I'm about?</h2>

                  <div class="about-label">MY STORY</div>
                  <p class="story-text">{{ activeProject.story }}</p>

                  <div class="about-label label-mt">WHAT I DO NOW</div>
                  <p class="story-text">{{ activeProject.current }}</p>
                </div>

                <!-- Experience Card -->
                <div class="about-card experience-card">
                  <div class="about-label">EXPERIENCE</div>

                  <ul class="experience-list">
                    <li
                      v-for="(job, index) in activeProject.experience"
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
                  <div class="about-label">WHAT I DO BEST</div>

                  <div class="skills-carousel-content">
                    <h3 class="skill-title">
                      {{ activeProject.skills[currentSkill].title }}
                    </h3>
                    <p class="skill-desc">
                      {{ activeProject.skills[currentSkill].desc }}
                    </p>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(_, index) in activeProject.skills"
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
                      v-for="tool in activeProject.stack"
                      :key="tool.name"
                    >
                      <img :src="tool.icon" :alt="tool.name" />
                    </div>
                  </div>
                </div>

                <!-- Bottom Split -->
                <div class="about-bottom-split">
                  <!-- Image Slider -->
                  <div class="about-card image-carousel-card">
                    <img
                      :src="activeProject.gallery[currentAboutImage]"
                      alt="Me"
                      class="about-image-cover"
                    />

                    <div class="image-nav-overlay">
                      <button class="nav-btn prev" @click.stop="prevAboutImage">
                        ‹
                      </button>
                      <div class="image-dots">
                        <span
                          v-for="(_, idx) in activeProject.gallery"
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
                    <h3 class="contact-title">Have a project<br />in mind?</h3>
                    <button class="copy-email-btn">
                      Copy email
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path
                          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Existing Layouts Wrapped in v-else -->
          <div v-else class="standard-content-wrapper">
            <div class="modal-header">
              <h2>{{ activeProject.title }}</h2>
              <span>{{ activeProject.subtitle }}</span>
            </div>

            <div
              v-if="activeProject.type === 'blog-list'"
              class="blog-grid-container"
            >
              <div
                class="blog-card"
                v-for="post in activeProject.posts"
                :key="post.id"
              >
                <div class="blog-thumb">
                  <img :src="post.image" :alt="post.title" />
                </div>
                <div class="blog-content">
                  <span class="blog-date">{{ post.date }}</span>
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.desc }}</p>
                  <a href="#" class="read-more">Read article <span>→</span></a>
                </div>
              </div>
            </div>

            <div
              v-else-if="activeProject.type === 'visual-gallery'"
              class="visual-gallery-layout"
            >
              <div class="scroll-text-section">
                <p
                  v-for="(text, index) in activeProject.scrollText"
                  :key="index"
                  class="reveal-text"
                >
                  {{ text }}
                </p>
              </div>

              <div class="gallery-section-title">
                <h3>Selected Works</h3>
                <div class="divider"></div>
              </div>

              <div class="visual-grid">
                <div
                  v-for="img in activeProject.gallery"
                  :key="img.id"
                  class="visual-item"
                  @click="openLightbox(img)"
                >
                  <img :src="img.src" alt="Portfolio Work" />
                  <div class="visual-overlay">
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="project-detail-layout">
              <div class="modal-body-grid">
                <div class="modal-col-left">
                  <div class="meta-item">
                    <label>COMPANY</label>
                    <p>{{ activeProject.company }}</p>
                  </div>
                  <div class="meta-item">
                    <label>MY ROLE</label>
                    <p>{{ activeProject.role }}</p>
                  </div>
                  <div class="meta-item">
                    <label>TOOLS</label>
                    <ul class="tools-list">
                      <li v-for="tool in activeProject.tools" :key="tool">
                        {{ tool }}
                      </li>
                    </ul>
                  </div>
                  <div class="meta-item">
                    <label>TIMELINE</label>
                    <p>{{ activeProject.timeline }}</p>
                  </div>
                </div>

                <div class="modal-col-right">
                  <div class="content-block">
                    <label>DESCRIPTION</label>
                    <p>{{ activeProject.description }}</p>
                  </div>
                  <div class="content-block">
                    <label>CONTEXT</label>
                    <p>{{ activeProject.context }}</p>
                  </div>

                  <div class="modal-actions">
                    <a href="#" class="check-app-btn">
                      Check the app <span>↗</span>
                    </a>

                    <a href="#" class="github-btn">
                      View on GitHub
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="modal-image-footer">
                <img :src="activeProject.image" alt="Project Preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Modal de Resources -->
  <Transition name="modal-fade-up">
    <div v-if="isResourceModalOpen" class="modal-wrapper-fixed">
      <div class="modal-backdrop-bg"></div>

      <div class="modal-card-frame">
        <button class="close-btn" @click="closeResourceModal">
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
            <h2>RESOURCES</h2>
            <span>Resources to speed your workflow</span>
          </div>

          <div class="blog-grid-container">
            <div
              class="blog-card interactive-card"
              v-for="resource in resourcesData"
              :key="resource.id"
              @click="openResourcePage(resource)"
            >
              <div class="blog-thumb">
                <img :src="resource.image" :alt="resource.title" />
              </div>
              <div class="blog-content">
                <span class="blog-price">{{ resource.price }}</span>
                <h3>{{ resource.title }}</h3>
                <p>{{ resource.subtitle }}</p>
                <a
                  href="#"
                  class="read-more"
                  @click.prevent="openResourcePage(resource)"
                >
                  View details <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Página Individual de Resource -->
  <Transition name="modal-fade-up">
    <div v-if="isResourcePageOpen" class="modal-wrapper-fixed">
      <div class="modal-backdrop-bg"></div>

      <div class="modal-card-frame">
        <button class="close-btn" @click="closeResourcePage">
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

        <div class="modal-scroll-content" v-if="activeResource">
          <div class="resource-page-container">
            <div class="resource-header">
              <h2>{{ activeResource.title }}</h2>
              <span>{{ activeResource.subtitle }}</span>
              <div class="resource-price">{{ activeResource.price }}</div>
            </div>

            <div class="resource-content-grid">
              <div class="resource-col-left">
                <div class="resource-image-container">
                  <img
                    :src="activeResource.image"
                    :alt="activeResource.title"
                  />
                </div>

                <div class="resource-actions">
                  <a
                    :href="activeResource.getUrl"
                    class="check-app-btn"
                    target="_blank"
                  >
                    Get it for free <span>↗</span>
                  </a>
                  <a
                    :href="activeResource.previewUrl"
                    class="github-btn"
                    target="_blank"
                  >
                    Live preview
                  </a>
                </div>
              </div>

              <div class="resource-col-right">
                <div class="resource-description">
                  <h3>Description</h3>
                  <p>{{ activeResource.description }}</p>
                </div>

                <div class="resource-features">
                  <h3>Features</h3>
                  <ul class="features-list">
                    <li
                      v-for="(feature, index) in activeResource.features"
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

  <!-- Bento Grid Principal -->
  <div class="bento-container">
    <div class="bento-wrapper">
      <!-- Sessão de contatos -->
      <div class="main-col flex-[0.9] social-col">
        <div class="card social-icons card-social">
          <div class="social-grid-inner">
            <a href="#" class="social-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4l11.733 16h4.67l-16.4-16z"
                  stroke="none"
                  fill="currentColor"
                ></path>
                <path
                  d="M4 20l6.768-6.768m2.46-2.46L20 4"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            </a>
            <a href="#" class="social-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path
                  d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-1.1-8.1-1.5-11.54 1.5M12 12a14.7 14.7 0 0 1 8.7-3.26"
                ></path>
              </svg>
            </a>
            <a href="#" class="social-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                ></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" class="social-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8 20h4a3 3 0 0 0 0-6H8zm0-6h3a3 3 0 0 0 0-6H8z"
                ></path>
                <line x1="8" y1="14" x2="8" y2="20"></line>
                <line x1="8" y1="8" x2="8" y2="14"></line>
                <path d="M17 11a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3z"></path>
                <path d="M20 14h-6"></path>
                <line x1="14" y1="8" x2="20" y2="8"></line>
              </svg>
            </a>
            <a href="#" class="social-item">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
            </a>
          </div>
        </div>

        <div
          class="card resources interactive-card card-resources"
          @click="openResourceModal"
        >
          <div class="resources-content">
            <h1>Recent Projects</h1>
            <p>Here are some of my recent projects</p>
          </div>
          <div class="resources-arrow-circle">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div class="card contact interactive-card card-contact">
          <div class="contact-content">
            <div class="contact-text">
              <h3 class="contact-title">Have a project in mind?</h3>
              <p class="contact-subtitle">
                Let's create something amazing together
              </p>
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
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
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
        </div>
      </div>

      <!-- Primeira coluna -->
      <div class="main-col flex-[1.8]">
        <div class="card intro interactive-card">
          <div class="intro-content">
            <div class="intro-header">
              <span class="intro-label">Software Enginner</span>
            </div>

            <h1 class="intro-title">Hi, I'm Naur</h1>

            <div class="intro-location">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Santiago - Chile</span>
            </div>

            <p class="intro-description">
              Software engineer with a passion for Photography & Visual
              Storytelling
            </p>
          </div>
        </div>
        <div class="row-flex flex-[1]">
          <div class="card profile card-profile">
            <img
              src="../assets/yo.jpeg"
              alt="Profile photo"
              class="profile-image"
            />
          </div>
          <div
            class="card about interactive-card card-about"
            @click="openModal('about')"
          >
            <div class="about-content">
              <h1 class="about-title">About</h1>
              <p class="about-description">
                passionate about design and enjoy solving problems.
              </p>
            </div>
            <div class="about-arrow-circle">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        <div class="card newsletter interactive-card card-newsletter">
          <div class="newsletter-content">
            <h3 class="newsletter-description">
              Get design tips & guides straight to your inbox for free!
            </h3>

            <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
              <div class="form-group">
                <input
                  type="email"
                  v-model="email"
                  placeholder="Your email address"
                  required
                  class="email-input"
                />
                <button type="submit" class="subscribe-btn">Subscribe</button>
              </div>

              <div class="form-message" v-if="subscriptionMessage">
                {{ subscriptionMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Segunda coluna -->
      <div class="main-col flex-[1.7]">
        <div class="row-flex flex-[0.6]">
          <div
            class="card project-mobile interactive-card card-cashless"
            @click="openModal('mobile1')"
          >
            <div
              class="card-bg"
              :style="{ backgroundImage: `url(${projectgif})` }"
            ></div>
            <div class="card-overlay-gradient"></div>

            <div class="hover-footer-info">
              <span class="hover-title">Cashless</span>
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

          <div
            class="card project-mobile interactive-card card-blogs"
            @click="openModal('blogs')"
          >
            <div
              class="card-bg"
              :style="{ backgroundImage: `url(${blog})` }"
            ></div>
            <div class="card-overlay-gradient"></div>

            <div class="hover-footer-info">
              <span class="hover-title">Blogs</span>
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
        </div>

        <div
          class="card project-laptop flex-[0.6] interactive-card card-portfolio"
          @click="openModal('laptop')"
        >
          <div
            class="card-bg"
            :style="{ backgroundImage: `url(${beachGif})` }"
          ></div>
          <div class="card-overlay-gradient"></div>

          <div class="hover-footer-info">
            <span class="hover-title">Visual Portfolio</span>
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

        <!-- Stack e Toggle -->
        <div class="row-flex flex-[0.6] stack-toggle-container">
          <div class="card stack flex-[2] interactive-card card-stack">
            <div class="stack-content">
              <div class="stack-header">
                <h3 class="stack-title">Tech Stack</h3>
              </div>
              <div class="stack-carousel-container">
                <div class="stack-carousel-track">
                  <!-- Primeira cópia para loop infinito -->
                  <div
                    v-for="(tech, index) in bentoInfiniteTech"
                    :key="`bento-tech-${index}`"
                    class="tech-item"
                  >
                    <div class="tech-icon">
                      <img :src="tech.icon" :alt="tech.name" />
                    </div>
                  </div>
                </div>

                <!-- Segunda cópia para loop infinito (duplicado para transição perfeita) -->
                <div class="stack-carousel-track stack-carousel-duplicate">
                  <div
                    v-for="(tech, index) in bentoInfiniteTech"
                    :key="`bento-tech-duplicate-${index}`"
                    class="tech-item"
                  >
                    <div class="tech-icon">
                      <img :src="tech.icon" :alt="tech.name" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card toggle flex-[1.5] card-toggle">
            New Feature In Development
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CONFIGURAÇÃO ESTRUTURAL MANTIDA */
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap");

/* ========================================= */
/* PADRONIZAÇÃO TIPOGRÁFICA                  */
/* ========================================= */

/* Desktop (default) */
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

/* Tablet */
@media (max-width: 1024px) {
  :root {
    --font-size-title-xl: 36px;
    --font-size-title-lg: 28px;
    --font-size-title-md: 22px;
    --font-size-title-sm: 18px;
    --font-size-title-xs: 16px;

    --font-size-body-lg: 16px;
    --font-size-body-md: 15px;
    --font-size-body-sm: 14px;
    --font-size-body-xs: 13px;
    --font-size-body-xxs: 12px;
    --font-size-body-micro: 11px;
    --font-size-body-nano: 10px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  :root {
    --font-size-title-xl: 28px;
    --font-size-title-lg: 24px;
    --font-size-title-md: 20px;
    --font-size-title-sm: 18px;
    --font-size-title-xs: 16px;

    --font-size-body-lg: 15px;
    --font-size-body-md: 14px;
    --font-size-body-sm: 13px;
    --font-size-body-xs: 12px;
    --font-size-body-xxs: 11px;
    --font-size-body-micro: 10px;
    --font-size-body-nano: 9px;
  }
}

/* Aplicação da tipografia padronizada */
.intro-title,
.modal-header h2,
.resource-header h2 {
  font-size: var(--font-size-title-xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  padding: 12px 0;
}

.about-title,
.skill-title,
.contact-title {
  font-size: var(--font-size-title-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.about-description,
.skill-description,
.contact-description {
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}

.about-content > h1,
.resources-content > h1,
.stack-title {
  font-size: 24px;
  color: white;
  font-weight: var(--font-weight-medium);
}

.hover-title,
.blog-content h3,
.resource-description h3,
.resource-features h3 {
  font-size: var(--font-size-title-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

.intro-description,
.newsletter-description,
.story-text,
.reveal-text,
.content-block p,
.resource-description p {
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}

.modal-header span,
.resource-header span,
.intro-location,
.job-role,
.job-at,
.job-date,
.skill-desc,
.contact-subtitle,
.blog-content p,
.features-list li {
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.intro-label,
.about-label,
.meta-item label,
.content-block label,
.blog-date,
.blog-price,
.resource-price,
.stack-subtitle,
.counter-label {
  font-size: var(--font-size-body-micro);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-normal);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.about-content > p,
.resources-content > p {
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
}

.read-more,
.check-app-btn,
.github-btn,
.subscribe-btn,
.contact-btn,
.copy-email-btn {
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

.contact-link,
.form-message,
.contact-message {
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

@media (max-width: 768px) {
  .contact-link,
  .form-message,
  .contact-message {
    font-size: var(--font-size-body-nano);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-tight);
  }
}

/* ========================================= */
/* ESTRUTURA PRINCIPAL                        */
/* ========================================= */

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

@media (max-width: 768px) {
  .bento-container {
    padding: 0;
    border: none;
  }

  .bento-wrapper {
    flex-direction: column;
    gap: 0;
    border: none;
  }
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
}

.main-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.row-flex {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.card {
  border: 1px dashed #333;
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

/* ========================================= */
/* CONTROLE TOTAL PARA MOBILE                */
/* ========================================= */

/* Desktop: layout original com containers */
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

/* Mobile: quebra todos os containers e controla cada card individualmente */
@media (max-width: 1200px) {
  .bento-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Remove containers para que os cards sejam filhos diretos */
  .main-col,
  .row-flex {
    display: contents; /* Remove o container, mantém filhos */
  }

  /* FORÇA todos os cards a serem elementos independentes */
  .card {
    width: 100%;
    min-height: 200px;
  }

  /* ORDEM PERSONALIZADA - EXATAMENTE COMO VOCÊ PEDIU */
  .card-social {
    order: 2;
  } /* 1. Sessão de contatos */
  .card-about {
    order: 3;
  } /* 2. About */
  .card-profile {
    order: 2;
  } /* 3. Foto */
  .card-cashless {
    order: 6;
  } /* 4. Cashless */
  .card-blogs {
    order: 5;
  } /* 5. Blogs */
  .card-portfolio {
    order: 4;
  } /* 6. Visual Portfolio */
  .card-resources {
    order: 7;
  } /* 7. Resources */

  /* 8. Stack e Toggle na mesma linha */
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
  } /* Dentro do container */
  .card-toggle {
    order: 2;
  } /* Dentro do container */

  .card-newsletter {
    order: 9;
  } /* 9. Email Input */
  .card-contact {
    order: 10;
  } /* 10. Have a project in Mind */

  /* Ajuste específico para os cards de projeto */
  .card-cashless,
  .card-blogs {
    min-height: 180px;
  }

  /* Garante que os cards não quebrem linha */
  .card {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* ========================================= */
/* MOBILE: HOVER PERMANENTE + FEEDBACK TOQUE */
/* ========================================= */

/* Força hover-footer-info SEMPRE visível no mobile */
.card-cashless .hover-footer-info,
.card-blogs .hover-footer-info,
.card-portfolio .hover-footer-info {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Ajuste visual - reduz opacidade do gradiente para melhor contraste */
.card-cashless .card-overlay-gradient,
.card-blogs .card-overlay-gradient,
.card-portfolio .card-overlay-gradient {
  opacity: 0.8;
}

/* Feedback visual para toque (classe adicionada via JS) */
.card-cashless.touch-active,
.card-blogs.touch-active,
.card-portfolio.touch-active {
  transform: scale(0.98);
  transition: transform 0.2s ease;
}

.card-cashless.touch-active .card-bg,
.card-blogs.touch-active .card-bg,
.card-portfolio.touch-active .card-bg {
  transform: scale(1);
}
}

/* ========================================= */
/* ESTILOS ESPECÍFICOS DOS CARDS             */
/* ========================================= */

.intro {
  position: relative;
  padding: 24px 32px;
  overflow: hidden;
}

.intro-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.intro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  height: 32px;
}

.intro-label {
  letter-spacing: 1.2px;
  color: #555;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 4px;

}

.intro-title {
  color: #fff;
}

.intro-location {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  color: #888;
}

.intro-location svg {
  color: #666;
}

.intro-description {
  color: #aaa;
  margin: 0;
  max-width: 100%;
  flex: 1;
}

.intro-arrow {
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  z-index: 3;
}

.intro.interactive-card:hover .intro-arrow {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

/* Efeito de background sutil */
.intro::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 80%,
      rgba(100, 100, 100, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(50, 50, 50, 0.05) 0%,
      transparent 50%
    );
  z-index: 1;
  pointer-events: none;
}

/* ESTILO PARA RESOURCES */
.resources-content {
  padding: 12px 16px;
}

.resources-content > h1 {
  color: #333;
  margin-bottom: 12px;
}

.resources-content > p {
  line-height: 1;
  color: #aaa;
}

.resources-arrow-circle {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
}

.resources:hover .resources-arrow-circle {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

/* Estilo da seta no card About */
.about-arrow-circle {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
}

.about:hover .about-arrow-circle {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

.about-content {
  padding: 12px 16px;
}

.about-content > h1 {
  color: #333;
  margin-bottom: 12px;
}

.about-content > p {
  line-height: 1;
  color: #aaa;
}

.social-icons {
  background-color: transparent;
  border: none;
}

.social-grid-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
}

.social-item {
  background-color: #1f1f1f;
  border: 1px solid #333;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  aspect-ratio: 1/1;
}

.social-item:hover {
  background-color: #333;
  border-color: #555;
  transform: translateY(-2px);
}
.social-item svg {
  color: #fff;
}

.interactive-card {
  cursor: pointer;
  border: 1px solid #333;
  position: relative;
  transition: border-color 0.4s ease;
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
  opacity: 2;
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
}
.hover-arrow {
  color: #fff;
  display: flex;
  align-items: center;
}

/* ========================================= */
/* MODAIS E LIGHTBOX                         */
/* ========================================= */

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
}
.modal-header span {
  color: #666;
  display: block;
  margin-top: 8px;
}

.blog-grid-container {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding-bottom: 40px;
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

.blog-date {
  color: #666;
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.blog-price {
  color: #fff;
  background: #333;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
  width: fit-content;
}

.blog-content h3 {
  color: #fff;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.blog-content p {
  color: #aaa;
  line-height: 1.6;
  margin: 0 0 20px 0;
  flex: 1;
}

.read-more {
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s ease;
}

.read-more:hover {
  gap: 10px;
  color: #ccc;
}

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

@media (max-width: 768px) {
  .scroll-text-section {
    font-size: 20px;
    padding: 40px 0;
    gap: 40px;
  }
}

.reveal-text {
  transition: color 1.8s ease-out;
  margin: 0;
  letter-spacing: 1px;
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
}

.visual-item {
  position: relative;
  aspect-ratio: 4/3;
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
}

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

.modal-body-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: start;
}

.modal-col-left,
.modal-col-right {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #111;
  border: 1px solid #222;
  border-radius: 24px;
  padding: 32px;
}

.modal-image-footer {
  max-width: 900px;
  margin: 40px auto 0;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #333;
}
.modal-image-footer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.meta-item label,
.content-block label {
  letter-spacing: 1.2px;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
}
.meta-item p,
.tools-list li {
  color: #ddd;
  margin: 0;
}
.tools-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.content-block p {
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
}

.modal-actions {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 10px;
  flex-wrap: wrap;
}

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
}
.github-btn:hover {
  background: #333;
  border-color: #555;
}

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
  .modal-body-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .modal-card-frame {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
  .modal-header h2 {
    font-size: var(--font-size-title-lg);
  }
  .modal-scroll-content {
    padding: 80px 20px 20px 20px;
  }
  .blog-grid-container {
    grid-template-columns: 1fr;
  }
  .reveal-text {
    font-size: var(--font-size-title-md);
  }
}

/* ========================================= */
/* CARD SIZES                                */
/* ========================================= */

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
.resources {
  flex: 1.3;
}
.contact {
  flex: 0.9;
}

@media (max-width: 1200px) {
  .bento-container {
    height: auto;
    overflow-y: auto;
  }
  .bento-wrapper {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }
  .main-col {
    width: 100%;
    height: auto;
  }
  .row-flex {
    flex-direction: column;
  }
  .profile {
    aspect-ratio: auto;
    height: 250px;
  }
  .card {
    min-height: 200px;
  }
}

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
  animation: noise-animation 0.2s infinite;
}

/* ========================================= */
/* CSS ABOUT ME (Bento Grid Modal)           */
/* ========================================= */
.about-me-container {
  width: 100%;
  margin: 0 auto;
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
}

.about-label {
  letter-spacing: 1.2px;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.label-mt {
  margin-top: 24px;
}

.story-text {
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
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
}
.job-at {
  color: #666;
}
.job-date {
  color: #444;
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
}
.skill-title {
  color: #fff;
  margin: 0 0 12px 0;
}
.skill-desc {
  color: #999;
  line-height: 1.5;
  margin: 0;
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
  gap: 24px;
}
.stack-title {
  color: #fff;
  margin: 0;
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
  width: 24px;
  height: 24px;
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
}
.nav-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
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
  margin: 0;
}
.copy-email-btn {
  background: #222;
  border: 1px solid #333;
  color: #aaa;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.copy-email-btn:hover {
  background: #333;
  color: #fff;
}

/* ========================================= */
/* CSS PARA RESOURCE PAGE                    */
/* ========================================= */
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
}

.resource-header span {
  color: #666;
  display: block;
  margin-bottom: 16px;
}

.resource-price {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
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
  flex-direction: column;
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
}

.resource-description p {
  line-height: 1.6;
  color: #b0b0b0;
  margin: 0;
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
}

.features-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #666;
}

@media (max-width: 768px) {
  .about-grid {
    flex-direction: column;
  }

  .resource-content-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .resource-header h2 {
    font-size: var(--font-size-title-lg);
  }
}

/* ========================================= */
/* NEWSLETTER CARD                           */
/* ========================================= */

.newsletter {
  padding: 32px !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  position: relative;
  overflow: hidden;
}

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
}

/* Formulário */
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
  font-family: "DM Sans", sans-serif;
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
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.subscribe-btn:hover {
  background: #e0e0e0;
  transform: translateY(-1px);
}

.subscribe-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.subscribe-btn svg {
  width: 14px;
  height: 14px;
}

.form-message {
  color: #4caf50;
  margin: 8px 0;
  padding: 8px 12px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  animation: fadeIn 0.3s ease;
}

.newsletter-terms {
  color: #666;
  line-height: 1.4;
  margin: 16px 0 0 0;
}

.terms-link {
  color: #888;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.terms-link:hover {
  border-bottom: 1px solid #888;
}

/* Estatísticas */
.newsletter-stats {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #222;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-weight: var(--font-weight-semibold);
  color: #fff;
}

.stat-label {
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 24px;
  background: #333;
}

/* Seta */
.newsletter-arrow {
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  z-index: 3;
}

.newsletter.interactive-card:hover .newsletter-arrow {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

/* Efeito de background sutil */
.newsletter::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 30% 70%,
      rgba(100, 100, 100, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 30%,
      rgba(50, 50, 50, 0.04) 0%,
      transparent 50%
    );
  z-index: 1;
  pointer-events: none;
}

/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 1200px) {
  .form-group {
    flex-direction: column;
  }

  .subscribe-btn {
    width: 100%;
    justify-content: center;
    padding: 5px 10px;
  }

  .newsletter-stats {
    flex-wrap: wrap;
    gap: 12px;
  }
}

@media (max-width: 768px) {
  .newsletter-title {
    font-size: var(--font-size-title-sm);
  }

  .newsletter-description {
    padding: 0 12px;
    margin-bottom: 10px;
    font-size: var(--font-size-body-sm);
    max-width: 100%;
  }

  .stat-number {
    font-size: var(--font-size-body-lg);
  }
}

/* ========================================= */
/* CONTACT CARD                              */
/* ========================================= */

.contact {
  padding: 32px !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  position: relative;
  overflow: hidden;
  height: auto;
}

.contact-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  position: relative;
  z-index: 2;
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  transition: all 0.3s ease;
}

.contact.interactive-card:hover .contact-icon {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border-color: #444;
  transform: scale(1.05);
}

.contact-text {
  flex: 1;
}

.contact-title {
  color: #fff;
  margin: 0 0 8px 0;
  line-height: 1.3;
  letter-spacing: -0.2px;
}

.contact-subtitle {
  line-height: 1.5;
  color: #888;
  margin: 0;
  max-width: 90%;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  padding-top: 10px;
}

.contact-btn {
  background: #fff;
  color: #000;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  width: 100%;
}

.contact-btn:hover {
  background: #e0e0e0;
  transform: translateY(-1px);
}

.contact-btn svg {
  width: 14px;
  height: 14px;
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
}

@media (max-width: 768px) {
  .contact-message {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    font-size: 10px;
    padding: 3px 6px;
    margin-top: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}

/* Seta */
.contact-arrow {
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  z-index: 3;
}

.contact.interactive-card:hover .contact-arrow {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

/* Efeito de background sutil */
.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(100, 100, 100, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(50, 50, 50, 0.04) 0%,
      transparent 50%
    );
  z-index: 1;
  pointer-events: none;
}

/* Responsividade */
@media (max-width: 1200px) {
  .contact-title {
    font-size: var(--font-size-title-sm);
  }

  .contact-subtitle {
    font-size: var(--font-size-body-xs);
  }

  .contact-btn {
    padding: 12px 16px;
    font-size: var(--font-size-body-xs);
  }
}

@media (max-width: 768px) {
  .contact-content {
    gap: 15px;
  }

  .contact-icon {
    width: 48px;
    height: 48px;
  }

  .contact-title {
    font-size: var(--font-size-title-xs);
  }

  .contact-subtitle {
    font-size: var(--font-size-body-xxs);
    max-width: 100%;
  }

  .contact-link {
    font-size: var(--font-size-body-xs);
  }
}

/* ========================================= */
/* STACK CARROSSEL                           */
/* ========================================= */

.stack {
  padding: 32px !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  position: relative;
  overflow: hidden;
}

.stack-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.stack-header {
  margin-bottom: 8px;
}

.stack-title {
  color: #fff;
  margin: 0 0 6px 0;
  line-height: 1.3;
}

.stack-subtitle {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #888;
  font-weight: var(--font-weight-medium);
}

.stack-subtitle svg {
  color: #666;
  width: 10px;
  height: 10px;
}

/* Container do Carrossel */
.stack-carousel-container {
  width: 100%;
  height: 125px;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
}

/* Track do Carrossel (animação) */
.stack-carousel-track {
  display: flex;
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  animation: scrollTechHorizontal 5s linear infinite;
  animation-play-state: running;
  flex-direction: row;
}

/* Animação horizontal */
@keyframes scrollTechHorizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.stack.interactive-card:hover .stack-carousel-track {
  animation-play-state: running;
}

.stack-carousel-duplicate {
  left: calc(100% + 20px);
  top: 12px;
  animation-delay: -15s;
}

/* Itens de Tecnologia */
.tech-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 12px;
  min-width: 100px;
  min-height: 100px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #444;
  transform: translateX(4px);
}

.tech-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.tech-icon img {
  object-fit: contain;
  filter: brightness(0.9);
}

/* Informações da Stack */
.stack-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #222;
}

.stack-description {
  color: #888;
  line-height: 1.4;
  margin: 0;
  max-width: 60%;
}

.stack-counter {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.counter-number {
  font-weight: var(--font-weight-semibold);
  color: #fff;
}

.counter-label {
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Seta */
.stack-arrow {
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  z-index: 3;
}

.stack.interactive-card:hover .stack-arrow {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

/* Efeito de background sutil */
.stack::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 40% 60%,
      rgba(100, 100, 100, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 60% 40%,
      rgba(50, 50, 50, 0.04) 0%,
      transparent 50%
    );
  z-index: 1;
  pointer-events: none;
}

/* Responsividade */
@media (max-width: 1200px) {
  .stack-carousel-container {
    height: 160px;
  }

  .tech-item {
    min-width: 130px;
    padding: 6px 10px;
  }

  .stack-title {
    font-size: var(--font-size-title-sm);
  }

  .stack-description {
    font-size: var(--font-size-body-xxs);
    max-width: 55%;
  }

  .counter-number {
    font-size: var(--font-size-body-lg);
  }
}

@media (max-width: 768px) {
  .stack-content {
    gap: 15px;
  }

  .stack-carousel-container {
    height: 140px;
  }

  .tech-item {
    min-width: 120px;
    padding: 5px 8px;
  }

  .tech-name {
    font-size: var(--font-size-body-xs);
  }

  .stack-title {
    font-size: var(--font-size-title-xs);
  }

  .stack-description {
    font-size: var(--font-size-body-micro);
    max-width: 100%;
    margin-bottom: 8px;
  }

  .stack-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .stack-counter {
    align-items: flex-start;
  }
}

/* ========================================= */
/* PROFILE IMAGE - PREENCHIMENTO TOTAL       */
/* ========================================= */

.profile {
  position: relative; /* Garante contexto de posicionamento */
  padding: 0 !important; /* Remove padding que impede preenchimento */
  overflow: hidden; /* Esconde excessos da imagem */
  display: block; /* Remove comportamentos flex que interferem */
  isolation: isolate; /* Isola de interferências externas */
}

.profile-image {
  position: absolute; /* Posicionamento independente do fluxo */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantém proporção, corta excessos */
  object-position: center; /* Centraliza o recorte */
  display: block; /* Remove espaços extras inline */
  pointer-events: none; /* Permite clique passar através se necessário */
}
</style>
