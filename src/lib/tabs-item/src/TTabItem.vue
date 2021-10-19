<template>
  <div class="t-tab-item" :class="classes" @click="xxxxx" :name="name">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import emitter from "../../tabs/src/tabs";
import { IEmitter } from "../../tabs/src/types";

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
    emitter.on("update:selected", (obj: IEmitter) => {
      // active.value = obj.selected === props.name;
      console.log(obj);
    });
    const xxxxx = () => {
      emitter.emit("update:selected", {selected: props.name});
    };
    return { xxxxx, classes };
  },
});
</script>

<style scoped lang="scss">
.t-tab-item {
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    color: dodgerblue;
  }
}
</style>