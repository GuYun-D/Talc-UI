<template>
  <div>
    <Button>默认按钮</Button>
    <Button theme="button">就是按钮</Button>
    <Button theme="link">链接形式</Button>
    <Button theme="text">文本形式</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },

  setup() {
    const onClick = () => {
      console.log("执行了");
    };

    return {onClick}
  },
};
</script>

<style lang="scss" scoped>
</style>