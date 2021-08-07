<demo>
  基本用法
</demo>

<template>
  <Switch :value="bool" @updata:value="bool = $event"></Switch>
</template>

<script lang="ts">
import Switch from "../../../lib/Switch.vue";
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
