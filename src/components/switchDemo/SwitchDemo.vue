<template>
  <div>
    <t-switch
      :disabled="false"
      v-model="isSwitch"
      @switch-change="change"
      active-color="#f40"
      inactive-color="#409eff"
    ></t-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isSwitch = ref(false);
    const change = (value: boolean) => {
      console.log("发生改变: " + value);
    };
    return { isSwitch, change };
  },
});
</script>

<style scoped>
</style>