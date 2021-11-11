<template>
  <div class="t-director">
    <div class="dir-next dir" v-if="dir === 'next'">
      <a href="javascript:;" class="talc ta-right-arrow" @click="dirClick(dir)"
        ></a
      >
    </div>
    <div class="dir-prev dir" v-if="dir === 'prev'">
      <a
        href="javascript:;"
        class="talc ta-left-arrow"
        @click="dirClick(dir)"
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IDirectorProps } from "../types";

export default defineComponent({
  name: "t-director",
  props: {
    dir: {
      type: String,
      default: true,
    },
  },
  setup(props: IDirectorProps, { emit }) {
    const dirClick = (dir: string) => {
      emit("dirClick", dir);
    };
    return { dirClick };
  },
});
</script>

<style scoped lang="scss">
.dir {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);

  a {
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
  }

  &.dir-next {
    right: 0;
  }

  &.dir-prev {
    left: 0;
  }
}
</style>