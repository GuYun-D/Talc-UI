<demo>
  支持size属性
</demo>  

<template>
  <div>
    <Button>normal</Button>
    <Button size="big">big</Button>
    <Button size="small">small</Button>
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