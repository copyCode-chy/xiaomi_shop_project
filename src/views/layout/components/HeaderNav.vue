<template>
  <div class="banner">
    <div class="head-nav container">
      <div class="head-left">
        <template v-for="item in arrLeft">
          <div class="item-left"><a href="#">{{ item }}</a></div>
          <span>|</span>
        </template>
      </div>
      <div class="head-right">
        <template v-for="item in arrRight">
          <div class="item-right">
            <a href="#">{{ item }}</a>
          </div>
          <span>|</span>
        </template>

        <div class="cart">
          <el-popover title="购物车" placement="bottom-end" trigger="hover" :width="200" content="xxxx" :show-arrow="false"
            :offset="0">
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
    line-height: 40px;

    .head-left {
      display: flex;

      & span:last-of-type {
        display: none;
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
      font-size: 12px;
    }
  }
}
</style>
