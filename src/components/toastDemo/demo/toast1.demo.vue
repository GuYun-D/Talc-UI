<demo>
  基本用法
</demo>

<template>
  <div>
    <t-button @click="toggleToastTop">上部</t-button>
    <t-toast :visible="isShowToastTop">这是一个顶部的toast</t-toast>

    <t-button @click="toggleToastMiddle">中间</t-button>
    <t-toast :visible="isShowToastMiddle" position="middle"
      >这是一个中间的toast</t-toast
    >

    <t-button @click="toggleToastBottom">底部</t-button>
    <t-toast :visible="isShowToastBottom" position="bottom"
      >这是一个底部的toast</t-toast
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isShowToastTop = ref(false);
    const toggleToastTop = () => {
      isShowToastTop.value = !isShowToastTop.value;
    };

    const isShowToastMiddle = ref(false);
    const toggleToastMiddle = () => {
      isShowToastMiddle.value = !isShowToastMiddle.value;
    };

    const isShowToastBottom = ref(false);
    const toggleToastBottom = () => {
      isShowToastBottom.value = !isShowToastBottom.value;
    };
    return {
      isShowToastTop,
      toggleToastTop,
      isShowToastMiddle,
      toggleToastMiddle,
      isShowToastBottom,
      toggleToastBottom,
    };
  },
});
</script>

<style scoped>
.t-button{
  margin: 0 10px;
}
</style>