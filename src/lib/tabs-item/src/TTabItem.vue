<template>
  <div
    class="t-tab-item"
    :class="classes"
    @click="xxxxx"
    :name="name"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, getCurrentInstance } from "vue";
import emitter from "../../tabs/src/tabs";
import { IEmitter } from "../../tabs/src/types";
import { getElement } from "../../utils/common";

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
    const instance = getCurrentInstance();
    const classes = computed(() => {
      return {
        active: active.value,
        disabled: props.disabled,
      };
    });
    emitter.on("update:selected", (obj: IEmitter) => {
      // console.log(getElement(obj.el));
    });
    const xxxxx = () => {
      if (props.disabled) {
        return;
      }
      emitter.emit("update:selected", { selected: props.name, el: instance });
    };
    return { xxxxx, classes };
  },
});
</script>

<style scoped lang="scss">
.t-tab-item {
  position: relative;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #990000;

  &.disabled{
    color: #ccc;
    background-color: rgb(241, 241, 241);
    cursor: not-allowed;
  }

  &.active {
    color: dodgerblue;
  }
}
</style>