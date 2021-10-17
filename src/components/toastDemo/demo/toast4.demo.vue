<demo>
  自定义关闭样式
</demo>

<template>
  <div>
    <t-button @click="toggleToast">打开</t-button>

    <t-toast :visible="isShowToast" :closeButton="closeButton" @update:visible="isShowToast = $event">
      自定义关闭样式
    </t-toast>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isShowToast = ref(false);
    const toggleToast = () => {
      isShowToast.value = !isShowToast.value;
    };
    const closeButton = {
      text: "知道了",
      callBack: () => {
        alert("执行了传入的callback")
      }
    };
    return { isShowToast, toggleToast, closeButton };
  },
});
</script>