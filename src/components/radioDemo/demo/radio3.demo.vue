<demo>
禁用
</demo>

<template>
  <div>
    <t-radio :option="option1" size="big" :disabled="true"></t-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const option1 = {
      label: "禁用的",
      value: "disabled",
    };
    return { option1 };
  },
});
</script>

<style scoped>
.t-radio {
  margin: 0 15px;
}
</style>