<template>
  <div class="white-nav">
    <div class="container header">
      <a href="https://www.mi.com/" class="iconfont icon-icon-xiaomiguishu logo"></a>
      <div class="list" @mouseenter="isShow = true" @mouseleave="isShow = false">
        <div v-for="item in list" :key="item">
          <a href="#">
            {{ item }}
          </a>
        </div>
        <div class="nav-bar-list" v-if="isShow">
          <a href="#" v-for="item in 6">
            <div class="img-box">
              <img src="../../../assets/images/white-nav-list.webp" alt="">
            </div>
            <p class="name">Xiaomi 15 Ultrl</p>
            <p class="price">6499元起</p>
          </a>
        </div>
      </div>
      <div class="search">
        <el-popover trigger="click" :width="244" :show-arrow="false" :offset="0" placement="bottom-start"
          popper-class="custom-search-popover">
          <template #reference>
            <el-input type="text" placeholder="小米6 Pro" class="search-input" style="width: 300px;height: 50px;">
              <template #suffix>
                <Search style="width: 24px; height: 24px;" />
              </template>
            </el-input>
          </template>
          <ul class="searchList">
            <li v-for="item in searchList" :key="item">{{ item }}</li>
          </ul>
        </el-popover>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const list = ['Xiaomi手机', 'REDMI手机', '电视', '笔记本', '平板', '家电', '路由器', '服务中心', '社区']
const searchList = ["手机换新", "空调", "Redmi K80", "电视", "风扇", "吸顶灯", "扫地机器人", "小米手环9 Pro"]
const isShow = ref(false)
</script>

<style lang="scss" scoped>
.white-nav {
  background-color: white;
  position: relative;

  .header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .logo {
      font-size: 56px;
      color: rgb(255, 106, 0);
    }

    .list {
      display: flex;

      a {
        padding: 26px 10px 38px 10px;

        &:hover {
          color: rgb(255, 106, 0);
        }
      }

      .nav-bar-list {
        width: 100%;
        height: 229px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-top: 1px solid #eee;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 100px;
        left: 0;
        z-index: 1;

        a {
          width: 160px;

          &:last-child .img-box img {
            border-right: none;
          }

          .img-box {
            img {
              width: 160px;
              border-right: 1px solid #eee;
            }
          }

          .name {
            padding: 10px 0;
          }

        }
      }
    }

    .search {

      // 修改输入框默认样式
      :deep(.el-input__wrapper) {
        height: 48px;
        border: 1px solid rgb(224, 224, 224);
        box-shadow: none;

        &:hover {
          border-color: #ccc;
        }
      }

      // 修改输入框聚焦样式
      :deep(.el-input__wrapper.is-focus) {
        border-color: orange;
        box-shadow: 0 0 3px orange;
      }

      // 修改内部输入框的样式
      :deep(.el-input__inner) {
        height: 100%;
        padding: 0 10px;
      }

      // 修改后缀图标样式
      :deep(.el-input__suffix) {
        display: flex;
        align-items: center;
        padding-right: 10px;
        cursor: pointer;
      }

    }
  }
}
</style>
<style>
/* 这里写 .custom-search-popover 下的样式 */
.custom-search-popover ul.searchList {
  padding: 0;
  margin: 0;
  list-style: none;
}

.custom-search-popover ul.searchList li {
  padding: 8px 12px;
  cursor: pointer;
}

.custom-search-popover ul.searchList li:hover {
  background-color: #f5f5f5;
}
</style>
