<template>
  <div>
    <Tabs>
      <Table title="导航一">内容一</Table>
      <Table title="导航二">内容二</Table>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>

<style lang="scss" scoped>
</style>