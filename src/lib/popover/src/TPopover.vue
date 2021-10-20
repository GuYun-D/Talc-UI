<template>
  <div class="t-popover">
    <div class="content-wrapper" @click.stop>
      <slot name="content" v-if="popoverVisible"></slot>
    </div>
    <div @click.stop="popoverClick">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "t-popover",
  setup() {
    const popoverVisible = ref(false);
    let popoverTimer: number;

    const popoverClick = () => {
      popoverVisible.value = !popoverVisible.value;

      if (popoverTimer) {
        clearTimeout(popoverTimer);
      }
      popoverTimer = setTimeout(() => {
        if (popoverVisible.value === true) {
          function popoverClose() {
            popoverVisible.value = false;
            document.removeEventListener("click", popoverClose);
          }
          document.addEventListener("click", popoverClose);
        }
      });
    };
    return { popoverClick, popoverVisible };
  },
});
</script>

<style scoped lang="scss">
.t-popover {
  position: relative;
  display: inline-flex;
  vertical-align: top;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid #f40;
    box-shadow: 1px 1px 1px #ccc;
  }
}
</style>