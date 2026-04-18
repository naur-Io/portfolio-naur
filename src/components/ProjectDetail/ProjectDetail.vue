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
          <a href="https://drive.google.com/drive/folders/1MHW7ZQP6iYoPCAlHS1IITBKaHJRq7mKh?usp=sharing" target="_blank" class="check-app-btn">Thumbnail Portfolio  <span>↗</span> </a>

          <a href="https://www.behance.net/rickelmeramos" class="check-app-btn"> 
            Behance
            <span>↗</span>
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
