<template>
  <div>
    <h1>select 选择器</h1>
    <t-select
      placeHolder="请选择框架"
      :clearable="true"
      :data="data"
      :width="400"
    ></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import data from "./data";

export default defineComponent({
  setup() {
    return { data };
  },
});
</script>

<style scoped>
</style>