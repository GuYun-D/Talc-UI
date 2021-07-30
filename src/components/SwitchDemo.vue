<template>
  <div>
    swich文档
    <Switch :value="y" @input="y = $event"></Switch>
  </div>
</template>

<script>
import Switch from "../lib/switch.vue";
import {ref} from 'vue'
export default {
  components: {
    Switch,
  },

  setup() {
    const y = ref(true);
    return { y };
  },
};
</script>

<style lang="scss" scoped>
</style>