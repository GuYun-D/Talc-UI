<template>
  <div>
    <h1>Rate 评分</h1>
    <t-rate
      :size="30"
      @getStarNum="getStarNum"
      starColr="#f40"
      :num="4"
    ></t-rate>

    <t-rate
      :size="30"
      @getStarNum="getStarNum"
      starColr="#f40"
      :readonyRate="4"
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