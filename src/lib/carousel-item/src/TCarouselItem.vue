<template>
  <transition name="yun">
    <div class="t-carousel-item" v-show="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
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

  .v-enter-active,
  .v-leave-active {
    transition: all 300ms linear;
  }

  .v-enter-active {
    transform: translateX(100%);
  }

  .v-enter-to {
    transform: translateX(0);
  }

  .v-leave-active {
    transform: translateX(0);
  }

  .v-leave-to {
    transform: translateX(-100%);
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>