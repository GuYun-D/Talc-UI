<demo>
开关尺寸大小
</demo>

<template>
  <div>
    <em>size属性</em>

    <t-switch v-model="switchDemo4" :text-visible="true" size="small"></t-switch>
    <t-switch v-model="switchDemo4" :text-visible="true" size="normal"></t-switch>
    <t-switch v-model="switchDemo4" :text-visible="true" size="big"></t-switch>

    <em>width属性</em>
    <t-switch v-model="switchDemo4" :text-visible="true" :height="20"></t-switch>
    <t-switch v-model="switchDemo4" :text-visible="true" :height="30"></t-switch>
    <t-switch v-model="switchDemo4" :text-visible="true" :height="40"></t-switch>
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
  margin: 20px 0;
}
</style>
