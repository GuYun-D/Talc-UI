<demo>
辅助文字
</demo>

<template>
  <div>
    <em>默认</em>
    <t-switch v-model="switchDemo4"></t-switch>

    <em>自定义辅助文字</em>
    <t-switch
      v-model="switchDemo4"
      inactive-text="极差"
      active-text="优秀"
      active-text-color="pink"
    ></t-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const switchDemo4 = ref(false);
    return { switchDemo4 };
  },
});
</script>

<style scoped>
em {
  font-weight: bold;
}

.t-switch {
  margin: 10px 0;
}
</style>