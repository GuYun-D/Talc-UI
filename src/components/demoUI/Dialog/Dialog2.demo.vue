<demo>
函数调用
</demo>

<template>
  <Button @click="showDialog">点击打开</Button>
</template>

<script lang="ts">
import { openDialog } from "../../../lib/openDialog";
import Button from "../../../lib/button/src/Button.vue";

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        confirm() {},
        cancel() {},
      });
    };

    return { showDialog };
  },
};
</script>
