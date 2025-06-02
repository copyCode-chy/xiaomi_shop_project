<template>
  <div class="banner">
    <div class="head-nav container">
      <div class="head-left">
        <div class="item-left" v-for="item in arrLeft"><a href="#">{{ item }}</a><span>|</span></div>
      </div>
      <div class="head-right">
        <div class="item-right" v-for="item in arrRight"><a href="#">{{ item }}</a><span>|</span></div>
        <div class="cart"><a href="#">购物车</a></div>
      </div>
    </div>
  </div>

</template>

<script setup>
const arrLeft = ['小米官网', '小米商城', '小米澎湃OS', '小米汽车', '云服务', 'ioT', '有品', '小爱开放平台', '资质证照', '协议规则', '下载app', 'Select Location']
const arrRight = ['登录', '注册', '消息通知']
</script>

<style lang="scss" scoped>
.banner {
  background-color: #333;

  .head-nav {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .head-left {
      display: flex;

      .item-left:last-child span {
        opacity: 0;
      }
    }

    .head-right {
      display: flex;
    }

    a {
      text-decoration: none;
      color: #b0b0b0;
      font-size: 12px;

      &:hover {
        color: white;
      }
    }

    span {
      margin: 0 0.3em;
      color: #424242;
    }
  }
}
</style>
