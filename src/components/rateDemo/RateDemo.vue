<template>
  <div>
    <h1>Rate 评分</h1>
    <t-rate :num="3" :size="30" @getStarNum="getStarNum"></t-rate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const getStarNum = (number: number) => {
      console.log(number);
    };
    return { getStarNum };
  },
});
</script>

<style scoped>
</style>