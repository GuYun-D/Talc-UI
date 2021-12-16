<demo>
默认选中几颗星
</demo>

<template>
  <div>
    <t-rate v-model="num"></t-rate>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const num = ref(4);
    return { num };
  },
});
</script>

<style scoped>
.t-rate {
  margin: 20px;
}
</style>