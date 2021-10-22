<template>
  <div class="t-popover">
    <teleport to="body">
      <div
        ref="contentRef"
        class="content-wrapper"
        @click.stop
        v-if="popoverVisible"
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
  // 可优化的
  setup() {
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
          const { top, left } = triggerRef.value.getBoundingClientRect();
          contentRef.value.style.top = top + window.screenY + "px";
          contentRef.value.style.left = left + window.screenX + "px";
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
  transform: translateY(-100%);
  border-radius: 5px;
  margin-top: -10px;
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

  &::before {
    border-top-color: rgb(168, 168, 168);
    top: 100%;
  }

  &::after {
    top: calc(100% - 1px);
    border-top-color: rgb(255, 255, 255);
  }
}
</style>