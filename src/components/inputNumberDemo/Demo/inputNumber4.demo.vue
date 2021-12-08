<demo>
  严格步长
</demo>

<template>
  <div>
    <t-input-number
      v-model="mySelect4"
      :step="3"
      :step-strictly="true"

    ></t-input-number>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelect4 = ref(0);
    return { mySelect4 };
  },
});
</script>