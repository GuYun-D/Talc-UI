<demo>
基本用法
</demo>

<template>
  <Tabs :selected="title" @update:selected="title = $event">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script>
import Tabs from "../../../lib/Tabs.vue";
import Tab from "../../../lib/Tab.vue";
import { ref } from "vue";

export default {
  components: {
    Tabs,
    Tab
  },

   setup() {
    const title = ref("导航一");
    return { title };
  },
};
</script>