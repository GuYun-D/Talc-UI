<template>
  <div class="t-carousel-item" v-if="selfIndex === currentIndex">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  watch,
} from "vue";

export default defineComponent({
  name: "t-carousel-item",
  setup() {
    const instance = getCurrentInstance();
    const state = reactive({
      selfIndex: instance.vnode.key,
      // @ts-ignore
      currentIndex: instance.parent.ctx.currentIndex,
    });

    watch(
      () => {
        // @ts-ignore
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="scss">
.t-carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>