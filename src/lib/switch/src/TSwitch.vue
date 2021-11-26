<template>
  <button
    class="t-switch"
    :class="{ 't-checked': modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ISwitchProps, ESwitchSize } from "./types";

export default defineComponent({
  name: "t-switch",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: (value: string) => {
        if (ESwitchSize[value]) return true;
        console.warn(
          "[Switch Component Warn]: The size of the switch is only big, normal, small and mini"
        );
      },
    },

    activeColor: {
      type: String,
      default: "",
    },
    activeText: {
      type: String,
      default: "开",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    inactiveText: {
      type: String,
      default: "关",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props: ISwitchProps) {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-switch {
  height: 22px;
  width: 44px;
  border: none;
  background: #bfbfbf;
  border-radius: 11px;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background: white;
    border-radius: 9px;
    transition: all 0.3s;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: 22px;
    }
  }

  &.t-checked {
    background: #1890ff;
    > span {
      left: calc(100% - 20px);
    }
  }

  &.t-checked:active {
    > span {
      width: 18px + 4px;
      margin-left: -4px;
    }
  }
}
</style>