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


export default defineComponent({
  name: "t-tab-nav",
  setup() {
    const lineRef = ref(null);
    const tabNavRef = ref(null);
    emitter.on("update:selected", (obj: IEmitter) => {});
    
    onMounted(() => {
      // console.log(lineRef);
    });
    return { lineRef, tabNavRef };
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
    width: 100px;
    border-bottom: 3px solid #f40;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>