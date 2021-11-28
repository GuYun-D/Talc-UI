<template>
  <div class="t-switch" v-size:value="finalSize">
    <div class="t-switch-text" v-show="textVisible">
      {{ inactiveText }}
    </div>
    <button
      ref="btnRef"
      class="t-switch-btn"
      id="t-switch-btn"
      :class="{ 't-checked': modelValue, 't-switch-disabled': disabled }"
      @click="switchClick"
    >
      <span></span>
    </button>
    <div class="t-switch-text" ref="activeRef" v-show="textVisible">
      {{ activeText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, onMounted, computed } from "vue";
import { ISwitchProps, ESwitchSize } from "./types";
import { size } from "./directives";

export default defineComponent({
  name: "t-switch",
  directives: {
    size,
  },
  props: {
    activeColor: {
      type: String,
      default: "#1890ff",
    },
    activeText: {
      type: String,
      default: "开",
    },
    inactiveColor: {
      type: String,
      default: "#bfbfbf",
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
    activeTextColor: {
      type: String,
      default: "#1890ff",
    },
    textVisible: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
      validator: (value: string) => {
        if (ESwitchSize[value]) return true;
        console.warn(
          "[Switch Component Warn]: The size of the switch is only big, normal, small"
        );
      },
    },
    width: Number,
  },
  setup(props: ISwitchProps, { emit }) {
    const activeRef = ref<HTMLDivElement>();
    const btnRef = ref<HTMLButtonElement>();

    const switchClick = () => {
      if (props.disabled) return;
      emit("update:modelValue", !props.modelValue);
      emit("switch-change", !props.modelValue);
    };

    const finalSize = computed(() => {
      return props.width ? props.width : props.size;
    });

    onMounted(() => {
      watch(
        () => props.modelValue,
        (value: boolean) => {
          if (value) {
            activeRef.value.style.color = props.activeTextColor;
            btnRef.value.style.backgroundColor = props.activeColor;
          } else {
            activeRef.value.style.color = "";
            btnRef.value.style.backgroundColor = props.inactiveColor;
          }
        },
        {
          immediate: true,
        }
      );
    });
    return { switchClick, activeRef, btnRef, finalSize };
  },
});
</script>

<style scoped lang="scss">
.t-switch {
  display: flex;
  align-items: center;

  .t-switch-text {
    margin: 0 10px;
  }

  .t-switch-btn {
    border: none;
    position: relative;

    &.t-switch-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      background: white;
      transition: all 0.3s;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>