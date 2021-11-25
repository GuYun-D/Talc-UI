<template>
  <div class="t-dot" :class="[dotPosition]" v-if="hasDot">
    <div
      class="dot-item"
      :class="{ [dotType]: isCircle }"
      v-for="item in itemLength"
      :key="item"
    >
      <a
        href="javascript:;"
        class="dot-link"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#fff',
        }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
  IDotProps,
  dotType,
  dotPositionEnum,
  carouselDirectionEnum,
} from "../types";

export default defineComponent({
  name: "t-dot",
  props: {
    itemLength: {
      type: Number,
      required: true,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
    dotBgColor: {
      type: String,
      default: "#fff",
    },
    dotType: {
      type: String,
      default: "circle",
    },
    trigger: {
      type: String,
      default: "click",
    },
    dotPosition: {
      type: String,
      default: "bbottom",
    },
  },
  setup(props: IDotProps, { emit }) {
    const dotClick = (index: number) => {
      emit("dotClick", index);
    };

    const isCircle = ref(true);

    onMounted(() => {
      if (props.dotType === dotType.circle) {
        isCircle.value = false;
      } else {
        isCircle.value = true;
      }
    });

    if (props.dotPosition === carouselDirectionEnum.vertical) {
    }


    return { dotClick, isCircle };
  },
});
</script>

<style scoped lang="scss">
.t-dot {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: -20px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);

  &.vertical {
    right: 0 !important;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
  }

  .dot-item {
    display: inline-flex;
    margin: 3px;

    &.rectangle {
      .dot-link {
        width: 26px;
        padding-top: 3px;
        border-radius: 0;
      }
    }

    .dot-link {
      display: inline-block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      height: 0;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
    }
  }
}
</style>