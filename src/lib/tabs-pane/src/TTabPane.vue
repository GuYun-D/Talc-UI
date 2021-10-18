<template>
  <div class="t-tab-pane">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "../../tabs/src/tabs";

export default defineComponent({
  name: "t-tab-pane",
  setup() {
    emitter.on("update:selected", (name: string) => {
      console.log(name);
    });
    return {};
  },
});
</script>

<style scoped>
</style>