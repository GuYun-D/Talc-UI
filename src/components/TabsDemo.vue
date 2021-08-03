<template>
  <div>
    <h3>示例一</h3>
    <Tabs selected="title" @update:selected="title = $event">
      <Tab title="导航一">内容一</Tab>
      <Tab title="导航二">内容二</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },

  setup() {
    const title = ref("导航一");

    return { title };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>