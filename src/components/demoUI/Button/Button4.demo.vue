<demo>
  基本用法
</demo>  

<template>
  <div>
    <Button disabled>禁用的按钮</Button>
    <Button :disabled="true">禁用的按钮</Button>
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