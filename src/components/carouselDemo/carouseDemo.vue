<template>
  <div>
    <h1>carousel 轮播组件</h1>
    <t-carousel
      :autoplay="true"
      :duration="3000"
      :initial="1"
      :dot="true"
      :director="true"
      direction="next"
      dotType="rectangle"
      trigger="hover"
    >
      <t-carousel-item
        v-for="(item, index) in carouselData"
        :imgUrl="item.img_url"
        :key="index"
      >
      </t-carousel-item>
    </t-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import carouselData from "./data/carousel";

export default defineComponent({
  setup() {
    return { carouselData };
  },
});
</script>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 150px;
  box-sizing: border-box;
  background-color: #ccc;
  border: 1px solid red;
}
</style>