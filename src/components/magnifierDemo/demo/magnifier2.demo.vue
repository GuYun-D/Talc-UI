<demo>
  支持点击图片跳转
</demo>

<template>
  <div>
    <t-magnifier
      :img-url="'/magnifier/universe.jpg'"
      link="https://github.com/GuYun-D/Talc-UI"
      :blank="true"
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