<template>
  <div class="t-rate">
    <span
      class="talc ta-star rate-star"
      :class="num <= starNum ? 'active' : ''"
      v-for="num in 5"
      :key="num"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(num)"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { rateProps } from "./type";
import { useRate } from "../../hooks";

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
  setup(props: rateProps, { emit }) {
    // const [starNum, setStarNum] = useRate(props.num, () => {
    //   console.log(starNum.value);
    // });
    const [starNum, setStarNum] = useRate(props.num, () => {
      /**
       * starNum.value 通过回调返回出来的ref数据，存在value属性的，但是编辑器报错，
       * 运行无异常
       */
      // @ts-ignore
      emit("getStarNum", starNum.value);
    });
    return { starNum, setStarNum };
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