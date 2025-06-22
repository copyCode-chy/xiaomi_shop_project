<template>
  <div class="top-img container">
    <a href="#">
      <img :src="imgList[5]" />
    </a>
  </div>
  <ContainerItem>
    <template #title>手机</template>
    <template #more>更多</template>
    <template #imgleft>
      <img :src="imgList[0]" alt="Container Image Left" />
    </template>
    <template #imgright>
      <img :src="imgList[3]" alt="Container Image Right" />
    </template>
    <template #item-title>K80 Pro</template>
    <template #item-text>晓龙gen3处理器</template>
    <template #item-price>￥99.00</template>
  </ContainerItem>
  <ContainerItem>
    <template #title>智能穿戴</template>
    <template #more>更多</template>
    <template #imgleft>
      <img :src="imgList[1]" alt="Container Image Left" />
    </template>
    <template #imgright>
      <img :src="imgList[3]" alt="Container Image Right" />
    </template>
    <template #item-title>K80 Pro</template>
    <template #item-text>晓龙gen3处理器</template>
    <template #item-price>￥99.00</template>
  </ContainerItem>
  <ContainerItem>
    <template #title>笔记本 | 平板</template>
    <template #more>更多</template>
    <template #imgleft>
      <img :src="imgList[2]" alt="Container Image Left" />
    </template>
    <template #imgright>
      <img :src="imgList[3]" alt="Container Image Right" />
    </template>
    <template #item-title>K80 Pro</template>
    <template #item-text>晓龙gen3处理器</template>
    <template #item-price>￥99.00</template>
  </ContainerItem>
  <div class="button-img">
    <a href="#">
      <img :src="imgList[4]" />
    </a>
  </div>
</template>

<script setup>
import ContainerItem from '@/components/ContainerItem.vue';
import containerList1 from '@/assets/images/container-list1.webp';
import containerList2 from '@/assets/images/container-list2.webp';
import containerList3 from '@/assets/images/container-list3.webp';
import containerListItem from '@/assets/images/container-list-item.webp';
import containerButton from '@/assets/images/container-button-img.webp';
import containerTop from '@/assets/images/container-top-img.webp';

const imgList = [containerList1, containerList2, containerList3, containerListItem, containerButton, containerTop];
</script>

<style lang="scss" scoped>
.img-right-content {
  img {
    width: 160px;
    height: 160px;
  }
}

.top-img {
  margin-top: 28px;
}

.button-img {
  width: 1226px;
  max-width: 100%;
  margin: 30px auto;
}
</style>
