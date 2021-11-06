<template>
  <div>
    <h1>carousel 轮播组件</h1>
    <t-carousel>
      <t-carousel-item class="box">1</t-carousel-item>
      <t-carousel-item class="box">2</t-carousel-item>
      <t-carousel-item class="box">3</t-carousel-item>
    </t-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.box {
  width: 200px;
  height: 150px;
  box-sizing: border-box;
  background-color: #ccc;
  border: 1px solid red;
}
</style>