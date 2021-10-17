<demo>
  自动关闭
</demo>

<template>
  <div>
    <t-button @click="toggleToast">自动关闭</t-button>
    <t-toast
      :visible="isShowToast"
      :autoClose="true"
      @update:visible="isShowToast = $event"
      >这是一个顶部的toast</t-toast
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
    return { isShowToast, toggleToast };
  },
});
</script>