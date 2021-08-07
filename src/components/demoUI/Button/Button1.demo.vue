<demo>
  基本用法
</demo>  

<template>
  <div>
    <Button>默认按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接形式</Button>
    <Button theme="text">文本形式</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>