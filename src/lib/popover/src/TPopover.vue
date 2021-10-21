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
  setup() {
    const popoverVisible = ref(false);
    const triggerRef = ref(null);
    const contentRef = ref(null);
    let popoverTimer: number;

    const popoverClick = () => {
      popoverVisible.value = !popoverVisible.value;

      if (popoverTimer) {
        clearTimeout(popoverTimer);
      }
      popoverTimer = setTimeout(() => {
        if (popoverVisible.value === true) {
          const { top, left } = triggerRef.value.getBoundingClientRect();
          contentRef.value.style.top = top + window.screenY + "px";
          contentRef.value.style.left = left + window.screenX + "px";
          function popoverClose() {
            popoverVisible.value = false;
            document.removeEventListener("click", popoverClose);
          }
          document.addEventListener("click", popoverClose);
        } else {
          console.log("关闭popover");
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
  border: 1px solid #f40;
  box-shadow: 1px 1px 1px #ccc;
  transform: translateY(-100%);
  z-index: 10;
}
</style>