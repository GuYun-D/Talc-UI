<template>
  <div class="t-dot" v-if="hasDot">
    <div class="dot-item" v-for="item in itemLength" :key="item">
      <a
        href="javascript:;"
        class="dot-link"
        :style="{
          backgroundColor: (item - 1) === currentIndex ? dotBgColor : '#fff',
        }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  },
  setup(props, { emit }) {
    const dotClick = (index) => {
      emit("dotClick", index);
    };
    
    return { dotClick };
  },
});
</script>

<style scoped lang="scss">
.t-dot {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;

  .dot-item{
    display: inline-flex;
    margin: 3px;

    .dot-link{
      display: block;
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