<script setup>
const profileImage = new URL("../../assets/yo.jpeg", import.meta.url).href;
</script>

<template>
  <img :src="profileImage" alt="Profile photo" class="profile-image" />
</template>

<style scoped>
.profile-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
}
</style>
