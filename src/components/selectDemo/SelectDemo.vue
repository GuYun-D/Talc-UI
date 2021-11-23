<template>
  <div>
    <h1>select 选择器</h1>
    <t-select
      placeHolder="请选择框架"
      :clearable="true"
      :data="data"
      :width="400"
      :searchData="true"
      :disabled="false"
      v-model="mySelecct"
    ></t-select>

    {{ mySelecct }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import data from "./data";

export default defineComponent({
  setup() {
    const mySelecct = ref("");
    return { data, mySelecct };
  },
});
</script>

<style scoped>
</style>