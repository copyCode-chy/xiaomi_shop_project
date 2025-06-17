<template>
  <div class="ad">
    <a href="#">
      <img :src="ad" alt="广告">
    </a>
  </div>
</template>

<script setup>
import ad from '@/assets/images/ad.jpg'
</script>

<style lang="scss" scoped>
.ad {
  width: 100%;
  height: 120px;
  position: relative;

  img {
    width: 1860px;
    height: 120px;
    // 图片居中
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
