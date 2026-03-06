<script setup>
import { ref } from "vue";

import soundcloudimage from "../../assets/social-assets/social-soundcloud.png";
</script>

<template>
  <div class="card social-icons card-social">
    <div class="social-grid-inner">
      <!--Github-->
      <a href="https://github.com/naur-Io" target="_blank" class="social-item">
        <img
          class="soundclound-img"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
          alt=""
        />
      </a>

      <!--Behance-->
      <a
        href="https://www.behance.net/rickelmeramos"
        target="_blank"
        class="social-item"
      >
        <img
          class="soundclound-img"
          src="https://cdn-icons-png.flaticon.com/512/2168/2168249.png"
          alt=""
        />
      </a>

      <!--Soundcloud-->
      <a
        href="https://soundcloud.com/ruan-lucena-828574018"
        class="social-item"
        target="_blank"
      >
        <img class="soundclound-img" :src="soundcloudimage" alt="" />
      </a>

      <!--LinkedIn-->
      <a
        href="https://www.linkedin.com/in/ruan-rickelme-ramos-387623232/"
        target="_blank"
        class="social-item"
      >
        <img
          class="soundclound-img"
          src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
          alt="Linkedin-icon"
        />
      </a>

      <!--Youtube-->
      <a
        href="https://www.youtube.com/@bynaur"
        target="_blank"
        class="social-item"
      >
        <img
          class="soundclound-img"
          src="https://cdn-icons-png.flaticon.com/512/152/152810.png"
          alt=""
        />
      </a>

      <!--Mail-->
      <a
        href="https://www.worldpackers.com/users/5593360"
        target="_blank"
        class="social-item"
      >
        <img
          class="worldpackers-img"
          src="https://framerusercontent.com/images/h0dqZHVhCuoYtnshSHCCiUOTLs.png"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.soundclound-img {
  width: 50px;
  height: 50px;
  filter: invert(1);
}

.worldpackers-img{
   filter: invert(1);
}

.social-icons {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.youtube-img {
  width: 40px;
  height: 40px;
  filter: invert(1);
}

.social-grid-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  height: 100%;
  padding: 5px;
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
