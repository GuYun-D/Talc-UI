<template>
  <div class="t-popover">
    <teleport to="body">
      <div
        ref="contentRef"
        class="content-wrapper"
        @click.stop
        v-if="popoverVisible"
        :class="{ [`position-${position}`]: true }"
      >
        <slot name="content"></slot>
      </div>
    </teleport>
    <span ref="triggerRef" @click.stop="popoverClick">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "t-popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator: (value: string) => {
        return ["top", "bottom", "left", "right"].includes(value);
      },
    },
  },
  // 可优化的
  setup(props) {
    const popoverVisible = ref(false);
    const triggerRef = ref(null);
    const contentRef = ref(null);
    let popoverTimer: number;

    const popoverClick = () => {
      popoverVisible.value = !popoverVisible.value;
      document.removeEventListener("click", popoverClose);
      function popoverClose() {
        popoverVisible.value = false;
        document.removeEventListener("click", popoverClose);
      }

      if (popoverTimer) {
        clearTimeout(popoverTimer);
      }
      popoverTimer = setTimeout(() => {
        if (popoverVisible.value === true) {
          const { top, left, height, width } =
            triggerRef.value.getBoundingClientRect();
          if (props.position === "top") {
            contentRef.value.style.top = top + window.screenY + "px";
            contentRef.value.style.left = left + window.scrollX + "px";
          } else if (props.position === "bottom") {
            contentRef.value.style.top = top + height + window.screenY + "px";
            contentRef.value.style.left = left + window.scrollX + "px";
          } else if (props.position === "left") {
            contentRef.value.style.left = left + window.scrollX + "px";
            let { height: leftHeight } =
              contentRef.value.getBoundingClientRect();
            contentRef.value.style.top =
              top + window.screenY - Math.abs(leftHeight - height) / 2 + "px";
          } else if (props.position === "right") {
            contentRef.value.style.left = left + window.scrollX + width + "px";
            let { height: rightHeight } =
              contentRef.value.getBoundingClientRect();
            contentRef.value.style.top =
              top + window.screenY - Math.abs(rightHeight - height) / 2 + "px";
          }

          document.addEventListener("click", popoverClose);
        }
      });
    };
    return { popoverClick, popoverVisible, triggerRef, contentRef };
  },
});
</script>

<style scoped lang="scss">
.t-popover {
  position: relative;
  display: inline-flex;
  vertical-align: top;
}

.content-wrapper {
  position: absolute;
  border: 1px solid rgb(168, 168, 168);
  // box-shadow: 1px 1px 1px rgb(189, 189, 189);
  border-radius: 5px;
  padding: 0.5em 1em;
  z-index: 10;
  filter: drop-shadow(0px 1px 1px rgb(189, 189, 189));
  background-color: #fff;
  word-break: break-all;

  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0px;
    height: 10px;
    position: absolute;
    left: 10px;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before {
      border-top-color: rgb(168, 168, 168);
      top: 100%;
    }

    &::after {
      top: calc(100% - 1px);
      border-top-color: rgb(255, 255, 255);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before {
      border-bottom-color: rgb(168, 168, 168);
      bottom: 100%;
    }

    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: rgb(255, 255, 255);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before,
    &::after {
      transform: translateY(-50%) rotate(270deg);
      top: 50%;
    }

    &::before {
      border-top-color: rgb(168, 168, 168);
      left: 107%;
    }

    &::after {
      left: calc(100% + 5px);
      border-top-color: rgb(255, 255, 255);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before,
    &::after {
      transform: translateY(-50%) rotate(90deg);
      top: 50%;
    }

    &::before {
      border-top-color: rgb(168, 168, 168);
      left: -32%;
    }

    &::after {
      left: -31%;
      border-top-color: rgb(255, 255, 255);
    }
  }
}
</style>