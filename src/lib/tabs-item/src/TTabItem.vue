<template>
  <div class="t-tab-item" @click="xxxxx">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "../../tabs/src/tabs";

export default defineComponent({
  name: "t-tab-item",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    emitter.on("update:selected", (name: string) => {
      console.log(name);
    });
    const xxxxx = () => {
      emitter.emit("update:selected", props.name);
    };
    return { xxxxx };
  },
});
</script>

<style scoped>
</style>