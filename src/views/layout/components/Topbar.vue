<!-- 顶部导航条组件 -->
<template>
  <div class="banner">
    <div class="head-nav container">
      <div class="head-left">
        <template v-for="(item, index) in arrLeft" :key="item">
          <div class="item-container" @mouseenter="hoverItem = item" @mouseleave="hoverItem = ''">
            <div class="item-left">
              <a href="#">{{ item }}</a>
            </div>

            <div v-if="item === '下载app' && hoverItem === '下载app'">
              <div class="download">
                <img src="../../../assets/images/download.png" alt="小米商城APP">
                <p>小米商城APP</p>
              </div>
              <div class="stri"></div>
            </div>

            <!-- 非最后一项才显示 | -->
            <span v-if="index !== arrLeft.length - 1">|</span>
          </div>
        </template>
      </div>
      <div class="head-right">
        <template v-for="item in arrRight" :key="item">
          <div class="item-right">
            <a href="#">{{ item }}</a>
          </div>
          <span>|</span>
        </template>

        <div class="cart">
          <!-- trigger="hover"触发方式hover :show-arrow="false"是否显示 Tooltip 箭头 :offset="0"offset 控制 reference 和 popper 之间的距离，默认是 12 像素。设置为 0 就是“紧贴”。-->
          <el-popover title="购物车" placement="bottom-end" trigger="hover" :width="200" content="xxxx" :show-arrow="false"
            :offset="0">
            <!-- #reference插槽表示触发 Popover 显示的 HTML 元素 -->
            <template #reference>
              <a href="#">
                <em class="iconfont icon-xiazai1"></em>
                购物车(2)
              </a>
            </template>
          </el-popover>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const arrLeft = ['小米官网', '小米商城', '小米澎湃OS', '小米汽车', '云服务', 'ioT', '有品', '小爱开放平台', '资质证照', '协议规则', '下载app', 'Select Location']
const arrRight = ['登录', '注册', '消息通知']
const hoverItem = ref('');
</script>

<style lang="scss" scoped>
.banner {
  background-color: #333;
  text-align: center;

  .head-nav {
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;

    .head-left {
      display: flex;

      .item-container {
        display: flex;
        align-items: center;
        position: relative;

        .download {
          width: 124px;
          height: 144px;
          background-color: #fff;
          box-shadow: 0 1px 5px #aaa;
          position: absolute;
          top: 40px;
          left: 50%;
          margin-left: -62px;
          overflow: hidden;
          z-index: 1;

          img {
            width: 90px;
            margin: 18px auto 0;
          }

          p {
            color: #333;
            font-size: 12px;
            line-height: 12px;
          }
        }

        .stri {
          width: 0;
          height: 0;
          border-bottom: 8px solid white;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          // margin-left: -8px;
        }
      }
    }

    .head-right {
      display: flex;

      .cart {
        background-color: rgb(255, 103, 0);
        margin-left: 15px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          color: white;

          &:hover {
            color: rgb(255, 103, 0);
            background-color: white;
          }

          em {
            margin-right: 5px;
            font-size: 20px;
            vertical-align: bottom;
          }
        }
      }

      & span:last-of-type {
        display: none;
      }
    }

    span {
      margin: 0 0.3em;
      color: #888;
      font-size: 12px;
    }

    a {
      text-decoration: none;
      color: #b0b0b0;
      font-size: 12px;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
