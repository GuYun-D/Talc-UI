<template>
  <div class="t-carousel-item">
    <transition name="yun">
      <div v-if="selfIndex === currentIndex">
        <img :src="imgUrl" alt="" />
      </div>
    </transition>
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
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
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

  .yun-enter-active,
  .yun-leave-active {
    transition: all 300ms linear;
  }

  .yun-enter-active {
    transform: translateX(100%);
  }

  .yun-enter-to {
    transform: translateX(0);
  }

  .yun-leave-active {
    transform: translateX(0);
  }

  .yun-leave-to {
    transform: translateX(-100%);
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>