<template>
  <div class="t-carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <t-dot
        dotBgColor="#f40"
        :hasDot="true"
        :itemLength="itemLength"
        :currentIndex="currentIndex"
        :dotType="dotType"
        :trigger="triggerType"
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
  ref,
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

    const setIndex = (dir: director) => {
      switch (dir) {
        case director.next:
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLength) {
            state.currentIndex = 0;
          }
          break;
        case director.prev:
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

    const dirClick = (dir: director) => {
      setIndex(dir);
    };

    const triggerType =
      props.trigger === "hover" ? "mouseenter" : props.trigger;

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick,
      triggerType,
    };
  },
});
</script>

<style scoped lang="scss">
.t-carousel {
  width: 400px;
  height: 200px;
  overflow: hidden;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>