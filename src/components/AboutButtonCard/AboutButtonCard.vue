<template>
  <div class="card about interactive-card card-about" @click="$emit('click')">
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
</template>

<style scoped>
.about-content {
  padding: 12px 16px;
  position: relative;
  z-index: 2;
}

.about-title {
  color: #333;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: var(--font-weight-medium);
}

.about-description {
  line-height: 1;
  color: #aaa;
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-regular);
}

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
  z-index: 2;
}

.card:hover .about-arrow-circle {
  background: #ffffff00;
  color: #ffffff;
  border-color: #fff;
  transform: scale(1.1);
}

/* Include card base styles or rely on parent? 
   Component is wrapping everything in .card, so styles apply if parent applies them globally. 
   Otherwise need duplicate.
   Original file has global styles for .card. I assume they are kept. */
</style>
