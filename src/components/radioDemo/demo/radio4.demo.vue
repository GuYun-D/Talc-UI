<demo>
带边框
</demo>

<template>
  <div>
    <t-radio :option="option1" size="big" :border="true"></t-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const option1 = {
      label: "带边框",
      value: "border",
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