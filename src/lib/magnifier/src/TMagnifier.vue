<template>
  <div
    class="t-magnifier"
    v-magnifier
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
import { magnifier } from "./directives";

export default defineComponent({
  name: "t-magnifier",
  directives: {
    magnifier,
  },

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
      default: 100,
    },
    magHeight: {
      type: Number,
      default: 100,
    },
    imgAlt: String,
    radius: {
      type: Boolean,
      default: false
    }
  },
  setup(props: magnifierProps) {
    if(props.radius && props.magWidth != props.magHeight){
      console.warn("magnifier warn：You want to use the radius attribute to change the round corner of the magnifier to 50%, but the size of your current magnifier is not square, which will affect the beauty of the magnifier")
    }
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
    border-radius: 50%;

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