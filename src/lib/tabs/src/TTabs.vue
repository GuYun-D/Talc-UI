<template>
  <div class="t-tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "t-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value: string) => {
        return ["horizontal", "vertical"].includes(value);
      },
    },
  },
  setup(props, { emit }) {
    onMounted(() => {
      emit("update:selected", props.selected);
    });
    return {};
  },
});
</script>

<style scoped>
</style>