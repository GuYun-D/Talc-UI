<demo>
  触发方式
</demo>

<template>
  <div>
    <t-popover trigger="hover">
      <template #content> 哈哈 </template>
      <t-button>上面</t-button>
    </t-popover>
    <t-popover position="bottom" trigger="hover">
      <template #content> 哈哈 </template>
      <t-button>下面</t-button>
    </t-popover>
    <t-popover position="left" trigger="hover">
      <template #content> 哈哈 </template>
      <t-button>左边</t-button>
    </t-popover>
    <t-popover position="right" trigger="hover">
      <template #content> 哈哈 </template>
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