<demo>
  loading状态
</demo>  

<template>
  <div>
    <Button loading>加载中</Button>
      <Button :loading="true">加载中</Button>
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