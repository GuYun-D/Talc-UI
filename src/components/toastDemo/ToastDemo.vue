<template>
  <div>
    <t-button @click="toggleToast">toast</t-button>
    <t-toast
      :visible="isShowToast"
      :closeButton="closeButtonObj"
      :autoClose="true"
      @update:visible="isShowToast = $event"
      >我是以一个totals</t-toast
    >
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
    const closeButtonObj = {
      text: "关闭",
      callBack: function () {
        console.log("老子知道了");
      },
    };
    return { isShowToast, toggleToast, closeButtonObj };
  },
});
</script>

<style scoped>
</style>