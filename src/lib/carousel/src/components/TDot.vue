<template>
  <div class="t-dot" v-if="hasDot">
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
import { IDotProps, dotType } from "../types";

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
  },
  setup(props: IDotProps, { emit }) {
    const dotClick = (index: number) => {
      emit("dotClick", index);
    };

    const isCircle = ref(true);

    onMounted(() => {
      if (props.dotType === "circle") {
        isCircle.value = false;
      } else {
        isCircle.value = true;
      }
    });
    return { dotClick, isCircle };
  },
});
</script>

<style scoped lang="scss">
.t-dot {
  width: 100%;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);

  .dot-item {
    display: inline-flex;
    margin: 3px;

    &.rectangle {
      .dot-link {
        width: 26px;
        padding-top: 3px;
      }
    }

    .dot-link {
      display: inline-block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      height: 0;
      // border-radius: 50%;
      background-color: rgb(255, 255, 255);
    }
  }
}
</style>