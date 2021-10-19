<template>
  <div>
    <t-tabs
      :selected="selectedTab"
      @update:selected="selectedTab = $event"
      direction="horizontal"
    >
      <t-tab-nav>
        <!-- <template #actions>
          <t-button>添加</t-button>
        </template> -->
        <t-tab-item name="woman" :disabled="true">
          <t-icon icon="home"></t-icon>
          美女
        </t-tab-item>
        <t-tab-item name="finance"> 财经 </t-tab-item>
        <t-tab-item name="sports"> 体育 </t-tab-item>
      </t-tab-nav>

      <t-tab-content>
        <t-tab-pane name="woman">美女相关 </t-tab-pane>
        <t-tab-pane name="finance">财经相关 </t-tab-pane>
        <t-tab-pane name="sports"> 体育相关</t-tab-pane>
      </t-tab-content>
    </t-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let selectedTab = ref("woman");
    return { selectedTab };
  },
});
</script>

<style scoped>
</style>