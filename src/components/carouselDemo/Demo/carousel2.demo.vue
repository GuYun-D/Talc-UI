<demo>
  默认展示
</demo>

<template>
  <div class="carousel-demo">
    <t-carousel :initial="2">
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

export default defineComponent({
  setup() {
    const carouselData = [
      {
        id: 647384,
        image_name: "宇智波",
        img_url: "carousel/1.jpg",
      },
      {
        id: 64e3484,
        image_name: "鼬",
        img_url: "carousel/2.jpg",
      },
      {
        id: 6473647344,
        image_name: "佐助",
        img_url: "carousel/3.jpg",
      },
      {
        id: 6473782184,
        image_name: "晓",
        img_url: "carousel/4.jpg",
      },
    ];
    return { carouselData };
  },
});
</script>

<style scoped>
.carousel-demo {
  width: 600px;
  height: 300px;
}
</style>