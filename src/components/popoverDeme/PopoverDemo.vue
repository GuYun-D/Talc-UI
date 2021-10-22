<template>
  <div style="padding: 50px 0">
    <t-popover>
      <template #content> 卧槽 </template>
      <t-button>clcik</t-button>
    </t-popover>
    <t-popover position="bottom">
      <template #content> 卧槽 </template>
      <t-button>clcik</t-button>
    </t-popover>
    <t-popover position="left">
      <template #content> 卧槽 </template>
      <t-button>clcik</t-button>
    </t-popover>
    <t-popover position="right">
      <template #content> 卧槽 </template>
      <t-button>clcik</t-button>
    </t-popover>

    <div style="margin: 30px 0">
      <t-popover trigger="hover">
        <template #content> 卧槽 </template>
        <t-button>点我</t-button>
      </t-popover>
      <t-popover position="bottom" trigger="hover">
        <template #content> 卧槽 </template>
        <t-button>点我</t-button>
      </t-popover>
      <t-popover position="left" trigger="hover">
        <template #content> 卧槽 </template>
        <t-button>点我</t-button>
      </t-popover>
      <t-popover position="right" trigger="hover">
        <template #content> 卧槽 </template>
        <t-button>点我</t-button>
      </t-popover>
    </div>
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