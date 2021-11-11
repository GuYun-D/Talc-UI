<template>
  <div class="t-carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "t-carousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Boolean,
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
  },
  setup(props) {
    const state = reactive({
      currentIndex: props.initial,
    });
    return { 
      ...toRefs(state)
     };
  },
});
</script>

<style scoped lang="scss">
.t-carousel {
  width: 100%;
  height: 100%;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>