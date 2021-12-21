<template>
  <div class="t-toast-wrapper" :class="toastClass">
    <div class="t-toast" v-if="thisVisiable" ref="toastRootRef">
      <div class="t-toast-message">
        <template v-if="!enableHtml">
          <slot></slot>
        </template>
        <template v-else>
          <div v-html="toastHTML"></div>
        </template>
      </div>
      <span class="t-toast-line" ref="toastLineRef"></span>
      <span
        v-if="closeButton"
        class="t-toast-button"
        @click="onClickClose"
        v-html="closeButton.text"
      >
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from "vue";
import { IToastProps, EPosition } from "./type";

export default defineComponent({
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 5,
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: "关闭",
        callBack: () => {},
      }),
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },

    toastHTML: String,

    position: {
      type: String,
      default: "top",
      validator: (value: string) => {
        if (EPosition[value]) return true;
        console.warn(
          "[Toast Component Warning]:The value of attribute position only supports top, middle and bottom "
        );
      },
    },
  },

  setup(props: IToastProps) {
    const thisVisiable = ref(true);
    const toastRootRef = ref<HTMLDivElement>();
    const toastLineRef = ref<HTMLSpanElement>();

    /**
     * 点击了关闭按钮
     */
    const onClickClose = () => {
      _close();
      props.closeButton.callBack();
    };

    onMounted(() => {
      /**
       * 启用自动关闭
       */
      if (props.autoClose) {
        setTimeout(() => {
          _close();
        }, props.autoCloseDelay * 1000);
      }

      nextTick(() => {
        toastLineRef.value.style.height =
          toastRootRef.value.getBoundingClientRect().height + "px";
      });
    });

    /**
     * 销毁当前组件以及外层hmtl元素
     */
    function _close() {
      thisVisiable.value = false;
      toastRootRef.value.parentElement.remove();
    }

    /**
     * 计算toast位置class
     */
    const toastClass = computed(() => {
      return { [`t-toast-position-${props.position}`]: props.position };
    });

    return {
      thisVisiable,
      toastRootRef,
      onClickClose,
      toastLineRef,
      toastClass,
    };
  },
});
</script>

<style scoped lang="scss">
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.t-toast-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.t-toast-position-top {
    top: 0;
    transform: translateX(-50%);
    .t-toast {
      animation: slide-down 1s;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.t-toast-position-bottom {
    bottom: 0;
    .t-toast {
      animation: slide-up 1s;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &.t-toast-position-middle {
    top: 50%;
    transform: translate(-50%, -50%);

    .t-toast{
      animation: fade-in 1s;
    }
  }

  .t-toast {
    border: 1px solid rgb(32, 32, 32);
    font-size: 14px;
    min-height: 40px;
    line-height: 1.8;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    color: #fff;
    box-shadow: 0 0 03px 0px rgba(0, 0, 0, 0.5);

    > .t-toast-message {
      padding: 5px 0;
    }

    > .t-toast-line {
      height: 100%;
      margin-left: 16px;
      border-left: 1px solid #666;
    }

    > .t-toast-button {
      font-size: 14px;
      padding-left: 16px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }
}
</style>