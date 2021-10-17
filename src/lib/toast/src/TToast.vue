<template>
  <div class="t-toast" v-if="visible" ref="toastRef">
    <slot></slot>
    <span class="line"></span>
    <span v-if="closeButton.text" class="closeLine" @click="onclickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, PropType, Prop } from "vue";
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
      default: 3,
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
  },
  setup(props, { emit }) {
    const toastVisible = computed(() => props.visible);
    let timer: any;

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

    return { onclickClose };
  },
});
</script>

<style scoped lang="scss">
.t-toast {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.8;
  height: 40px;
  padding: 10px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  color: #fff;
  z-index: 10;

  .closeLine {
    position: relative;
    padding-left: 16px;
    cursor: pointer;
  }

  .line {
    display: inline-block;
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
