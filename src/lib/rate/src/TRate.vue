<template>
  <div class="t-rate">
    <template v-if="!readonyRate">
      <div class="rate-wrapper" v-for="num in 5" :key="num">
        <span
          class="talc ta-star rate-star"
          :class="num <= starNum ? 'active' : ''"
          :style="{ fontSize: size + 'px' }"
          @click="setStarNum(num)"
          @mousemove="currentIndex = num"
        ></span>
      </div>

      <div :style="{ fontSize: size + 'px' }">
        {{ auxiliaryText[currentIndex - 1] }}
      </div>
    </template>
    <template v-else>
      <div class="rate-readonly">
        <span
          class="talc ta-star rate-star active"
          :style="{ fontSize: size + 'px' }"
          v-for="complete in score[0] * 1"
          :key="complete"
        ></span>

        <span
          v-rate:value="[score[1], size]"
          class="talc ta-star rate-star active pre"
          :style="{ fontSize: size + 'px' }"
        >
          <span class="mark"></span>
        </span>

        <span
          class="talc ta-star rate-star"
          :style="{ fontSize: size + 'px' }"
          v-for="complete in score[2] * 1"
          :key="complete"
        ></span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { rateProps } from "./type";
import { useRate } from "../../hooks";
import { rate } from "./directives";

export default defineComponent({
  name: "t-rate",
  directives: {
    rate,
  },
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
    readonyRate: {
      type: String,
      validator: (value: string) => {
        let rate = value.split(".");
        if (+rate[0] < 5 && +rate[0] >= 0) return true;
        console.warn("rate component warn: the score ranges from 0 to 5");
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

    let score: string[] = [];
    if (props.readonyRate) {
      score = props.readonyRate.split(".");
      let rest = 5 - +score[0] - 1 + "";
      score.push(rest);
    }

    return { starNum, setStarNum, currentIndex, score };
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

  .rate-readonly {
    display: flex;

    .rate-star {
      position: relative;
      color: #999;
      margin-right: 10px;

      &.pre {
        .mark {
          position: absolute;
          right: 0;
          top: 0;
          display: block;
          background: #fff;
        }
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