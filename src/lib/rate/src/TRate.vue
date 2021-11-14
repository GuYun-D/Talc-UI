<template>
  <div class="t-rate">
    <div class="rate-wrapper" v-for="num in 5" :key="num">
      <span
        class="talc ta-star rate-star"
        :class="num <= starNum ? 'active' : ''"
        :style="{ fontSize: size + 'px' }"
        @click="setStarNum(num)"
        @mousemove="currentIndex = num"
      ></span>
    </div>

    <div :style="{ fontSize: size + 'px' }">{{ auxiliaryText[currentIndex - 1] }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
    starColr: {
      type: String,
      default: "#fbab06",
    },
    auxiliaryText: {
      type: Array,
      default: ["极差", "失望", "一般", "满意", "惊喜"],
      validator: (text: string[]) => {
        if (text.length === 5 && text.length > 4) return true;
        console.warn(
          "rate component warn: Auxiliary text needs to be a string array containing five elements. If there are more than five elements, the elements other than the fifth will no longer be used"
        );
      },
    },
  },
  setup(props: rateProps, { emit }) {
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

    return { starNum, setStarNum, currentIndex };
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
    }
  }
}
</style>