<template>
  <div class="t-carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <t-dot
        dotBgColor="#f40"
        :hasDot="true"
        :itemLength="itemLength"
        :currentIndex="currentIndex"
        @dotClick="dotClick"
      ></t-dot>
      <t-director dir="next" @dirClick="dirClick"></t-director>
      <t-director dir="prev" @dirClick="dirClick"></t-director>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  getCurrentInstance,
} from "vue";

import TDot from "./components/TDot.vue";
import TDirector from "./components/TDirector.vue";
import { TCarouselProps } from "./TCarousel";
import { ICarouselProps, director } from "./types/";

export default defineComponent({
  name: "t-carousel",
  components: {
    TDot,
    TDirector,
  },
  props: TCarouselProps,
  setup(props: ICarouselProps) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLength: 0,
    });

    let t = null;
    const autoplay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex(director[props.direction]);
        }, props.duration);
      }
    };

    /**
     * 设置当前轮播哪张图
     * @param {String} dir 方向
     */
    const setIndex = (dir: string) => {
      switch (dir) {
        case director[props.direction]:
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLength) {
            state.currentIndex = 0;
          }
          break;
        case director[props.direction]:
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLength - 1;
          }
          break;
      }
    };

    onMounted(() => {
      autoplay();
      // @ts-ignore
      state.itemLength = instance.slots.default()[0].children.length;
    });

    onBeforeUnmount(() => {
      _clearIntervalFn();
    });

    const dotClick = (index: number) => {
      state.currentIndex = index;
    };

    const mouseEnter = () => {
      _clearIntervalFn();
    };

    const mouseLeave = () => {
      autoplay();
    };

    function _clearIntervalFn() {
      clearInterval(t);
      t = null;
    }

    const dirClick = (dir: string) => {
      setIndex(dir);
    };

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick,
    };
    
  },
});
</script>

<style scoped lang="scss">
.t-carousel {
  width: 400px;
  height: 200px;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>