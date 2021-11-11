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
    >
      <t-carousel-item v-for="(item, index) in carouselData" :key="index">
        <img :src="item.img_url" />
      </t-carousel-item>
    </t-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import carouselData from "./data/carousel";

export default defineComponent({
  setup() {
    console.log(carouselData);
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

img {
  width: 400px;
  height: 200px;
}
</style>