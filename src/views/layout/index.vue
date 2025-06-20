<template>
  <!-- 顶部广告 -->
  <Advertise></Advertise>
  <!-- 顶部导航条 -->
  <Topbar></Topbar>
  <!-- 头部内容 -->
  <Header></Header>
  <!-- banner内容 -->
  <Banner></Banner>
</template>

<script setup>
import Advertise from './components/Advertise.vue';
import Topbar from '@/views/layout/components/Topbar.vue'
import Header from '@/views/layout/components/Header.vue';
import Banner from './components/Banner.vue';
</script>

<style lang="scss" scoped></style>
