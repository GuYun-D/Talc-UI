<template>
  <div class="t-rate">
    <div
      class="rate-wrapper"
      v-for="num in completeStarNum === 0 ? 5 : completeStarNum"
      :key="num"
    >
      <span
        class="talc ta-star rate-star"
        :class="
          num <= (completeStarNum === 0 ? starNum : completeStarNum)
            ? 'active'
            : ''
        "
        :style="{ fontSize: size + 'px' }"
        @click="setStarNum(num)"
        @mousemove="mousemoveStar(num)"
      ></span>
    </div>

    <div v-if="readonyRate && incompleteStarNum !== 0" class="rate-wrapper">
      <span
        v-rate:value="[incompleteStarNum, size]"
        class="talc ta-star rate-star active pre"
        :style="{ fontSize: size + 'px' }"
      >
        <span class="mark"></span>
      </span>
    </div>

    <div :style="{ fontSize: size + 'px' }" class="rate-text">
      <template v-if="readonyRate">{{ readonyRate }}</template>
      <template v-else-if="auxiliaryTextVisible">{{ auxiliaryText[currentIndex - 1] }}</template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ratePropsType } from "./type";
import { useRate } from "../../hooks";
import { rate } from "./directives";
import rateProps from './TRate'

export default defineComponent({
  name: "t-rate",
  directives: {
    rate,
  },
  props: rateProps,
  setup(props: ratePropsType, { emit }) {
    // const [starNum, setStarNum] = useRate(props.num, () => {
    //   console.log(starNum.value);
    // });

    const currentIndex = ref(props.num);
    const [starNum, setStarNum] = useRate(props.num, () => {
      /**
       * starNum.value 通过回调返回出来的ref数据，存在value属性的，但是编辑器报错，
       * 运行无异常
       */
      // @ts-ignore
      emit("getStarNum", starNum.value);
    });

    if (props.num !== 0 && props.readonyRate) {
      throw Error(
        "Rate Component Error: If you want the current score to be read-only, please do not pass the num attribute"
      );
    }

    let completeStarNum = ref(0);
    let incompleteStarNum = ref(0);
    if (props.readonyRate) {
      completeStarNum.value = parseInt(props.readonyRate + "");
      incompleteStarNum.value = parseInt(
        props.readonyRate * 10 - completeStarNum.value * 10 + ""
      );
    }

    const mousemoveStar = (num: number) => {
      if (currentIndex.value === num || props.readonyRate) return;
      currentIndex.value = num;
    };

    return {
      starNum,
      setStarNum,
      currentIndex,
      completeStarNum,
      incompleteStarNum,
      mousemoveStar,
    };
  },
});
</script>

<style scoped lang="scss">
.t-rate {
  display: flex;
  align-items: center;

  .rate-wrapper {
    margin-right: 10px;
    .rate-star {
      color: #999;

      &:hover {
        color: #fbab06;
      }

      &.icon-star {
        transition: all 0.3s;
      }

      &.active {
        color: #fbab06;
      }

      &.pre {
        position: relative;

        .mark {
          position: absolute;
          display: block;
          background-color: #fff;
          right: 0;
          top: 0;
        }
      }
    }
  }

  .rate-text{
    padding: 0 10px;
  }
}
</style>