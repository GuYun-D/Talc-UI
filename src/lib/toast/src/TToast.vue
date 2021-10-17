<template>
  <div class="t-toast" :class="toastClasses" v-if="visible" ref="toastRef">
    <slot class="defaultSlot" v-if="!enableHtml"></slot>
    <div v-else class="htmlSlot">
      <slot name="toastHtml"></slot>
    </div>
    <span class="line"></span>
    <span v-if="closeButton.text" class="closeLine" @click="onclickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, PropType, ref } from "vue";
import { ICloseButton } from "../types/types";

export default defineComponent({
  name: "t-toast",
  emits: ["update:visible"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 5,
    },
    closeButton: {
      type: Object as PropType<ICloseButton>,
      default: () => {
        return {
          text: "关闭",
          callBack: () => {},
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator: (value: string) => {
        return ["top", "bottom", "middle"].includes(value);
      },
    },
  },
  setup(props, { emit }) {
    const toastVisible = computed(() => props.visible);
    let timer: any;

    const toastClasses = computed(() => {
      return {
        [`toast-${props.position}`]: props.position,
      };
    });

    if (props.autoClose) {
      watch(toastVisible, (newValue: boolean, oldVale: boolean) => {
        if (newValue) {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            close();
          }, props.autoCloseDelay * 1000);
        } else {
          clearTimeout(timer);
        }
      });
    }

    const close = () => {
      emit("update:visible", false);
    };

    const onclickClose = () => {
      props.closeButton.callBack();
      close();
    };

    return { onclickClose, toastClasses };
  },
});
</script>

<style scoped lang="scss">
.t-toast {
  position: fixed;
  display: flex;
  align-items: center;
  // top: 0;
  left: 50%;
  // transform: translateX(-50%);
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.8;
  max-width: 1200px;
  padding: 10px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  color: #fff;
  z-index: 10;

  .htmlSlot {
    display: flex;
    flex-direction: column;
  }

  .closeLine {
    position: relative;
    padding-left: 16px;
    padding-right: 5px;
    cursor: pointer;
    flex-shrink: 0;
    border-left: 1px solid #666;
  }

  .line {
    display: inline-block;
    height: 100%;
    margin-left: 16px;
  }

  &.toast-top {
    top: 0;
    transform: translateX(-50%);
  }

  &.toast-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }

  &.toast-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
