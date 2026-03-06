<template>
  <div
    class="card resources interactive-card card-resources"
    @click="$emit('click')"
  >
    <div class="resources-content">
      <h1>Projetos Recentes</h1>
      <p>Veja alguns dos meus trabalhos mais recentes.</p>
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
</template>

<style scoped>
.resources-content {
  padding: 12px 16px;
  position: relative;
  z-index: 2;
}

.resources-content > h1 {
  color: #333;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: var(--font-weight-medium);
}

.resources-content > p {
  line-height: 1;
  color: #aaa;
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-medium);
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
  z-index: 2;
}

.card:hover .resources-arrow-circle {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}
</style>
