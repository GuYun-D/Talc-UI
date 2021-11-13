<demo>
  放大镜的形状
</demo>

<template>
  <div>
    <t-magnifier
      :img-url="'/magnifier/universe.jpg'"
      :radius="true"
    ></t-magnifier>

  </div>
</template>

<script lang="ts">
import { defineComponent, } from "vue";

export default defineComponent({
  setup() {

    return {
    };
  },
});
</script>

<style scoped>
</style>