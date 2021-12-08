<demo>
  区间范围控制
</demo>

<template>
  <div>
    <t-input-number
      v-model="mySelect3"
      :step="3"
      :step-strictly="true"
      :max="33"
      :min="3"
    ></t-input-number>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelect3 = ref(0);
    return { mySelect3 };
  },
});
</script>
