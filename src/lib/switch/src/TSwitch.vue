<template>
  <div class="t-switch">
    <div class="t-switch-text" v-show="textVisible">
      {{ inactiveText }}
    </div>
    <button
      ref="btnRef"
      class="t-switch-btn"
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
import { defineComponent, watch, ref, onMounted } from "vue";
import { ISwitchProps } from "./types";

export default defineComponent({
  name: "t-switch",
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
  },
  setup(props: ISwitchProps, { emit }) {
    const activeRef = ref<HTMLDivElement>();
    const btnRef = ref<HTMLButtonElement>();

    const switchClick = () => {
      if (props.disabled) return;
      emit("update:modelValue", !props.modelValue);
      emit("switch-change", !props.modelValue);
    };

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
    return { switchClick, activeRef, btnRef };
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
    height: 22px;
    width: 44px;
    border: none;
    border-radius: 11px;
    position: relative;

    &.t-switch-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

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
      > span {
        left: calc(100% - 20px);
      }
    }

    &.t-checked:active {
      > span {
        width: 22px;
        margin-left: -4px;
      }
    }
  }
}
</style>