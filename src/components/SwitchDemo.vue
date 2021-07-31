<template>
  <div>
    swich文档
    <Switch :value="bool" @updata:value="bool = $event"></Switch>
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },

  setup() {
    const bool = ref(true);
    return { bool };
  },
};
</script>

<style lang="scss" scoped>
</style>