<script setup>
import { bentoStackTech } from "../../utils/bentoStackData";

// Duplicamos para efeito de loop infinito
const bentoInfiniteTech = [...bentoStackTech, ...bentoStackTech];
</script>

<template>
  <div class="stack-content">
    <div class="stack-header">
      <h3 class="stack-title">Work Stack</h3>
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
    </div>
  </div>
</template>

<style scoped>
.stack-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding: 12px;
  justify-content: center;
}

.stack-header {
  margin-bottom: 20px;
}

.stack-title {
  color: #fff;
  margin: 0 0 6px 0;
  line-height: 1.3;
  font-size: 24px;
  font-weight: var(--font-weight-medium);
}

/* Container do Carrossel */
.stack-carousel-container {
  width: 100%;
  height: 125px;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

/* Track do Carrossel (animação) */
.stack-carousel-track {
  display: flex;
  position: absolute;
  top: 12px;
  left: 0;
  gap: 20px;
  animation: scrollTechHorizontal 20s linear infinite;
  animation-play-state: running;
  flex-direction: row;
  width: max-content;
  will-change: transform;
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

/* Itens de Tecnologia */
.tech-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 12px;
  min-width: 100px;
  min-height: 100px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #444;
  transform: translateX(4px);
}

.tech-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
}

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

  .stack-carousel-track {
    animation-duration: 15s;
  }
}

@media (max-width: 768px) {

  .stack-title{
    text-align: center;
  }

  .stack-content {
    gap: 1px;
    padding: 0px;
  }
  .stack-carousel-container {
    height: 100px;
  }
  .tech-item {
    padding: 0;
    min-width: 80px;
    min-height: 80px;
  }
  .stack-title {
    font-size: var(--font-size-title-xs);
  }

  .stack-carousel-track {
    animation-duration: 12s; /* Mais rápido no mobile */
  }
}
</style>
