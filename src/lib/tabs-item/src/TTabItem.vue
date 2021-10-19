<template>
  <div class="t-tab-item" :class="classes" @click="xxxxx">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
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
    const active = ref(false);
    const classes = computed(() => {
      return {
        active: active.value,
      };
    });
    emitter.on("update:selected", (name: string) => {
      // if (name == props.name) {
      //   console.log(`我${props.name}被选中了`);
      //   active.value = true;
      // } else {
      //   console.log(`我${props.name}没有选中`);
      //   active.value = false;
      // }
      active.value = name === props.name;
    });
    const xxxxx = () => {
      emitter.emit("update:selected", props.name);
    };
    return { xxxxx, classes };
  },
});
</script>

<style scoped lang="scss">
.t-tab-item {
  flex-shrink: 0;
  padding: 0 2em;

  &.active{
    background-color: dodgerblue;
  }
}
</style>