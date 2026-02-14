<script setup>
defineProps({
  project: Object,
});
</script>

<template>
  <div class="project-detail-layout">
    <div class="modal-body-grid">
      <!-- Left Column: Meta -->
      <div class="modal-col-left">
        <div class="meta-item">
          <label>COMPANY</label>
          <p>{{ project.company }}</p>
        </div>
        <div class="meta-item">
          <label>MY ROLE</label>
          <p>{{ project.role }}</p>
        </div>
        <div class="meta-item">
          <label>TOOLS</label>
          <ul class="tools-list">
            <li v-for="tool in project.tools" :key="tool">
              {{ tool }}
            </li>
          </ul>
        </div>
        <div class="meta-item">
          <label>TIMELINE</label>
          <p>{{ project.timeline }}</p>
        </div>
      </div>

      <!-- Right Column: Content -->
      <div class="modal-col-right">
        <div class="content-block">
          <label>DESCRIPTION</label>
          <p>{{ project.description }}</p>
        </div>
        <div class="content-block">
          <label>CONTEXT</label>
          <p>{{ project.context }}</p>
        </div>

        <div class="modal-actions">
          <a href="#" class="check-app-btn"> Check the app <span>↗</span> </a>

          <a href="#" class="github-btn">
            View on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="modal-image-footer">
      <img :src="project.image" alt="Project Preview" />
    </div>
  </div>
</template>

<style scoped>
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

.meta-item label,
.content-block label {
  letter-spacing: 1.2px;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
  font-size: var(--font-size-body-micro);
  font-weight: var(--font-weight-bold);
}

.meta-item p,
.tools-list li {
  color: #ddd;
  margin: 0;
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
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
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-regular);
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
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
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
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-semibold);
}
.github-btn:hover {
  background: #333;
  border-color: #555;
}

@media (max-width: 900px) {
  .modal-body-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
