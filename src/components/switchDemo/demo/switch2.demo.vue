<demo>
自定义按钮背景
</demo>

<template>
  <div>
    <t-switch
      v-model="switchDemo2"
      inactive-color="#f40"
      active-color="green"
    ></t-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const switchDemo2 = ref(false);
    return { switchDemo2 };
  },
});
</script>

<style scoped>
</style>