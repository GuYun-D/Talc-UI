<demo>
  基本用法
</demo>

<template>
  <div>
    <t-popover>
      <template #content> 卧槽 </template>
      <t-button>上面</t-button>
    </t-popover>
    <t-popover position="bottom">
      <template #content> 卧槽 </template>
      <t-button>下面</t-button>
    </t-popover>
    <t-popover position="left">
      <template #content> 卧槽 </template>
      <t-button>左边</t-button>
    </t-popover>
    <t-popover position="right">
      <template #content> 卧槽 </template>
      <t-button>右边</t-button>
    </t-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>