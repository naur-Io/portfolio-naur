<script setup>
defineProps({
  posts: Array,
});
</script>

<template>
  <div class="blog-grid-container">
    <div class="blog-card" v-for="post in posts" :key="post.id">
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
</template>

<style scoped>
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
}

.read-more:hover {
  gap: 10px;
  color: #ccc;
}

@media (max-width: 900px) {
  .blog-grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
