<template>
  <div class="t-rate">
    <span
      class="talc ta-star rate-star"
      :class="starItem <= num ? 'active' : ''"
      v-for="starItem in 5"
      :key="starItem"
      :style="{ fontSize: size + 'px' }"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { rateProps } from "./type";

export default defineComponent({
  name: "t-rate",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props: rateProps) {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-rate {
  .rate-star {
    color: #999;

    &.icon-star {
      transition: all 0.3s;
    }

    &.active {
      color: #fbab06;
    }
  }
}
</style>