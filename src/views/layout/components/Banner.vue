<template>
  <div class="banner">
    <div class="container">
      <img class="banner-img" src="../../../assets/images/banner.webp" alt="">
      <div class="slide">
        <ul>
          <li v-for="item in sildeList">
            <a href="#">{{ item }}<i class="iconfont icon-youjiantou"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const sildeList = ['手机', '电视', '家电', '笔记本 平板 显示器', '出行 穿戴', '耳机 音箱', '健康 儿童', '生活 箱包', '智能 路由器', '电源 配件']
</script>

<style lang="scss" scoped>
.banner {
  background-color: white;

  .container {
    position: relative;

    .banner-img {
      cursor: pointer;
    }

    .slide {
      color: white;
      width: 234px;
      height: 460px;
      padding: 20px 0;
      background-color: rgba(105, 101, 101, 0.6);
      position: absolute;
      top: 0;
      left: 0;

      ul li {
        height: 42px;
        line-height: 42px;
        text-align: left;
        padding-left: 30px;

        &:hover {
          background-color: #ff6700;
        }

        a {
          display: flex;
          justify-content: space-between;

          i {
            padding-right: 20px;
          }
        }
      }
    }
  }
}
</style>
