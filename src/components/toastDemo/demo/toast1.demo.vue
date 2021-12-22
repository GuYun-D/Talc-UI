<demo>
  基本用法
</demo>

<template>
  <div>
    <t-button @click="toggleToastTop">上部</t-button>

    <t-button @click="toggleToastMiddle">中间</t-button>

    <t-button @click="toggleToastBottom">底部</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { openToast } from "../../../lib/toast";

export default defineComponent({
  setup() {
    const toggleToastTop = () => {
      openToast({
        defaultText: "我是一个顶部的toast",
        props: {
          autoClose: false,
        },
      });
    };

    const toggleToastMiddle = () => {
      openToast({
        defaultText: "我是一个中间的toast",
        props: {
          position: "middle",
          autoClose: false,
        },
      });
    };

    const toggleToastBottom = () => {
      openToast({
        defaultText: "我是一个顶部的toast",
        props: {
          position: "bottom",
          autoClose: false,
        },
      });
    };
    return {
      toggleToastTop,
      toggleToastMiddle,
      toggleToastBottom,
    };
  },
});
</script>

<style scoped>
.t-button {
  margin: 0 10px;
}
</style>