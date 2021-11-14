<template>
  <div>
    <h1>Rate 评分</h1>
    <t-rate
      :num="3"
      :size="30"
      @getStarNum="getStarNum"
      starColr="#f40"
      readonyRate="3.1"
    ></t-rate>
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