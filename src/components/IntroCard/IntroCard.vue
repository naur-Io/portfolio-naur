<template>
  <div class="intro-content">
    <div class="intro-header">
      <span class="intro-label">{{ $t('intro.role') }}</span>
    </div>

    <h1 class="intro-title">{{ $t('intro.title') }}</h1>

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
      <span>Recife - Brasil</span>
    </div>

    <p class="intro-description">
      {{ $t('intro.description') }}
    </p>
  </div>
</template>

<style scoped>
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
  font-size: var(--font-size-body-micro);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
}

.intro-title {
  color: #fff;
  font-size: var(--font-size-title-lg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  padding: 12px 0;
}

@media (max-width: 768px) {
  .intro-title {
    font-size: var(--font-size-title-sm);
  }
}

.intro-location {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  color: #888;
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
}

.intro-location svg {
  color: #666;
}

.intro-description {
  color: #aaa;
  margin: 0;
  max-width: 100%;
  padding-bottom: 5px;
  flex: 1;
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}
</style>
