<script setup>
import { ref } from "vue";

import ytgif from "../../assets/social-assets/yt.gif";
import gitgif from "../../assets/social-assets/github.gif";
import soundcloudimage from "../../assets/social-assets/social-soundcloud.png";
import behancegif from "../../assets/social-assets/be.gif";
import soundcloudgif from "../../assets/social-assets/sound.gif";
import linkedingif from "../../assets/social-assets/linkedin.gif";
import vsco from "../../assets/social-assets/vsco.png";
</script>

<template>
  <div class="card social-icons card-social">
    <div class="social-grid-inner">
      <!--Youtube-->
      <a
        href="https://www.youtube.com/@por_naur"
        target="_blank"
        class="social-item"
      >
        <img class="youtube-img" :src="ytgif" alt="" />
      </a>
      <!--Github-->
      <a href="https://github.com/naur-Io" target="_blank" class="social-item">
        <img class="github-img" :src="gitgif" alt="" />
      </a>
      <!--Behance-->
      <a
        href="https://www.behance.net/rickelmeramos"
        target="_blank"
        class="social-item"
      >
        <img class="behance-img" :src="behancegif" alt="Behance-icon" />
      </a>

      <!--LinkedIn-->
      <a
        href="https://www.linkedin.com/in/ruan-rickelme-ramos-387623232/"
        target="_blank"
        class="social-item"
      >
        <img class="linkedin-img" :src="linkedingif" alt="Linkedin-icon" />
      </a>

      <!--Soundcloud-->
      <a
        href="https://soundcloud.com/ruan-lucena-828574018"
        class="social-item"
        target="_blank"
      >
        <img
          class="soundcloud-img"
          :src="soundcloudgif"
          alt="Soundcloud-icon"
        />
      </a>

      <!--Mail-->
      <a
        href="https://vsco.co/bynaur/gallery"
        target="_blank"
        class="social-item"
      >
        <img
          class="worldpackers-img"
          :src="vsco"
          alt="vsco-icon"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.soundcloud-img {
  width: 75px;
  height: 75px;
}

.behance-img {
  width: 75px;
  height: 75px;
}

.linkedin-img {
  width: 75px;
  height: 75px;
}

.soundclound-img {
  width: 50px;
  height: 50px;
  filter: invert(1);
}

.github-img {
  width: 75px;
  height: 75px;
}

.youtube-img {
  width: 75px;
  height: 75px;
}

.worldpackers-img {
  filter: invert(1);
}

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
