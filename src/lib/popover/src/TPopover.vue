<template>
  <div class="t-popover">
    <teleport to="body">
      <div
        ref="contentRef"
        class="content-wrapper"
        @click.stop
        v-show="popoverVisible"
        :class="{ [`position-${position}`]: true }"
      >
        <slot name="content"></slot>
      </div>
    </teleport>
    <!-- <span ref="triggerRef" @click.stop="popoverClick"> -->
    <span ref="triggerRef">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

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
    trigger: {
      type: String,
      default: "click",
      validator: (value: string) => {
        return ["click", "hover"].includes(value);
      },
    },
  },
  // 可优化的
  setup(props) {
    const popoverVisible = ref(false);
    const triggerRef = ref(null);
    const contentRef = ref(null);
    let popoverTimer: number;

    const openEvent = computed(() => {
      return props.trigger === "click" ? "click" : "mouseenter";
    });

    const closeEvent = computed(() => {
      return props.trigger === "click" ? "clcik" : "mouseleave";
    });

    const popoverClose = () => {
      popoverVisible.value = false;
      document.removeEventListener("click", popoverClose);
    };

    onMounted(() => {
      triggerRef.value.addEventListener(openEvent.value, () => {
        popoverClick();
      });

      triggerRef.value.addEventListener(closeEvent.value, () => {
        popoverClose();
      });

      if(checkHtml(contentRef.value.innerHTML)){
        throw new Error("Currently Popover does not support HTML")
      }
    });

    const checkHtml = (htmlStr: string) => {
      var reg = /<[^>]+>/g;
      return reg.test(htmlStr);
    };

    const popoverClick = () => {
      popoverVisible.value = !popoverVisible.value;
      document.removeEventListener("click", popoverClose);

      if (popoverTimer) {
        clearTimeout(popoverTimer);
      }
      popoverTimer = setTimeout(() => {
        document.addEventListener("click", popoverClose);
        if (popoverVisible.value === true) {
          const { top, left, height, width } =
            triggerRef.value.getBoundingClientRect();
          let { height: positionHeight } =
            contentRef.value.getBoundingClientRect();
          const positions = {
            top: {
              top: top + window.scrollY,
              left: left + window.scrollX,
            },
            bottom: {
              top: top + height + window.scrollY,
              left: left + window.scrollX,
            },
            left: {
              left: left + window.scrollX,
              top: top + window.scrollY - Math.abs(positionHeight - height) / 2,
            },
            right: {
              left: left + window.scrollX + width,
              top: top + window.scrollY - Math.abs(positionHeight - height) / 2,
            },
          };
          contentRef.value.style.left = positions[props.position].left + "px";
          contentRef.value.style.top = positions[props.position].top + "px";
        }
      });
    };
    return {
      popoverClick,
      popoverVisible,
      triggerRef,
      contentRef,
    };
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
      left: calc(100% + 3px);
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
      left: -41%;
    }

    &::after {
      left: -39%;
      border-top-color: rgb(255, 255, 255);
    }
  }
}
</style>
