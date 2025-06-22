<template>
  <div class="container box">
    <div class="top-title">
      <h2>
        <slot name="title">默认标题</slot>
      </h2>
      <div>
        <slot name="more">右侧选项</slot>
      </div>
    </div>
    <div class="img-list">
      <div class="img-left-content">
        <slot name="imgleft"></slot>
      </div>
      <div class="img-right-content">
        <div class="img-item" v-for="item in 8" :key="item">
          <a href="#">
            <slot name="imgright"></slot>
            <h3>
              <slot name="item-title">默认图片标题</slot>
            </h3>
            <p>
              <slot name="item-text">默认文本</slot>
            </p>
            <p>
              <slot name="item-price">默认价格</slot>
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({

});
</script>

<style lang="scss" scoped>
.box {
  margin-top: 20px;
  position: relative;

  .top-title {
    height: 58px;
    line-height: 58px;
    display: flex;
    justify-content: space-between;
  }

  .img-list {
    display: flex;

    .img-left-content {
      img {
        cursor: pointer;
      }
    }


    .img-right-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin-left: 15px;

      .img-item {
        width: 234px;
        height: 300px;
        padding: 20px 0;
        flex-wrap: wrap;
        background-color: white;
        text-align: center;

        a {
          img {
            width: 160px;
            height: 160px;
            margin-bottom: 18px;
          }

          h3 {
            margin-bottom: 2px;
          }

          p {
            margin-bottom: 10px;
            color: #b1b0b0;
          }

          & p:last-child {
            margin-bottom: 14px;
            color: rgb(255, 103, 0);
          }
        }
      }
    }
  }
}
</style>
