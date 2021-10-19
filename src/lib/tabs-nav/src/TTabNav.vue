<template>
  <div class="t-tab-nav" ref="tabNavRef">
    <slot></slot>
    <div class="line" ref="lineRef"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import emitter from "../../tabs/src/tabs";
import { IEmitter } from "../../tabs/src/types";
import { getElement } from "../../utils/common";

export default defineComponent({
  name: "t-tab-nav",
  setup() {
    const lineRef = ref(null);
    const tabNavRef = ref(null);

    onMounted(() => {
      emitter.on("update:selected", (obj: IEmitter) => {
        let element = getElement(obj.el);
        let { width, height, left } = element.getBoundingClientRect();
        lineRef.value.style.width = width + "px";
        lineRef.value.style.height = height + "px";
        lineRef.value.style.left = left + 'px';
      });
    });
    return { lineRef, tabNavRef};
  },
});
</script>

<style scoped lang="scss">
.t-tab-nav {
  position: relative;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;

  .line {
    position: absolute;
    bottom: 0;
    transition: all 1s;
    border-bottom: 3px solid #f40;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>