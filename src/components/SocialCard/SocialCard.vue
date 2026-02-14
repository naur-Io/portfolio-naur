<template>
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
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
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
          <path d="M8 20h4a3 3 0 0 0 0-6H8zm0-6h3a3 3 0 0 0 0-6H8z"></path>
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
</template>

<style scoped>
.social-icons {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.social-grid-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
  padding:5px
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
</style>
