<demo>
支持 disabled
</demo>

<template>
  <Switch :value="bool" @updata:value="bool = $event" disabled></Switch>
</template>

<script lang="ts">
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
