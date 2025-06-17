<template>
  <div class="container header">
    <a href="https://www.mi.com/" class="iconfont icon-icon-xiaomiguishu logo"></a>
    <div class="list">
      <div v-for="item in list" :key="item"><a href="#">{{ item }}</a></div>
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
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
const list = ['Xiaomi手机', 'REDMI手机', '电视', '笔记本', '平板', '家电', '路由器', '服务中心', '社区']
const searchList = ["手机换新", "空调", "Redmi K80", "电视", "风扇", "吸顶灯", "扫地机器人", "小米手环9 Pro"]
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 56px;
    color: rgb(255, 106, 0);
  }

  .list {
    display: flex;

    a {
      padding: 0 10px;
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
