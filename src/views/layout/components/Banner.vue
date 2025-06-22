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

      <!-- banner区域的广告 -->
      <div class="ad">
        <!-- 左侧font图标 -->
        <div class="ad-aside">
          <ul>
            <li v-for="item in 6" :key="item">
              <a href="#">
                <i class="iconfont icon-wuyefei" style="font-size: 24px;"></i>
                <p>话费充值</p>
              </a>
            </li>
          </ul>

        </div>
        <!-- 右侧图片 -->
        <div class="ad-img item-hover" v-for="item in adImgurl" :key="item">
          <a href="#">
            <img :src="item" alt="广告">
          </a>
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
import bannerAd1 from '@/assets/images/banner-ad1.png'
import bannerAd2 from '@/assets/images/banner-ad2.png'
import bannerAd3 from '@/assets/images/banner-ad3.png'
const currentIndex = ref(0)
const sildeList = ['手机', '电视', '家电', '笔记本 平板 显示器', '出行 穿戴', '耳机 音箱', '健康 儿童', '生活 箱包', '智能 路由器', '电源 配件']
const number = [7, 11, 20, 14, 9, 8, 16, 19, 6, 22]
const imgUrl = [banner1, banner2, banner3]
const adImgurl = [bannerAd1, bannerAd2, bannerAd3]
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

    .ad {
      display: flex;
      margin-top: 15px;
      justify-content: space-between;

      .ad-aside {
        width: 234px;
        height: 170px;
        padding: 3px;
        background-color: rgb(95, 87, 80, 0.9);
        color: #fff;
        margin-bottom: 28px;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 76px;
            height: 82px;
            padding: 3px;
            opacity: 0.7;

            &:hover {
              opacity: 1;
            }

            a {
              padding-top: 18px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              p {
                font-size: 12px;
              }
            }
          }
        }
      }

      .ad-img {
        width: 316px;
        height: 170px;

        img {
          width: 100%;
          height: 100%;
        }

      }
    }
  }
}

.item-hover {
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
}

// 修改轮播图指示器样式
::v-deep(.el-carousel__arrow--left) {
  left: 234px !important; // 默认是 0，向右偏移一点
}

::v-deep(.el-carousel__arrow--right) {
  right: 0px;
}

::v-deep(.el-carousel__arrow) {
  width: 41px;
  height: 69px;
  border-radius: 0;
  font-size: 36px;
}

::v-deep(.el-carousel__arrow):hover {
  background-color: rgb(127, 127, 127, 0.5)
}
</style>
