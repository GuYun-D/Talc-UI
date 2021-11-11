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

import TDot from "./TDot.vue";

export default defineComponent({
  name: "t-carousel",
  components: {
    TDot,
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    dot: {
      type: Boolean,
      default: true,
    },
    director: {
      type: Boolean,
      default: true,
    },
    dotBgColor: {
      type: String,
      default: "#fff",
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLength: 0,
    });

    let t = null;
    const autoplay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex("prev");
        }, props.duration);
      }
    };

    /**
     * 设置当前轮播哪张图
     * @param {String} dir 方向
     */
    const setIndex = (dir: string) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLength) {
            state.currentIndex = 0;
          }
          break;
        case "prev":
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

    // 卸载之前
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
      // 清除定时器
      clearInterval(t);
      t = null;
    }

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
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