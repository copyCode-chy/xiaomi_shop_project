<template>
  <div class="banner">
    <div class="container">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in imgUrl" :key="item">
          <img class="banner-img" :src="item" alt="轮播图">
        </el-carousel-item>
      </el-carousel>
      <!-- 左侧边栏和弹层 -->
      <div class="cover">
        <!-- 侧边栏 -->
        <div class="slide">
          <ul>
            <li v-for="(item, index) in sildeList" @mouseenter="currentIndex = index">
              <a href="#">{{ item }}<i class="iconfont icon-youjiantou"></i></a>
            </li>
          </ul>
        </div>
        <!-- 弹层 -->
        <div class="layer">
          <ul>
            <li v-for="item in number[currentIndex]">
              <a href="#">
                <img src="../../../assets/images/layer.webp" alt="">
                <p>手机</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import banner1 from '@/assets/images/banner1.webp'
import banner2 from '@/assets/images/banner2.webp'
import banner3 from '@/assets/images/banner4.webp'
const showLayer = ref(false)
const currentIndex = ref(0)
const sildeList = ['手机', '电视', '家电', '笔记本 平板 显示器', '出行 穿戴', '耳机 音箱', '健康 儿童', '生活 箱包', '智能 路由器', '电源 配件']
const number = [7, 11, 20, 14, 9, 8, 16, 19, 6, 22]
const imgUrl = [banner1, banner2, banner3]
</script>

<style lang="scss" scoped>
.banner {
  background-color: white;

  .container {
    position: relative;

    .banner-img {
      cursor: pointer;
    }

    .cover {
      .layer {
        width: max-content;
        height: 460px;
        background-color: white;
        border: 1px solid #e0e0e0;
        position: absolute;
        top: 0;
        left: 234px;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
        display: none;

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: wrap;
          height: 100%;

          li {
            width: 265px;
            height: 76px;

            a {
              padding: 18px 20px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
            }
          }
        }
      }

      &:hover .layer {
        display: block;
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
}

// 修改轮播图指示器样式
::v-deep(.el-carousel__arrow--left) {
  left: 234px !important; // 默认是 0，向右偏移一点
}
::v-deep(.el-carousel__arrow--right) {
  right:0px;
}
::v-deep(.el-carousel__arrow) {
  width: 41px;
  height: 69px;
  border-radius:0;
  font-size: 36px;
}

::v-deep(.el-carousel__arrow):hover {
  background-color:rgb(127,127,127,0.5)
}
</style>
