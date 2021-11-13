<template>
  <div
    class="t-magnifier"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a
      :href="link"
      class="mag-wrap"
      :target="blank ? '_blank' : ''"
      :style="{
        width: magWidth + 'px',
        height: magHeight + 'px',
      }"
    >
      <img
        :src="imgUrl"
        class="mag-img"
        :alt="imgAlt"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px',
        }"
      />
    </a>
    <a :href="link" class="img-lk">
      <img :src="imgUrl" class="static-img" :alt="imgAlt" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { magnifierProps } from "./type";

export default defineComponent({
  name: "t-magnifier",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    blank: {
      type: Boolean,
      default: true,
    },
    link: String,
    imgWidth: {
      type: Number,
      default: 656,
    },
    imgHeight: {
      type: Number,
      default: 369,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
    },
    imgAlt: String,
  },
  setup(props: magnifierProps) {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-magnifier {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .static-img {
    width: 100%;
  }

  .mag-wrap {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 3px #ccc;
    cursor: move;
    overflow: hidden;

    &.show {
      display: block;
      transform: scale(1.5);
    }

    .mag-img {
      position: relative;
      top: 0;
      left: 0;
    }
  }
}
</style>